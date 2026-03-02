import { useState, useEffect } from "react"
import hero1 from "../assets/gavel.jpg"
import hero2 from "../assets/hero2.jpg"
import hero3 from "../assets/hero3.jpg"

function Hero() {
    const images = [hero1, hero2, hero3]
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length)
        }, 6000) // 6 seconds per image

        return () => clearInterval(interval)
    }, [])

    return (
        <section
            className="hero"
            style={{
                backgroundImage: `url(${images[currentIndex]})`
            }}
        >
            <div className="overlay">
                <div className="hero-content">
                    <h1>Trusted Legal Expertise</h1>
                    <p>
                        Delivering strategic and professional legal services tailored to your needs.
                    </p>
                    <button>Book Consultation</button>
                </div>
            </div>
        </section>
    )
}

export default Hero