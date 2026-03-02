const areas = [
    {
        title: 'Corporate & Commercial Law',
        text: 'Advising on governance, contracts, compliance, and key commercial transactions.',
    },
    {
        title: 'Litigation & Dispute Resolution',
        text: 'Representing clients in complex disputes with disciplined and strategic advocacy.',
    },
    {
        title: 'Real Estate & Property Law',
        text: 'Supporting acquisitions, leases, title reviews, and development transactions.',
    },
    {
        title: 'Tax Advisory',
        text: 'Providing practical tax planning and regulatory compliance support.',
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
                        <a href="#/contact">Read More</a>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default PracticeAreas
