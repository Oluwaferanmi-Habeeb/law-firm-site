import { useEffect, useRef, useState } from 'react'
import salewaImage from '../assets/hero5.jpg'
import josephImage from '../assets/hero6.jpg'
import robertsImage from '../assets/hero7.jpg'
import firmPhoto1 from '../assets/group1.jpg'
import firmPhoto2 from '../assets/group2.jpg'
import firmPhoto3 from '../assets/group3.jpg'
import firmPhoto4 from '../assets/group4.jpg'
import firmPhoto5 from '../assets/group5.jpg'
import firmPhoto6 from '../assets/group6.jpg'

const teamMembers = [
    {
        name: 'Asine Joseph Idemudia',
        role: 'Managing Partner',
        bio: 'Called to the Nigerian Bar in 2004, Joseph has led mandates across litigation, arbitration, real estate, and regulatory compliance. He has worked with leading Lagos firms including Awokoya and Awokoya & Co, Lexx and Sophy, and Chief Adesegun Adebayo & Co. He is currently Special Adviser to the Chairman of Oshodi Isolo LGA.',
        image: josephImage,
        mediaType: 'photo',
    },
    {
        name: 'Omosalewa Asine',
        role: 'Partner / COO',
        bio: "With 20+ years’ experience spanning banking, capital markets, and core legal practice, Salewa advises on banking and finance, corporate commercial matters, real estate, and regulatory compliance. She is a law graduate of Olabisi Onabanjo University and holds multiple credit appraisal certifications.",
        image: salewaImage,
        mediaType: 'photo',
    },
    {
        name: 'Ehianata Roberts Omoighe',
        role: 'Partner',
        bio: 'Called to the Nigerian Bar in 2008, Roberts has advised on litigation, commercial transactions, and real estate. He previously served with the Office of the Public Defender, Anambra State, and practiced at Ideh Patrick Laurence and Oye Akintola & Co.',
        image: robertsImage,
        mediaType: 'photo',
    },
]

const firmGallery = [
    { src: firmPhoto1, alt: 'Firm group photo 1' },
    { src: firmPhoto2, alt: 'Firm group photo 2' },
    { src: firmPhoto3, alt: 'Firm group photo 3' },
    { src: firmPhoto4, alt: 'Firm group photo 4' },
    { src: firmPhoto5, alt: 'Firm group photo 5' },
    { src: firmPhoto6, alt: 'Firm group photo 6' },
]

function Team() {
    const sectionRef = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const section = sectionRef.current
        if (!section) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true)
                        observer.disconnect()
                    }
                })
            },
            { threshold: 0.22 }
        )

        observer.observe(section)
        return () => observer.disconnect()
    }, [])

    return (
        <section className={`team section ${visible ? 'is-visible' : ''}`} id="people" ref={sectionRef}>
            <div className="container-wide section-heading">
                <p className="eyebrow dark">Our Team</p>
                <h2>Partners and Associates</h2>
                <p className="section-intro">
                    Our team includes the Managing Partner, Partners, and Chambers leadership.
                </p>
            </div>

            <div className="container-wide team-members-grid">
                {teamMembers.map((person, index) => (
                    <article
                        className={`profile-card partner-card reveal-card corner-${index + 1} ${person.mediaType === 'photo' ? 'photo-card' : 'illustration-card'}`}
                        key={person.name}
                    >
                        <img src={person.image} alt={`${person.name} portrait`} loading="lazy" />
                        <div className="profile-content">
                            <h3>{person.name}</h3>
                            <p className="profile-role">{person.role}</p>
                            <p>{person.bio}</p>
                        </div>
                    </article>
                ))}
            </div>

            <div className="container-wide firm-gallery">
                <div className="section-heading compact">
                    <p className="eyebrow dark">Firm Gallery</p>
                    <h3>Inside The Firm</h3>
                    <p className="section-intro">
                        A glimpse of our working environment and client spaces.
                    </p>
                </div>
                <div className="firm-gallery-grid">
                    {firmGallery.map((photo, index) => (
                        <figure className="firm-gallery-card" key={`${photo.src}-${index}`}>
                            <img src={photo.src} alt={photo.alt} loading="lazy" />
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Team
