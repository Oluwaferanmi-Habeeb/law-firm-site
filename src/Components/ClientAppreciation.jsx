import { useEffect, useState } from 'react'
import internImage from '../assets/tobias-intern.jpg'

const APPRECIATION_EXPIRY_KEY = 'jic_news_expiry_v2'
const APPRECIATION_DURATION_MS = 7 * 24 * 60 * 60 * 1000

function ClientAppreciation() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const storedExpiry = Number(localStorage.getItem(APPRECIATION_EXPIRY_KEY))
        const now = Date.now()
        const expiry = Number.isFinite(storedExpiry) && storedExpiry > now
            ? storedExpiry
            : now + APPRECIATION_DURATION_MS

        if (!Number.isFinite(storedExpiry) || storedExpiry <= now) {
            localStorage.setItem(APPRECIATION_EXPIRY_KEY, String(expiry))
        }

        setVisible(now <= expiry)
    }, [])

    if (!visible) {
        return null
    }

    return (
        <section className="client-appreciation section" id="news-publications">
            <div className="container-wide">
                <p className="eyebrow dark">News &amp; Publications</p>
                <h2>News &amp; Publications</h2>
                <div className="news-collection">
                    <div className="appreciation-grid">
                        <div className="appreciation-media">
                            <img src={internImage} alt="Tobias Okonkwo welcome announcement" loading="lazy" />
                        </div>
                        <div className="appreciation-content">
                            <h3>Welcome, Tobias Okonkwo</h3>
                            <p className="appreciation-lead">
                                Joseph Idemudia &amp; Co. is pleased to welcome our newest intern, Tobias Okonkwo.
                            </p>
                            <p>
                                We are delighted to have you join the team and look forward to the insight, energy,
                                and commitment you bring. This is a space for learning, growth, and meaningful
                                contribution, and we’re excited to see you thrive.
                            </p>
                            <p>
                                Welcome aboard, Tobias — we’re glad to have you with us.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientAppreciation
