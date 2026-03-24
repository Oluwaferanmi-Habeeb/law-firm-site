import { useEffect, useState } from 'react'
import appreciationImage from '../assets/newpaare.jpg'

const APPRECIATION_KEY = 'jic_appreciation_start'
const APPRECIATION_WINDOW_MS = 36 * 60 * 60 * 1000

function ClientAppreciation() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        try {
            const stored = window.localStorage.getItem(APPRECIATION_KEY)
            const start = stored ? Number(stored) : Date.now()
            if (!stored) {
                window.localStorage.setItem(APPRECIATION_KEY, String(start))
            }
            setVisible(Date.now() - start <= APPRECIATION_WINDOW_MS)
        } catch {
            setVisible(true)
        }
    }, [])

    if (!visible) {
        return null
    }

    return (
        <section className="client-appreciation section" id="news-publications">
            <div className="container-wide appreciation-grid">
                <div className="appreciation-media">
                    <img src={appreciationImage} alt="Client appreciation" loading="lazy" />
                </div>
                <div className="appreciation-content">
                    <p className="eyebrow dark">News &amp; Publications</p>
                    <h2>Client Appreciation</h2>
                    <p className="appreciation-lead">
                        Today, we celebrate not just another year, but a life marked by purpose, resilience, and
                        remarkable achievements.
                    </p>
                    <p>
                        On behalf of everyone at Joseph Idemudia &amp; Co., we are honoured to celebrate you and the
                        impact you continue to make. Your dedication, vision, and excellence remain truly inspiring,
                        and it is always a privilege to work alongside you.
                    </p>
                    <p>
                        As you mark this special day, we wish you continued success, good health, and even greater
                        accomplishments in the years ahead. We are grateful for the trust and partnership we share.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ClientAppreciation
