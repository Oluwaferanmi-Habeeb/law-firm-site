import mpAdaora from '../assets/team-mp-adaora.svg'
import mpChinedu from '../assets/team-mp-chinedu.svg'
import assocIbrahim from '../assets/team-assoc-ibrahim.svg'
import assocZainab from '../assets/team-assoc-zainab.svg'
import assocTosin from '../assets/team-assoc-tosin.svg'

const managingPartners = [
    {
        name: 'Barrister Joseph Idemudia Asine',
        role: 'Managing Partner',
        bio: 'Provides strategic leadership across the firm and advises on major commercial and dispute mandates.',
        image: mpAdaora,
    },
    {
        name: 'Anonymous Partner 01',
        role: 'Partner, Corporate Advisory',
        bio: 'Supports clients on governance, finance, and complex transactional matters.',
        image: mpChinedu,
    },
]

const associates = [
    {
        name: 'Anonymous Associate 01',
        role: 'Senior Associate, Projects',
        image: assocIbrahim,
    },
    {
        name: 'Anonymous Associate 02',
        role: 'Associate, Commercial Practice',
        image: assocZainab,
    },
    {
        name: 'Anonymous Associate 03',
        role: 'Associate, Tax and Regulatory',
        image: assocTosin,
    },
]

function Team() {
    return (
        <section className="team section" id="people">
            <div className="container-wide section-heading">
                <p className="eyebrow dark">Our People</p>
                <h2>Managing Partners and Associates</h2>
                <p className="section-intro">
                    Our team combines legal depth with commercial judgment to support complex client mandates.
                </p>
            </div>

            <div className="container-wide team-featured-grid">
                {managingPartners.map((person) => (
                    <article className="profile-card partner-card" key={person.name}>
                        <img src={person.image} alt={`${person.name} portrait`} loading="lazy" />
                        <div className="profile-content">
                            <p className="profile-label">Partner</p>
                            <h3>{person.name}</h3>
                            <p className="profile-role">{person.role}</p>
                            <p>{person.bio}</p>
                        </div>
                    </article>
                ))}
            </div>

            <div className="container-wide associates-header">
                <h3>Associates</h3>
            </div>

            <div className="container-wide associates-grid">
                {associates.map((person, index) => (
                    <article className={`profile-card associate-card assoc-${index + 1}`} key={person.name}>
                        <img src={person.image} alt={`${person.name} portrait`} loading="lazy" />
                        <div className="profile-content">
                            <h4>{person.name}</h4>
                            <p className="profile-role">{person.role}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Team
