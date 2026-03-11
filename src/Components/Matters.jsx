const strengths = [
    'Proper advisory and representation in litigation and arbitration',
    'Laser-sharp approach to issues with sufficient counsel-client attention',
    'Focused and integrated teams for critical litigation issues',
    'Ability to handle numerous cases in multiple forums including international disputes',
]

function Matters() {
    return (
        <section className="matters section" id="matters">
            <div className="container-wide section-heading">
                <p className="eyebrow dark">Firm Strength</p>
                <h2>Litigation and Advisory Capability</h2>
                <p className="section-intro">
                    Our teams are structured for focused delivery on contentious and advisory mandates.
                </p>
            </div>

            <div className="container-wide matters-list">
                {strengths.map((item) => (
                    <article className="matter-item" key={item}>
                        <p>{item}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Matters
