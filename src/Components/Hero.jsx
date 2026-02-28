import heroImage from '../assets/gavel.jpg'

function Hero() {
    return (
        <section
            className="hero"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="overlay">
                <div className="hero-content">
                    <h1>Trusted Legal Expertise</h1>
                    <p>
                        Providing a git add .reliable and professional legal services tailored to your needs.
                    </p>
                    <button>Book Consultation</button>
                </div>
            </div>
        </section>
    )
}

export default Hero