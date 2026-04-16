'use client'

import Head from 'next/head'
import { useEffect } from 'react'

const PerformanceOptimization = () => {
  useEffect(() => {
    // Preload critical resources
    if (typeof window !== 'undefined') {
      // Preload critical images
      const criticalImages = [
        '/hero-bg.jpg',
        '/og-image.jpg'
      ]
      
      criticalImages.forEach(src => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        document.head.appendChild(link)
      })

      // Add lazy loading to images
      const images = document.querySelectorAll('img[data-src]')
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target
            img.src = img.dataset.src
            img.classList.remove('lazy')
            imageObserver.unobserve(img)
          }
        })
      })

      images.forEach(img => imageObserver.observe(img))

      // Cleanup
      return () => {
        imageObserver.disconnect()
      }
    }
  }, [])

  return (
    <Head>
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
      {/* Resource hints */}
      <link rel="modulepreload" href="/_next/static/chunks/main.js" />
      <link rel="modulepreload" href="/_next/static/chunks/webpack.js" />
      
      {/* Critical CSS inline */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Critical CSS for above-the-fold content */
          body { margin: 0; font-family: Inter, system-ui, sans-serif; }
          .hero-section { min-height: 100vh; display: flex; align-items: center; }
          .loading-skeleton { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
          @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
        `
      }} />
      
      {/* Compression and caching headers */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
      <meta httpEquiv="Expires" content="31536000" />
      
      {/* Security headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Performance metrics */}
      <script dangerouslySetInnerHTML={{
        __html: `
          // Performance monitoring
          if ('performance' in window) {
            window.addEventListener('load', () => {
              const perfData = performance.getEntriesByType('navigation')[0];
              console.log('Page Load Time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
              console.log('DOM Interactive:', perfData.domInteractive - perfData.fetchStart, 'ms');
            });
          }
        `
      }} />
    </Head>
  )
}

export default PerformanceOptimization
