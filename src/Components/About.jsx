function About() {
    return (
        <section className="about section" id="about">
            <div className="container-wide about-grid">
                <div>
                    <p className="eyebrow dark">Who We Are</p>
                    <h2>Commercially Grounded. Professionally Driven.</h2>
                </div>

                <div className="about-copy">
                    <p>
                        Joseph Idemudia & Company provides legal advisory services across corporate,
                        commercial, and dispute resolution matters.
                    </p>
                    <p>
                        We combine technical legal depth with practical business judgment to support
                        sound, timely decisions.
                    </p>
                </div>
            </div>

            <div className="container-wide firm-metrics" aria-label="Firm Highlights">
                <article>
                    <h3>20+</h3>
                    <p>Years of collective experience</p>
                </article>
                <article>
                    <h3>100+</h3>
                    <p>Complex mandates delivered</p>
                </article>
                <article>
                    <h3>24/7</h3>
                    <p>Responsive client support</p>
                </article>
            </div>
        </section>
    )
}

export default About
