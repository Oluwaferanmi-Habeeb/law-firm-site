const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || ''
const ERROR_ENDPOINT = import.meta.env.VITE_CLIENT_ERROR_ENDPOINT || ''

let analyticsBooted = false
let errorReportingBooted = false

export const initAnalytics = () => {
    if (!GA_ID || analyticsBooted) return

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag() {
        window.dataLayer.push(arguments)
    }
    window.gtag = gtag
    window.gtag('js', new Date())
    window.gtag('config', GA_ID, { send_page_view: false })
    analyticsBooted = true
}

export const trackPageView = ({ path, title }) => {
    if (!GA_ID || typeof window.gtag !== 'function') return
    window.gtag('event', 'page_view', {
        page_title: title,
        page_location: window.location.href,
        page_path: path,
    })
}

const postClientError = (payload) => {
    if (!ERROR_ENDPOINT) return
    const body = JSON.stringify({
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        ...payload,
    })

    if (navigator.sendBeacon) {
        navigator.sendBeacon(ERROR_ENDPOINT, body)
        return
    }

    fetch(ERROR_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
        keepalive: true,
    }).catch(() => {
        // swallow network issues in client telemetry path
    })
}

export const initErrorReporting = () => {
    if (!ERROR_ENDPOINT || errorReportingBooted) return

    window.addEventListener('error', (event) => {
        postClientError({
            type: 'error',
            message: event.message,
            source: event.filename,
            line: event.lineno,
            column: event.colno,
        })
    })

    window.addEventListener('unhandledrejection', (event) => {
        postClientError({
            type: 'unhandledrejection',
            message: event.reason?.message || String(event.reason),
        })
    })

    errorReportingBooted = true
}
