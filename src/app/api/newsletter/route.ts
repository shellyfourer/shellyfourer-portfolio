// This file IS the API endpoint for /api/newsletter.
// In Next.js, the folder path = the URL. No router setup needed — the file just exists here.
// In Spring Boot you'd write @RestController + @PostMapping("/api/newsletter") on a class.
// In Express you'd write router.post('/api/newsletter', ...) in a separate router file.

import { Resend } from 'resend'
import { WelcomeEmail } from '@/components/blog/WelcomeEmail'

// Runs once when the server starts, not on every request.
// Like a static field or @Bean in Spring — shared config, not per-user data.

const resend = new Resend(process.env.RESEND_API_KEY)
const SEGMENT_ID = process.env.RESEND_SEGMENT_ID!
const FROM = 'Shelly Fourer <shelly@shellyfourer.com>'

// The function name IS the HTTP method. Export POST → handles POST requests.
// Spring uses @PostMapping. Express uses router.post(). Same idea, different syntax.
export async function POST(request: Request) {
  try {
    // Read the JSON the browser sent in the request body.
    // In Express this is req.body (needs body-parser middleware).
    // In Spring this is @RequestBody on the method parameter.
    // Next.js handles it built-in with request.json().
    const { email, firstName, lastName } = await request.json()

    if (!email) {
      return Response.json({ error: 'Email is required' }, { status: 400 })
    }

    // Send both operations at the same time instead of one after the other.
    // Promise.all means "start both, wait for both to finish."
    // In Spring you'd use threads or CompletableFuture to do the same thing.
    const [{ error: contactError }, { error: emailError }] = await Promise.all([
      // Add the subscriber to our Resend audience (acts as our contact list).
      // Resend returns 409 if the contact already exists — we treat that as success.
      resend.contacts.create({
        email,
        firstName,
        lastName,
        unsubscribed: false,
        segments: [{ id: SEGMENT_ID }],
      }),
      // Send the welcome email immediately after subscribing.
      resend.emails.send({
        from: FROM,
        to: [email],
        subject: "Welcome, glad you're here.",
        react: WelcomeEmail(),
      }),
    ])

    // If something went wrong on our end, send back status 500 ("server error").
    // HTTP status codes are a REST standard — every framework uses them the same way.
    // 500 = our fault. 400 = bad input from the client. 200 = all good.
    // Contact already existing (409) is not an error — the email still goes out.
    const isContactDuplicate = contactError?.statusCode === 409
    const error = isContactDuplicate ? emailError : (contactError ?? emailError)
    if (error) {
      return Response.json({ error: { message: error.message } }, { status: 500 })
    }

    // Everything worked — send back 200 OK with a small JSON body.
    // Spring: ResponseEntity.ok(...). Express: res.json(...). Same concept.
    return Response.json({ ok: true })
  } catch (err) {
    // Something totally unexpected blew up (bad JSON, network down, etc.).
    // This is the safety net — always have one. Spring calls it @ExceptionHandler.
    const message = err instanceof Error ? err.message : String(err)
    return Response.json({ error: { message } }, { status: 500 })
  }
}
