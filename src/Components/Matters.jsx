const matters = [
    {
        title: 'Cross-Border Transaction Support',
        detail: 'Advised a regional investor on legal due diligence and transaction structuring for an acquisition in Nigeria.',
    },
    {
        title: 'Commercial Dispute Resolution',
        detail: 'Represented a corporate client in a high-value contractual dispute, resulting in favorable settlement terms.',
    },
    {
        title: 'Real Estate Portfolio Advisory',
        detail: 'Supported title review, documentation, and risk analysis across a multi-site property portfolio.',
    },
    {
        title: 'Tax and Compliance Mandate',
        detail: 'Provided advisory support on regulatory compliance and tax exposure management for a growth-stage business.',
    },
]

function Matters() {
    return (
        <section className="matters section" id="matters">
            <div className="container-wide section-heading">
                <p className="eyebrow dark">Representative Matters</p>
                <h2>Selected Work</h2>
            </div>

            <div className="container-wide matters-list">
                {matters.map((matter) => (
                    <article className="matter-item" key={matter.title}>
                        <h3>{matter.title}</h3>
                        <p>{matter.detail}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Matters
