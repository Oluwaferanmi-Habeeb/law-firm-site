function Navbar() {
    const goHome = (event) => {
        event.preventDefault()
        if (window.location.hash !== '#/') {
            window.location.hash = '#/'
        }
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <header className="site-header">
            <div className="topbar container-wide">
                <p>Email: josephidemudiaandco@yahoo.com</p>
                <p>Tell: 08055147009</p>
            </div>

            <nav className="navbar container-wide" aria-label="Main">
                <a className="brand" href="#/" onClick={goHome}>JOSEPH IDEMUDIA & CO.</a>

                <div className="nav-links">
                    <a href="#/" onClick={goHome}>Home</a>
                    <a href="#/about">The Firm</a>
                    <a href="#/people">Our People</a>
                    <a href="#/expertise">Expertise</a>
                    <a href="#/contact">Contact</a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
