function Navbar() {
    return (
        <header className="site-header">
            <div className="topbar container-wide">
                <p>Email: lawyers@josephidemudia.com</p>
                <p>Phone: +234 800 000 0000</p>
            </div>

            <nav className="navbar container-wide" aria-label="Main">
                <a className="brand" href="#home">Joseph Idemudia & Co.</a>

                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#about">The Firm</a>
                    <a href="#expertise">Expertise</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
