const areas = [
    {
        title: 'Corporate & Commercial Law',
        text: 'Advising businesses on governance, compliance, transactions, and regulatory issues.',
    },
    {
        title: 'Litigation & Dispute Resolution',
        text: 'Representing clients in complex disputes with strategy-focused advocacy and execution.',
    },
    {
        title: 'Real Estate & Property Law',
        text: 'Structuring and documenting acquisitions, development projects, and lease portfolios.',
    },
    {
        title: 'Tax Advisory',
        text: 'Designing compliant tax strategies for institutions, founders, and private clients.',
    },
]

function PracticeAreas() {
    return (
        <section className="practice-areas section" id="expertise">
            <div className="container-wide section-heading">
                <p className="eyebrow dark">Our Expertise</p>
                <h2>Practice Areas</h2>
            </div>

            <div className="container-wide areas-grid">
                {areas.map((area) => (
                    <article className="area-card" key={area.title}>
                        <h3>{area.title}</h3>
                        <p>{area.text}</p>
                        <a href="#contact">Read More</a>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default PracticeAreas
