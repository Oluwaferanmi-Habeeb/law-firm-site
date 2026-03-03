import { useEffect, useRef, useState } from 'react'
import mpAdaora from '../assets/team-mp-adaora.svg'
import mpChinedu from '../assets/team-mp-chinedu.svg'
import assocIbrahim from '../assets/team-assoc-ibrahim.svg'
import assocZainab from '../assets/team-assoc-zainab.svg'

const teamMembers = [
    {
        name: 'Asine Joseph Idemudia',
        role: 'Managing Partner',
        bio: 'He is a graduate of Ambrose Alli University. He was called to the Nigerian Bar in 2004. He has worked in notable law firms in Lagos namely; Awokoya and Awokoya & Co, Lexx and Sophy and Chief Adesegun Adebayo & Co. Joseph posseses a vast experience in litigation, due diligence and regulatory compliance, labour law, family law, dispute resolution and arbitration proceedings, real estate and administration of estate matters. He is currently the Special Adviser to the Chairman of Oshodi Isolo Local Government Area.',
        image: mpAdaora,
    },
    {
        name: 'Omosalewa Asine',
        role: 'Partner / Chief Operating Officer',
        bio: "Omosalewa Asine is the Chief Operating Officer of the firm. Her professional experience spans for over 20 years from banking at Gtbank Plc and Suntrust Bank Nigeria Ltd to core law practice and capital market at Balogun Adesegun Adebayo and Co and TOLG. She holds a Bachelor's Degree in Law from Olabisi Onabanjo University and several credit appraisal degrees. Salewa is versed in banking and finance, real estate, regulatory compliance, company secretarial services and corporate commercial practice.",
        image: mpChinedu,
    },
    {
        name: 'Ehianata Roberts Omoighe',
        role: 'Partner',
        bio: 'He is a graduate of University of Benin. He was called to the Nigerian Bar in 2008. He worked in Office of Public Defender Ministry of Justice Anambra State, and he has also worked in law firms in Lagos namely; Ideh Patrick Laurence and Oye Akintola & Co. Ehianata is well versed in litigation, commercial transactions and real estate.',
        image: assocIbrahim,
    },
    {
        name: 'Olawuni Ebenezer',
        role: 'Chambers Manager',
        bio: 'He studied Computer Science from Lagos State Polytechnic and is a graduate of Information Technology Security, SMC University. Ebenezer specializes in office technology and management, and he is responsible for general administration and effective running of all sections in the firm.',
        image: assocZainab,
    },
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
                        className={`profile-card partner-card reveal-card corner-${index + 1}`}
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
        </section>
    )
}

export default Team
