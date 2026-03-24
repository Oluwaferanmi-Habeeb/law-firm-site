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
                        On this special day, as we celebrate your birthday, we want to take a moment to express our
                        deepest gratitude for the trust and partnership you have shared with us over the years. You
                        have been far more than a valued client — you have become an integral part of our firm’s story.
                    </p>
                    <p>
                        Through every challenge, milestone, and success, we have been honored to stand beside you,
                        safeguarding what matters most in your life. Your unwavering loyalty and the confidence you
                        place in our team continue to inspire us to deliver not only exceptional legal expertise, but
                        also genuine care, dedication, and personal attention with every matter we handle for you.
                    </p>
                    <p>
                        Thank you for allowing us to walk this journey with you. On your birthday, we wish you abundant
                        joy, good health, and continued success in all your endeavors. We deeply value the strong
                        relationship we have built together and remain wholeheartedly committed to serving you with
                        integrity and excellence for many years to come.
                    </p>
                    <p>
                        You are more than a long-standing client to us — you are truly cherished family. Happy Birthday!
                    </p>
                    <p className="appreciation-signoff">With appreciation, JOSEPH IDEMUDIA &amp; CO.</p>
                </div>
            </div>
        </section>
    )
}

export default ClientAppreciation
