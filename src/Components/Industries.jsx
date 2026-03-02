const industries = [
    'Banking and Financial Services',
    'Real Estate and Construction',
    'Energy and Infrastructure',
    'Technology and Digital Services',
    'Manufacturing and Consumer Goods',
    'Public Sector and Regulatory Bodies',
]

function Industries() {
    return (
        <section className="industries section" id="industries">
            <div className="container-wide section-heading">
                <p className="eyebrow dark">Industries We Serve</p>
                <h2>Sector Experience With Practical Insight</h2>
            </div>

            <div className="container-wide industries-grid">
                {industries.map((industry) => (
                    <article className="industry-card" key={industry}>
                        <h3>{industry}</h3>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Industries
