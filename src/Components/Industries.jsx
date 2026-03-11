const clientTypes = [
    'Local corporations',
    'Multinational corporations',
    'Financial institutions',
    'Government entities',
    'Private businesses',
    'Individuals around the globe',
]

function Industries() {
    return (
        <section className="industries section" id="industries">
            <div className="container-wide section-heading">
                <p className="eyebrow dark">Client Profile</p>
                <h2>Who We Serve</h2>
                <p className="section-intro">
                    We support institutions and private clients across local and cross-border matters.
                </p>
            </div>

            <div className="container-wide industries-grid">
                {clientTypes.map((type) => (
                    <article className="industry-card" key={type}>
                        <h3>{type}</h3>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Industries
