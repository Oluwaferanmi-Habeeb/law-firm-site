// eslint-disable-next-line react/prop-types
function Navbar({ currentRoute }) {
    const MailIcon = () => (
        <svg className="ui-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 6h18v12H3z" />
            <path d="m3 7 9 7 9-7" />
        </svg>
    )

    const PhoneIcon = () => (
        <svg className="ui-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 3h4l2 5-2.5 2.5a16 16 0 0 0 4 4L16 12l5 2v4a2 2 0 0 1-2 2C10.16 20 4 13.84 4 6a2 2 0 0 1 2-2z" />
        </svg>
    )

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
                <p className="topbar-item"><MailIcon /> Email: josephidemudiaandco@yahoo.com</p>
                <p className="topbar-item"><PhoneIcon /> Tel: 08055147009</p>
            </div>

            <nav className="navbar container-wide" aria-label="Main">
                <a className="brand" href="#/" onClick={goHome}>JOSEPH IDEMUDIA & CO.</a>

                <div className="nav-links">
                    <a href="#/" onClick={goHome} aria-current={currentRoute === '/' ? 'page' : undefined}>Home</a>
                    <a href="#/about" aria-current={currentRoute === '/about' ? 'page' : undefined}>The Firm</a>
                    <a href="#/people" aria-current={currentRoute === '/people' ? 'page' : undefined}>Our People</a>
                    <a href="#/expertise" aria-current={currentRoute === '/expertise' ? 'page' : undefined}>Expertise</a>
                    <a href="#/contact" aria-current={currentRoute === '/contact' ? 'page' : undefined}>Contact</a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
