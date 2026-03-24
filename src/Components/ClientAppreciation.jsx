import { useEffect, useState } from 'react'
import appreciationImage from '../assets/appreciation.jpg'

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
        <section className="client-appreciation section" id="appreciation">
            <div className="container-wide appreciation-grid">
                <div className="appreciation-media">
                    <img src={appreciationImage} alt="Mrs. Nwakpa" loading="lazy" />
                </div>
                <div className="appreciation-content">
                    <p className="eyebrow dark">Client Appreciation</p>
                    <h2>Happy Birthday, Mrs. Nwakpa</h2>
                    <p className="appreciation-lead">
                        Today, we celebrate you and the trust you have placed in our firm. We are grateful for your
                        partnership and the opportunity to serve you.
                    </p>
                    <p>
                        Wishing you a joyful day, good health, and many more milestones ahead.
                    </p>
                    <p className="appreciation-signoff">With appreciation, JOSEPH IDEMUDIA &amp; CO.</p>
                </div>
            </div>
        </section>
    )
}

export default ClientAppreciation
