import { useState, useEffect } from 'react'
import hero1 from '../assets/gavel.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'

const slides = [
    {
        image: hero1,
        title: 'Redefining What Is Possible',
        subtitle: 'Setting new standards in legal excellence.',
    },
    {
        image: hero2,
        title: 'Where Innovation Leads',
        subtitle: 'Strategic counsel for high-stakes business decisions.',
    },
    {
        image: hero3,
        title: 'Beyond The Precedent',
        subtitle: 'Practical legal solutions for complex matters.',
    },
]

function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length)
        }, 5500)

        return () => clearInterval(interval)
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
                <div className="hero-content container-wide">
                    <p className="eyebrow">Tier 1 Business Law Practice</p>
                    <h1>{slides[currentIndex].title}</h1>
                    <p className="hero-subtitle">{slides[currentIndex].subtitle}</p>
                    <div className="hero-actions">
                        <a href="#about" className="btn btn-primary">Learn More</a>
                        <a href="#contact" className="btn btn-outline">Book Consultation</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
