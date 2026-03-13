import { useState } from 'react'

const CONTACT_ENDPOINT = (import.meta.env.VITE_CONTACT_FORM_ENDPOINT || '').trim()
const CONTACT_METHOD = (import.meta.env.VITE_CONTACT_FORM_METHOD || 'POST').trim().toUpperCase()
const CONTACT_RECIPIENT_EMAIL =
    (import.meta.env.VITE_CONTACT_RECIPIENT_EMAIL || 'josephidemudiaandco@yahoo.com').trim()

function Contact() {
    const MailIcon = () => (
        <svg className="ui-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 6h18v12H3z" />
            <path d="m3 7 9 7 9-7" />
        </svg>
    )

    const PhoneIcon = () => (
        <svg className="ui-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 3h4l2 5-2.5 2.5a16 16 0 0 0 4 4L16 12l5 2v4a2 2 0 0 1-2 2C10.16 20 4 13.84 4 6a2 2 0 0 1 2-2z" />
        </svg>
    )

    const LocationIcon = () => (
        <svg className="ui-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
            <circle cx="12" cy="10" r="2.5" />
        </svg>
    )

    const LinkIcon = () => (
        <svg className="ui-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M10 14 14 10" />
            <path d="M8 8h5V3" />
            <path d="M16 16h-8v5h13V8h-5z" />
        </svg>
    )

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        website: '',
        loadedAt: Date.now(),
    })
    const [status, setStatus] = useState('idle')
    const [feedback, setFeedback] = useState('')

    const updateField = (event) => {
        const { name, value } = event.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (status === 'submitting') return

        if (formData.website.trim()) {
            setStatus('success')
            setFeedback('Message received.')
            return
        }

        if (Date.now() - formData.loadedAt < 3000) {
            setStatus('error')
            setFeedback('Please wait a moment and submit again.')
            return
        }

        if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
            setStatus('error')
            setFeedback('Please provide your name, email, and message.')
            return
        }

        setStatus('submitting')
        setFeedback('')

        const payload = {
            fullName: formData.fullName.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            company: formData.company.trim(),
            message: formData.message.trim(),
            source: 'Website Contact Form',
        }

        try {
            if (CONTACT_ENDPOINT) {
                const controller = new AbortController()
                const timeoutId = setTimeout(() => controller.abort(), 12000)

                const headers = {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                }

                const response = await fetch(CONTACT_ENDPOINT, {
                    method: CONTACT_METHOD,
                    headers,
                    body: JSON.stringify(payload),
                    signal: controller.signal,
                })

                clearTimeout(timeoutId)

                if (!response.ok) {
                    throw new Error('Contact endpoint failed.')
                }
            } else {
                const subject = encodeURIComponent('Website Inquiry - JOSEPH IDEMUDIA & CO.')
                const body = encodeURIComponent(
                    `Name: ${payload.fullName}\nEmail: ${payload.email}\nPhone: ${payload.phone}\nCompany: ${payload.company}\n\nMessage:\n${payload.message}`
                )
                window.location.href = `mailto:${CONTACT_RECIPIENT_EMAIL}?subject=${subject}&body=${body}`
            }

            setStatus('success')
            setFeedback('Thank you. Your message has been sent.')
            setFormData((prev) => ({
                ...prev,
                fullName: '',
                email: '',
                phone: '',
                company: '',
                message: '',
                website: '',
                loadedAt: Date.now(),
            }))
        } catch (error) {
            if (error?.name === 'AbortError') {
                setStatus('error')
                setFeedback('Request timed out. Please try again or email us directly.')
                return
            }
            setStatus('error')
            setFeedback('Unable to submit at the moment. Please try again.')
        }
    }

    return (
        <section className="contact section" id="contact">
            <div className="container-wide contact-layout">
                <div>
                    <p className="eyebrow dark">Contact</p>
                    <h2>Joseph Idemudia & Co.</h2>
                    <p>
                        Suite 82, Asucon Plaza, 513/515 Ikorodu Road, Ketu, Lagos.
                    </p>
                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            value={formData.fullName}
                            onChange={updateField}
                            autoComplete="name"
                            required
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={updateField}
                            autoComplete="email"
                            required
                        />

                        <label htmlFor="phone">Phone</label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={updateField}
                            autoComplete="tel"
                        />

                        <label htmlFor="company">Company</label>
                        <input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={updateField}
                            autoComplete="organization"
                        />

                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={updateField}
                            required
                        />

                        <input
                            className="honeypot"
                            type="text"
                            name="website"
                            value={formData.website}
                            onChange={updateField}
                            tabIndex="-1"
                            autoComplete="off"
                            aria-hidden="true"
                        />

                        <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
                            {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
                        </button>
                        {!CONTACT_ENDPOINT ? (
                            <p className="form-feedback" role="status">
                                Form currently opens your email app. Set <code>VITE_CONTACT_FORM_ENDPOINT</code> for
                                direct form submission (for Vercel, you can use <code>/api/contact</code>).
                            </p>
                        ) : null}
                        {feedback ? (
                            <p
                                className={`form-feedback ${status === 'success' ? 'ok' : 'err'}`}
                                role={status === 'success' ? 'status' : 'alert'}
                                aria-live="polite"
                            >
                                {feedback}
                            </p>
                        ) : null}
                    </form>
                </div>

                <div className="contact-card">
                    <p className="contact-meta"><MailIcon /><span><strong>Email:</strong> josephidemudiaandco@yahoo.com</span></p>
                    <p className="contact-meta"><PhoneIcon /><span><strong>Tel:</strong> 08055147009</span></p>
                    <p className="contact-meta"><PhoneIcon /><span><strong>Tel:</strong> 07060558979</span></p>
                    <p className="contact-meta"><PhoneIcon /><span><strong>Tel:</strong> 07086508404</span></p>
                    <p className="contact-meta"><PhoneIcon /><span><strong>Tel:</strong> 08067053452</span></p>
                    <p className="contact-meta">
                        <LocationIcon />
                        <span><strong>Office:</strong> Suite 82, Asucon Plaza, 513/515 Ikorodu Road, Ketu, Lagos</span>
                    </p>
                    <p className="contact-meta">
                        <LinkIcon />
                        <span><strong>LinkedIn:</strong>{' '}
                        <a
                            className="text-link"
                            href="https://www.linkedin.com/in/jic-property-2a61b8233"
                            target="_blank"
                            rel="noreferrer"
                        >
                            JIC Property
                        </a></span>
                    </p>
                    <a href={`mailto:${CONTACT_RECIPIENT_EMAIL}`} className="btn btn-primary">Send Email</a>
                </div>
            </div>
        </section>
    )
}

export default Contact
