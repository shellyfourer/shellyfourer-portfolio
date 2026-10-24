import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export type PostFrontmatter = {
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  coverImage?: string
  draft?: boolean
}

export type Post = {
  slug: string
  frontmatter: PostFrontmatter
  readingTime: string
  content: string
}

export type PostMeta = Omit<Post, 'content'>

function parsePost(filename: string): Post {
  const slug = filename.replace(/\.mdx$/, '')
  const filePath = path.join(BLOG_DIR, filename)
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const fm = data as PostFrontmatter

  return {
    slug,
    frontmatter: fm,
    readingTime: readingTime(content).text,
    content,
  }
}

function isPublished(post: Post): boolean {
  if (process.env.NODE_ENV === 'development') return true
  return !post.frontmatter.draft
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map(parsePost)
    .filter(isPublished)
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
    .map(({ slug, frontmatter, readingTime }) => ({ slug, frontmatter, readingTime }))
}

export function getPost(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const post = parsePost(`${slug}.mdx`)

  // Block draft posts in production
  if (post.frontmatter.draft && process.env.NODE_ENV !== 'development') return null

  return post
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug)
}
