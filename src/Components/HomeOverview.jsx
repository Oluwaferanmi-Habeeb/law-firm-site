const previews = [
    {
        title: 'The Firm',
        text: 'Profile, values, and approach to client service.',
        href: '#/about',
    },
    {
        title: 'Our People',
        text: 'Managing partner, partners, and leadership team.',
        href: '#/people',
    },
    {
        title: 'Expertise',
        text: 'Core legal practice areas and advisory focus.',
        href: '#/expertise',
    },
    {
        title: 'Client Profile',
        text: 'Local and multinational corporations, institutions, and individuals.',
        href: '#/industries',
    },
    {
        title: 'Firm Strength',
        text: 'Litigation and advisory capability across multiple forums.',
        href: '#/matters',
    },
    {
        title: 'Resources',
        text: 'Publications and legal commentary.',
        href: '#/resources',
    },
    {
        title: 'Careers',
        text: 'Professional opportunities and graduate pathways.',
        href: '#/careers',
    },
]

function HomeOverview() {
    return (
        <section className="home-overview section">
            <div className="container-wide section-heading">
                <p className="eyebrow dark">Overview</p>
                <h2>Explore Our Practice</h2>
                <p className="section-intro">
                    Access concise introductions here, and open each section for full details.
                </p>
            </div>

            <div className="container-wide overview-grid">
                {previews.map((item) => (
                    <article className="overview-card" key={item.title}>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                        <a href={item.href}>Open Section</a>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default HomeOverview
