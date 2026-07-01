import { useState } from 'react'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

const ADMIN_EMAIL = 'ashirbaddas007@gmail.com'
const FORM_ENDPOINT = `https://formsubmit.co/${ADMIN_EMAIL}`

export default function ContactSection() {
  const [status, setStatus] = useState('')
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSending(true)
    setStatus('')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Message could not be sent')
      }

      form.reset()
      setStatus('Thanks! Your message has been sent.')
    } catch {
      setStatus('Sorry, something went wrong. Please try again.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="section" id="contact" data-section="Contact">
      <SectionHeading title="Get In Touch" />
      <form className="contact-card" onSubmit={handleSubmit}>
        <input type="hidden" name="_subject" value="New portfolio contact message" />
        <input type="hidden" name="_captcha" value="false" />
        <div className="contact-row">
          <label>
            <span>Name</span>
            <input type="text" name="name" placeholder="John Doe" required />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" placeholder="john@example.com" required />
          </label>
        </div>
        <label>
          <span>Subject</span>
          <input type="text" name="subject" placeholder="Project inquiry" required />
        </label>
        <label>
          <span>Message</span>
          <textarea name="message" placeholder="Your message here..." rows="6" required />
        </label>
        <button type="submit" className="button button-primary submit-button" disabled={isSending}>
          <Icon name="send" />
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </section>
  )
}
