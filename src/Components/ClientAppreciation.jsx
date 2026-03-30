import ntaiImage from '../assets/ntai.jpg'

function ClientAppreciation() {
    return (
        <section className="client-appreciation section" id="news-publications">
            <div className="container-wide">
                <p className="eyebrow dark">News &amp; Publications</p>
                <h2>News &amp; Publications</h2>
                <div className="news-collection">
                    <div className="appreciation-grid">
                        <div className="appreciation-media">
                            <img src={ntaiImage} alt="Mr Ntai Bagshaw birthday tribute" loading="lazy" />
                        </div>
                        <div className="appreciation-content">
                            <h3>Mr Ntai Bagshaw</h3>
                            <p className="appreciation-lead">
                                Today we celebrate you and the excellence, resilience, and dedication that define your
                                journey.
                            </p>
                            <p>
                                From all of us at Joseph Idemudia &amp; Co., please accept our heartfelt appreciation.
                                Your character, achievements, and the way you lead continue to inspire those around
                                you, and it is a privilege to stand with you.
                            </p>
                            <p>
                                We wish you a year filled with greater success, fulfilment, and joy. Happy birthday,
                                and thank you for the trust and partnership we share.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientAppreciation
