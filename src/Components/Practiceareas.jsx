const areas = [
    {
        title: 'Civil Litigation and Arbitration',
        summary:
            'Strong litigation and arbitration advisory across civil, criminal, and commercial matters, including complex multi-forum disputes.',
    },
    {
        title: 'Corporate Commercial',
        summary:
            'Commercially-focused support on contracts, restructuring, joint ventures, strategic alliances, and corporate transactions.',
    },
    {
        title: 'Banking and Finance',
        summary:
            'Advisory on acquisition, project, and trade finance, security documentation, debt instruments, insolvency, and restructuring.',
    },
    {
        title: 'Family and Probate Matters',
        summary:
            'Experience across succession planning, estate administration, wills, trusts, and related contentious matters.',
    },
    {
        title: 'Real Estate and Construction',
        summary:
            'Coordinated legal support on conveyancing, property tax, permits, licenses, construction issues, and dispute resolution.',
    },
    {
        title: 'Employment and Labour',
        summary:
            'Integrated advisory from recruitment to retirement, including labour compliance, collective bargaining, and union-related matters.',
    },
    {
        title: 'Oil and Gas',
        summary:
            'Legal advisory on joint venture arrangements, operating documentation, regulatory issues, and licensing in the Nigerian sector.',
    },
    {
        title: 'Immigration',
        summary:
            'Support for work and residence permits, investment incentives for foreigners, and cross-border immigration coordination.',
    },
    {
        title: 'Company Secretarial Services',
        summary:
            'Company secretarial support ensuring governance, decisions, and operations align with the Companies and Allied Matters Act.',
    },
    {
        title: 'Regulatory Compliance',
        summary:
            'Regulatory and tax compliance support, policy guidance, and engagement with regulators to mitigate legal and operational risk.',
    },
]

function PracticeAreas() {
    const scrollToNotes = (event) => {
        event.preventDefault()
        const notes = document.getElementById('practice-notes')
        if (notes) {
            notes.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <section className="practice-areas section" id="expertise">
            <div className="container-wide section-heading">
                <p className="eyebrow dark">Our Expertise</p>
                <h2>Our Practice Covers The Following Areas</h2>
            </div>

            <div className="container-wide areas-grid">
                {areas.map((area) => (
                    <article className="area-card" key={area.title}>
                        <h3>{area.title}</h3>
                        <a href="#practice-notes" onClick={scrollToNotes}>View Note</a>
                    </article>
                ))}
            </div>

            <div className="container-wide practice-notes" id="practice-notes">
                {areas.map((area) => (
                    <details className="practice-note" key={`note-${area.title}`}>
                        <summary>{area.title}</summary>
                        <p>{area.summary}</p>
                    </details>
                ))}
            </div>
        </section>
    )
}

export default PracticeAreas
