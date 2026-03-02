const previews = [
    {
        title: 'The Firm',
        text: 'Profile, values, and approach to client service.',
        href: '#/about',
    },
    {
        title: 'Our People',
        text: 'Managing partners and associates.',
        href: '#/people',
    },
    {
        title: 'Expertise',
        text: 'Core legal practice areas and advisory focus.',
        href: '#/expertise',
    },
    {
        title: 'Industries',
        text: 'Sector experience across business-critical markets.',
        href: '#/industries',
    },
    {
        title: 'Representative Matters',
        text: 'Selected mandates and anonymized highlights.',
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
