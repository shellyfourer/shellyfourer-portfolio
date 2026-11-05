// Run with: pnpm send-newsletter
// Reads the latest blog post and sends it to all Resend contacts in the segment.

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const SEGMENT_ID = process.env.RESEND_SEGMENT_ID!
const FROM = 'Shelly Fourer <shelly@shellyfourer.com>'
const BASE_URL = 'https://shellyfourer.com'
const BLOG_DIR = path.join(process.cwd(), 'content/blog')

// Read the latest post (most recently dated, non-draft)
function getLatestPost() {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))
  const posts = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8')
      const { data } = matter(raw)
      return { slug: file.replace(/\.mdx$/, ''), frontmatter: data }
    })
    .filter((p) => !p.frontmatter.draft)
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())

  return posts[0]
}

// Fetch all contacts in the segment
async function getContacts(): Promise<string[]> {
  const contacts: string[] = []
  let cursor: string | undefined

  do {
    const res = await resend.contacts.list({ audienceId: SEGMENT_ID, ...(cursor ? { after: cursor } : {}) })
    if (res.error) throw new Error(res.error.message)
    const page = res.data?.data ?? []
    contacts.push(...page.filter((c) => !c.unsubscribed).map((c) => c.email))
    cursor = page.length > 0 ? page[page.length - 1].id : undefined
    if (page.length < 100) break
  } while (cursor)

  return contacts
}

async function main() {
  const post = getLatestPost()
  if (!post) {
    console.log('No posts found.')
    process.exit(1)
  }

  const { title, description } = post.frontmatter
  const url = `${BASE_URL}/blog/${post.slug}`

  console.log(`\nPost: ${title}`)
  console.log(`URL:  ${url}\n`)

  const contacts = await getContacts()
  console.log(`Sending to ${contacts.length} subscriber(s)...\n`)

  // Send to all contacts in batches to stay within Resend rate limits
  const results = await Promise.allSettled(
    contacts.map((email) =>
      resend.emails.send({
        from: FROM,
        to: [email],
        subject: title,
        html: `
          <div style="font-family: sans-serif; color: #111; max-width: 600px; line-height: 1.6;">
            <h1 style="font-size: 24px; margin-bottom: 8px;">${title}</h1>
            <p style="color: #555;">${description}</p>
            <a href="${url}" style="display: inline-block; margin-top: 16px; background: #7c3aed; color: #fff; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-family: monospace;">
              Read the post
            </a>
            <p style="margin-top: 32px; font-size: 13px; color: #888;">
              You're receiving this because you subscribed at shellyfourer.com.<br/>
              <a href="https://resend.com/unsubscribe" style="color: #888;">Unsubscribe</a>
            </p>
          </div>
        `,
      })
    )
  )

  const succeeded = results.filter((r) => r.status === 'fulfilled').length
  const failed = results.filter((r) => r.status === 'rejected').length
  console.log(`Done. ${succeeded} sent, ${failed} failed.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})