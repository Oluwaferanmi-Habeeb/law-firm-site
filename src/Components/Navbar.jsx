function Navbar() {
    return (
        <header className="site-header">
            <div className="topbar container-wide">
                <p>Email: asineidemudia@yahoo.com</p>
                <p>Phone: +234 800 000 0000</p>
            </div>

            <nav className="navbar container-wide" aria-label="Main">
                <a className="brand" href="#/">Joseph Idemudia & Co.</a>

                <div className="nav-links">
                    <a href="#/">Home</a>
                    <a href="#/about">The Firm</a>
                    <a href="#/people">Our People</a>
                    <a href="#/expertise">Expertise</a>
                    <a href="#/industries">Industries</a>
                    <a href="#/matters">Matters</a>
                    <a href="#/resources">Resources</a>
                    <a href="#/careers">Careers</a>
                    <a href="#/contact">Contact</a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
