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
import PrivacyPolicy from './Components/PrivacyPolicy'
import Disclaimer from './Components/Disclaimer'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'
import { initAnalytics, initErrorReporting, trackPageView } from './lib/telemetry'
import './App.css'

const getSiteUrl = () => {
    const envSiteUrl = import.meta.env.VITE_SITE_URL || ''
    const normalizedEnv = envSiteUrl.replace(/\/+$/, '')
    return normalizedEnv || window.location.origin
}

const ROUTE_CONFIG = {
    '/': {
        title: 'JOSEPH IDEMUDIA & CO. | Legal Practitioners & Consultants',
        heading: 'Our Firm',
        description:
            'JOSEPH IDEMUDIA & CO. is a Lagos-based law firm providing legal advisory and representation for corporations, institutions, and private clients.',
    },
    '/about': {
        title: 'The Firm | JOSEPH IDEMUDIA & CO.',
        heading: 'The Firm',
        description:
            'Learn about JOSEPH IDEMUDIA & CO., our profile, vision, and mission as legal practitioners and consultants.',
    },
    '/people': {
        title: 'Our People | JOSEPH IDEMUDIA & CO.',
        heading: 'Our People',
        description:
            'Meet the Managing Partner, partners, and chambers leadership at JOSEPH IDEMUDIA & CO.',
    },
    '/expertise': {
        title: 'Expertise | JOSEPH IDEMUDIA & CO.',
        heading: 'Expertise',
        description:
            'Explore our practice areas including litigation, corporate commercial, banking and finance, and regulatory compliance.',
    },
    '/industries': {
        title: 'Client Profile | JOSEPH IDEMUDIA & CO.',
        heading: 'Client Profile',
        description:
            'View the organizations and individuals served by JOSEPH IDEMUDIA & CO. across local and cross-border matters.',
    },
    '/matters': {
        title: 'Firm Strength | JOSEPH IDEMUDIA & CO.',
        heading: 'Firm Strength',
        description:
            'Our litigation and advisory capability across critical disputes and multi-forum legal representation.',
    },
    '/resources': {
        title: 'Resources | JOSEPH IDEMUDIA & CO.',
        heading: 'Resources',
        description:
            'Legal resources, publications, and commentary from JOSEPH IDEMUDIA & CO.',
    },
    '/careers': {
        title: 'Careers | JOSEPH IDEMUDIA & CO.',
        heading: 'Careers',
        description:
            'Career opportunities and applications at JOSEPH IDEMUDIA & CO.',
    },
    '/privacy-policy': {
        title: 'Privacy Policy | JOSEPH IDEMUDIA & CO.',
        heading: 'Privacy Policy',
        description: 'Privacy policy and data processing notice for JOSEPH IDEMUDIA & CO. website users.',
    },
    '/disclaimer': {
        title: 'Legal Disclaimer | JOSEPH IDEMUDIA & CO.',
        heading: 'Legal Disclaimer',
        description: 'Legal disclaimer and website usage notice for JOSEPH IDEMUDIA & CO.',
    },
    '/contact': {
        title: 'Contact | JOSEPH IDEMUDIA & CO.',
        heading: 'Contact',
        description:
            'Contact JOSEPH IDEMUDIA & CO. at Suite 82, Asucon Plaza, 513/515 Ikorodu Road, Ketu, Lagos.',
    },
}

const getRoute = () => {
    const hash = window.location.hash || '#/'
    return hash.slice(1).split('?')[0] || '/'
}

const upsertMeta = (selector, attr, key, value) => {
    let tag = document.head.querySelector(selector)
    if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attr, key)
        document.head.appendChild(tag)
    }
    tag.setAttribute('content', value)
}

const upsertCanonical = (href) => {
    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
    }
    link.setAttribute('href', href)
}

function App() {
    const [route, setRoute] = useState(getRoute())
    const isKnownRoute = Boolean(ROUTE_CONFIG[route])
    const currentRoute = isKnownRoute ? route : '/404'
    const isHome = currentRoute === '/'
    const isNotFound = !isKnownRoute

    const skipToContent = (event) => {
        event.preventDefault()
        const main = document.getElementById('main-content')
        if (!main) return
        main.scrollIntoView({ behavior: 'auto', block: 'start' })
        try {
            main.focus({ preventScroll: true })
        } catch {
            main.focus()
        }
    }

    useEffect(() => {
        const onHashChange = () => setRoute(getRoute())
        window.addEventListener('hashchange', onHashChange)
        return () => window.removeEventListener('hashchange', onHashChange)
    }, [])

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [currentRoute])

    useEffect(() => {
        initAnalytics()
        initErrorReporting()
    }, [])

    useEffect(() => {
        const siteUrl = getSiteUrl()
        const ogImage = `${siteUrl}/og-image.jpg`

        if (!isKnownRoute) {
            const title = 'Page Not Found | JOSEPH IDEMUDIA & CO.'
            const description = 'The page you requested does not exist.'
            const canonical = `${siteUrl}/#/404`

            document.title = title
            upsertMeta('meta[name="description"]', 'name', 'description', description)
            upsertMeta('meta[name="robots"]', 'name', 'robots', 'noindex, follow')
            upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'website')
            upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'JOSEPH IDEMUDIA & CO.')
            upsertMeta('meta[property="og:title"]', 'property', 'og:title', title)
            upsertMeta('meta[property="og:description"]', 'property', 'og:description', description)
            upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonical)
            upsertMeta('meta[property="og:image"]', 'property', 'og:image', ogImage)
            upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
            upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
            upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
            upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage)
            upsertCanonical(canonical)
            trackPageView({
                path: '/404',
                title,
            })
            return
        }

        const config = ROUTE_CONFIG[currentRoute]
        const canonical = `${siteUrl}/#${currentRoute}`
        document.title = config.title
        upsertMeta('meta[name="description"]', 'name', 'description', config.description)
        upsertMeta('meta[name="robots"]', 'name', 'robots', 'index, follow')
        upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'website')
        upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'JOSEPH IDEMUDIA & CO.')
        upsertMeta('meta[property="og:title"]', 'property', 'og:title', config.title)
        upsertMeta('meta[property="og:description"]', 'property', 'og:description', config.description)
        upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonical)
        upsertMeta('meta[property="og:image"]', 'property', 'og:image', ogImage)
        upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
        upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', config.title)
        upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', config.description)
        upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage)
        upsertCanonical(canonical)
        trackPageView({
            path: currentRoute,
            title: config.title,
        })
    }, [currentRoute, isKnownRoute])

    const renderRouteContent = () => {
        switch (currentRoute) {
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
            case '/privacy-policy':
                return <PrivacyPolicy />
            case '/disclaimer':
                return <Disclaimer />
            case '/contact':
                return <Contact />
            default:
                return (
                    <section className="section not-found">
                        <div className="container-wide">
                            <p className="eyebrow dark">404</p>
                            <h2>Page Not Found</h2>
                            <p>The page you requested does not exist.</p>
                            <a href="#/" className="btn btn-primary">Back To Home</a>
                        </div>
                    </section>
                )
        }
    }

    return (
        <>
            <a className="skip-link" href="#main-content" onClick={skipToContent}>Skip to main content</a>
            <Navbar currentRoute={currentRoute} />
            {isHome ? (
                <main className="route-fade" key="home-route" id="main-content" tabIndex="-1">
                    <Hero />
                    <HomeOverview />
                    <WhyChooseUs />
                    <Contact />
                </main>
            ) : isNotFound ? (
                <main className="subpage route-fade" key="not-found-route" id="main-content" tabIndex="-1">
                    {renderRouteContent()}
                </main>
            ) : (
                <main className="subpage route-fade" key={currentRoute} id="main-content" tabIndex="-1">
                    <section className="subpage-hero">
                        <div className="container-wide">
                            <p className="eyebrow">Joseph Idemudia & Co.</p>
                            <h1>{ROUTE_CONFIG[currentRoute]?.heading || 'Our Firm'}</h1>
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
