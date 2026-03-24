import appreciationImage from '../assets/appreciation.jpg'

function ClientAppreciation() {
    return (
        <section className="client-appreciation section" id="appreciation">
            <div className="container-wide appreciation-grid">
                <div className="appreciation-media">
                    <img src={appreciationImage} alt="Mrs. Nwakpa" loading="lazy" />
                </div>
                <div className="appreciation-content">
                    <p className="eyebrow dark">Client Appreciation</p>
                    <h2>Celebrating Mrs. Nwakpa</h2>
                    <p className="appreciation-lead">
                        Today we celebrate Mrs. Nwakpa and the trust she has placed in our firm. We are grateful for her
                        partnership and the opportunity to serve her.
                    </p>
                    <p>
                        Happy Birthday, Ma. We wish you continued success, good health, and many more milestones.
                    </p>
                    <p className="appreciation-signoff">With appreciation, JOSEPH IDEMUDIA &amp; CO.</p>
                </div>
            </div>
        </section>
    )
}

export default ClientAppreciation
