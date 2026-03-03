function Contact() {
    return (
        <section className="contact section" id="contact">
            <div className="container-wide contact-layout">
                <div>
                    <p className="eyebrow dark">Contact</p>
                    <h2>Joseph Idemudia & Co.</h2>
                    <p>
                        Suite 82, Asucon Plaza, 513/515 Ikorodu Road, Ketu, Lagos.
                    </p>
                </div>

                <div className="contact-card">
                    <p><strong>Email:</strong> josephidemudiaandco@yahoo.com</p>
                    <p><strong>Tell:</strong> 08055147009</p>
                    <p><strong>Tell:</strong> 07060558979</p>
                    <p><strong>Tell:</strong> 07086508404</p>
                    <p><strong>Tell:</strong> 08067053452</p>
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
                    <a href="mailto:josephidemudiaandco@yahoo.com" className="btn btn-primary">Send Email</a>
                </div>
            </div>
        </section>
    )
}

export default Contact
