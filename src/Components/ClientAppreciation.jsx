import appreciationImage from '../assets/new.jpg'
import ntaiImage from '../assets/ntai.jpg'

function ClientAppreciation() {
    return (
        <section className="client-appreciation section" id="news-publications">
            <div className="container-wide">
                <p className="eyebrow dark">News &amp; Publications</p>
                <h2>Client Appreciation</h2>
                <div className="news-collection">
                    <div className="appreciation-grid">
                        <div className="appreciation-media">
                            <img src={ntaiImage} alt="Mr Ntai Bagshaw birthday tribute" loading="lazy" />
                        </div>
                        <div className="appreciation-content">
                            <h3>Mr Ntai Bagshaw</h3>
                            <p className="appreciation-lead">
                                Today, we celebrate your special day and the excellence, resilience, and dedication
                                that define you.
                            </p>
                            <p>
                                On behalf of everyone at Joseph Idemudia &amp; Co., we are honoured to celebrate you
                                and the impact you continue to make. Your commitment and achievements remain truly
                                inspiring, and it is always a privilege to stand with you.
                            </p>
                            <p>
                                May the year ahead bring greater success, fulfilment, and joy. Happy birthday, and
                                thank you for the trust and partnership we share.
                            </p>
                        </div>
                    </div>
                    <div className="appreciation-grid">
                        <div className="appreciation-media">
                            <img src={appreciationImage} alt="Client appreciation" loading="lazy" />
                        </div>
                        <div className="appreciation-content">
                            <h3>Client Appreciation</h3>
                            <p className="appreciation-lead">
                                Today, we celebrate not just another year, but a life marked by purpose, resilience,
                                and remarkable achievements.
                            </p>
                            <p>
                                On behalf of everyone at Joseph Idemudia &amp; Co., we are honoured to celebrate you
                                and the impact you continue to make. Your dedication, vision, and excellence remain
                                truly inspiring, and it is always a privilege to work alongside you.
                            </p>
                            <p>
                                As you mark this special day, we wish you continued success, good health, and even
                                greater accomplishments in the years ahead. We are grateful for the trust and
                                partnership we share.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientAppreciation
