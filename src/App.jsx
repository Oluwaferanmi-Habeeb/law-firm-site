import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Team from './Components/Team'
import PracticeAreas from './Components/PracticeAreas'
import Industries from './Components/Industries'
import Matters from './Components/Matters'
import WhyChooseUs from './Components/WhyChooseUs'
import HomeOverview from './Components/HomeOverview'
import Resources from './Components/Resources'
import Careers from './Components/Careers'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'
import './App.css'

const getRoute = () => {
    const hash = window.location.hash || '#/'
    return hash.slice(1).split('?')[0] || '/'
}

function App() {
    const [route, setRoute] = useState(getRoute())

    useEffect(() => {
        const onHashChange = () => setRoute(getRoute())
        window.addEventListener('hashchange', onHashChange)
        return () => window.removeEventListener('hashchange', onHashChange)
    }, [])

    const routeTitle = {
        '/about': 'The Firm',
        '/people': 'Our People',
        '/expertise': 'Expertise',
        '/industries': 'Industries',
        '/matters': 'Representative Matters',
        '/resources': 'Resources',
        '/careers': 'Careers',
        '/contact': 'Contact',
    }

    const isHome = route === '/'

    const renderRouteContent = () => {
        switch (route) {
            case '/about':
                return <About />
            case '/people':
                return <Team />
            case '/expertise':
                return <PracticeAreas />
            case '/industries':
                return <Industries />
            case '/matters':
                return <Matters />
            case '/resources':
                return <Resources />
            case '/careers':
                return <Careers />
            case '/contact':
                return <Contact />
            default:
                return (
                    <>
                        <About />
                        <Team />
                        <PracticeAreas />
                        <Industries />
                        <Matters />
                        <WhyChooseUs />
                        <Contact />
                    </>
                )
        }
    }

    return (
        <>
            <Navbar />
            {isHome ? (
                <>
                    <Hero />
                    <HomeOverview />
                    <WhyChooseUs />
                    <Contact />
                </>
            ) : (
                <main className="subpage">
                    <section className="subpage-hero">
                        <div className="container-wide">
                            <p className="eyebrow">Joseph Idemudia & Co.</p>
                            <h1>{routeTitle[route] || 'Our Firm'}</h1>
                            <a href="#/" className="btn btn-primary">Back To Home</a>
                        </div>
                    </section>
                    {renderRouteContent()}
                </main>
            )}
            <Footer />
        </>
    )
}

export default App
