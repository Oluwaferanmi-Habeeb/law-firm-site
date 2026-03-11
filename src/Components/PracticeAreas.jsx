const areas = [
    {
        title: 'Civil Litigation and Arbitration',
        writeUp: [
            'We possess a strong team of attorneys with excellent litigation skills and deep expertise. Our team guarantees proper advisory and representation in litigation and arbitration across civil, criminal, and commercial matters. We ensure a laser-sharp approach to issues while providing sufficient counsel-client attention and every requisite resource to each matter.',
            'We have extensive experience advising on large-scale corporate litigation, including class action cases, and are renowned for our ability to represent clients on their most critical litigation issues. The firm can rapidly assemble a focused, integrated and efficient team to address all important aspects of a client’s problem and to handle numerous cases in multiple forums, including international disputes.',
        ],
    },
    {
        title: 'Corporate Commercial',
        writeUp: [
            'We offer exceptional legal services on corporate commercial matters by delivering practical, proactive, protective and commercially-focused advice to corporate entities on various commercial transactions in Nigeria and internationally. Our corporate commercial practice services different types of clients, including public and private companies, investment banks, corporate financiers, venture capitalists and private equity houses, as well as private individuals.',
            'We are valued consistently for our expertise in handling collective investment schemes, commercial contracts and negotiations, corporate finance, corporate M&A, corporate restructuring, joint ventures and strategic alliances.',
        ],
    },
    {
        title: 'Banking and Finance',
        writeUp: [
            'There is exceptional volatility in the global financial system which is subjecting market participants to extraordinary risk and uncertainty. The reassessment of risk by both lenders and borrowers has resulted in a less borrower-friendly environment and more restrictive terms in finance documents. Sporadic changes in the financial, institutional and regulatory framework have transformed the way banking business is conducted and are affecting legal arrangements. We pride ourselves as a law firm with vast experience and expertise in the rudiments of banking, which gives us an edge in providing practicable legal advice and seamless resolutions to the needs of financial institutions and their customers.',
            'We render legal advice on acquisition finance, trade finance, project finance, construction finance, asset-based finance, syndication loans, security documentation and perfection, debt instruments, recoveries, insolvency matters and restructuring, off-balance-sheet and lease transactions, and leasing.',
        ],
    },
    {
        title: 'Family and Probate Matters',
        writeUp: [
            'We have experts who have handled succession matters at all levels, from family negotiations to court litigation. Our attorneys have the requisite experience in dealing with large estates either upon probate or without probate (administration of intestate estates). Our firm’s skill set enables us to provide basic and special services such as advising clients on succession matters, estates planning, designing and management of trusts, charities, drafting and keeping of wills, codicils and related documents, as well as acting as trustees, executors and administrators of estates and trusts. We also represent clients in litigious matters relating to estates.',
        ],
    },
    {
        title: 'Real Estate & Construction',
        writeUp: [
            'We at Joseph Idemudia & Company understand that real estate is a major source of wealth creation. Our market niche is providing corporate clients, as well as individuals, with coordinated and cost-effective real estate counsel.',
            'We help our clients coordinate and manage real estate internationally and locally. Internationally, we advise our clients through our associates and strategic partners across the globe.',
            'With the emergence of multilateral investment agreements and the availability of investment opportunities both in the real estate sector and others, the construction industry has also boomed. We offer a steady legal bridge between the laws, policies, stakeholders, agencies and the general public. We have vast experience in handling construction projects and other related matters.',
            'Our clients enjoy an assortment of our legal services across issues such as advice and representation in dispositions and conveyance of real estate, property tax, investments in lands, real estate and construction litigation and arbitration, survey plans, permits and licenses, etc.',
        ],
    },
    {
        title: 'Employment and Labour',
        writeUp: [
            'We are aware that employment, labour and benefits issues are complex and challenging for every business, especially when operations cross borders and cultures as part of a multinational presence. Steering safely through complicated laws and regulations in home markets and abroad is critical to maintaining a competitive advantage.',
            'Our lawyers have solid backgrounds in labour matters and our practice provides seamless and integrated advice from recruitment to retirement, helping clients anticipate and avoid problems, as well as deal effectively and sensitively with collective bargaining and workers’ trade union issues. We are especially well-suited to facilitate the movement of people and work around the globe — from executive transfers to outsourcing, as well as the implementation of global reorganizations.',
        ],
    },
    {
        title: 'Oil and Gas',
        writeUp: [
            'We advise on the Nigerian oil and gas sector, including joint venture arrangements and legal documentation such as operating agreements. We also advise on the regulatory regime and environmental regulations, procure requisite licences, and provide advice on labour issues and community claims.',
        ],
    },
    {
        title: 'Immigration Laws',
        writeUp: [
            'Joseph Idemudia and Company has all the requisite know-how and resources that support our clients’ immigration needs. Our services cut across obtaining work and resident permits for clients, employees and respective families, investment incentives for foreigners, and other residential status needs of clients.',
            'One of our major strengths in this practice is our robust strategic partnerships with law firms and immigration practitioners in Canada, the United States of America and the United Kingdom.',
        ],
    },
    {
        title: 'Company Secretarial Services',
        writeUp: [
            "Our firm also represents various companies as company secretary. Under this practice we ensure the company's corporate composition, governance, activities and decisions are in strict alignment and adherence to the Companies and Allied Matters Act.",
        ],
    },
    {
        title: 'Regulatory Compliance',
        writeUp: [
            'We also offer regulatory and compliance services for companies, parastatals and organisations. This involves ensuring our clients adhere to relevant laws, regulations and standards by providing legal advice, drafting policies, and managing interactions with regulatory bodies. Through this practice we ensure clients operate legally, mitigate risk, and uphold industry standards.',
            'Under this practice, we also assist clients to navigate complex tax laws, minimise tax liability, and resolve disputes with tax authorities.',
        ],
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
                <p className="section-intro">
                    Select any practice area to view the full write-up.
                </p>
            </div>

            <div className="container-wide areas-grid">
                {areas.map((area) => (
                    <article className="area-card" key={area.title}>
                        <h3>{area.title}</h3>
                        <a href="#practice-notes" onClick={scrollToNotes}>Read Details</a>
                    </article>
                ))}
            </div>

            <div className="container-wide practice-notes" id="practice-notes">
                {areas.map((area) => (
                    <details className="practice-note" key={`note-${area.title}`}>
                        <summary>{area.title}</summary>
                        {area.writeUp.map((paragraph, index) => (
                            <p key={`${area.title}-${index}`}>{paragraph}</p>
                        ))}
                    </details>
                ))}
            </div>
        </section>
    )
}

export default PracticeAreas
