function Contact() {
    return (
        <section className="contact section" id="contact">
            <div className="container-wide contact-layout">
                <div>
                    <p className="eyebrow dark">Contact</p>
                    <h2>Speak With Our Team</h2>
                    <p>
                        Contact us for confidential legal support. We respond promptly to all inquiries.
                    </p>
                </div>

                <div className="contact-card">
                    <p><strong>Email:</strong> asineidemudia@yahoo.com</p>
                    <p><strong>Phone:</strong> +234 800 000 0000</p>
                    <p><strong>Office:</strong> 513/515, Suite 83 Ikorodu Road, Asucon Plaza, Ketu, Lagos</p>
                    <p>
                        <strong>LinkedIn:</strong>{' '}
                        <a
                            className="text-link"
                            href="https://www.linkedin.com/in/jic-property-2a61b8233"
                            target="_blank"
                            rel="noreferrer"
                        >
                            JIC Property
                        </a>
                    </p>
                    <a href="mailto:asineidemudia@yahoo.com" className="btn btn-primary">Send Email</a>
                </div>
            </div>
        </section>
    )
}

export default Contact
