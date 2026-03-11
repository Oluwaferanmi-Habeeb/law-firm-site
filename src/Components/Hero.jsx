import { useState, useEffect } from 'react'
import hero1 from '../assets/gavel.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'

const slides = [
    {
        image: hero1,
        title: 'Trusted Counsel',
        subtitle: 'Commercially focused advisory for institutions and private clients.',
    },
    {
        image: hero2,
        title: 'Strategic Advice',
        subtitle: 'Clear outcomes for complex mandates and urgent decisions.',
    },
    {
        image: hero3,
        title: 'Excellence And Integrity',
        subtitle: 'Dependable representation across transactions and disputes.',
    },
]

function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [ready, setReady] = useState(false)

    useEffect(() => {
        const initialDelay = setTimeout(() => setReady(true), 3000)
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length)
        }, 5500)

        return () => {
            clearTimeout(initialDelay)
            clearInterval(interval)
        }
    }, [])

    return (
        <section className="hero" id="home">
            {slides.map((slide, index) => (
                <div
                    key={slide.title}
                    className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                    aria-hidden={index !== currentIndex}
                />
            ))}

            <div className="hero-overlay">
                <div className={`hero-content container-wide ${ready ? 'hero-content-ready' : 'hero-content-wait'}`}>
                    <p className="eyebrow">Tier 1 Business Law Practice</p>
                    {ready ? (
                        <>
                            <h1>{slides[currentIndex].title}</h1>
                            <p className="hero-subtitle">{slides[currentIndex].subtitle}</p>
                        </>
                    ) : null}
                    <div className="hero-actions">
                        <a href="#/about" className="btn btn-primary">View The Firm</a>
                        <a href="#/contact" className="btn btn-outline">Contact Us</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
