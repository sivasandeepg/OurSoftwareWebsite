'use client'

import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import { siteConfig } from '../config/siteConfig'
import { useTheme } from 'next-themes'

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <main className="relative min-h-screen bg-gradient-to-br from-gray-950 via-[#1a1a2e] to-[#16213e]">
        <div className="animate-pulse text-center py-20">
          <div className="text-white">Loading...</div>
        </div>
      </main>
    )
  }

  return (
    <main className="relative">
      <Navbar />
      <Hero />
            <Features />
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`rounded-2xl p-8 md:p-12 ${
              mounted && theme === 'dark'
                ? 'glass'
                : mounted
                  ? 'bg-white border border-gray-200 shadow-lg'
                  : 'glass'
            }`}>
            <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-4 ${
              mounted && theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Join {siteConfig.name}?
            </h2>
            <p className={`text-lg mb-8 ${
              mounted && theme === 'dark' ? 'text-white/80' : 'text-gray-700'
            }`}>
              Ready to transform your business with cutting-edge software solutions? Contact us today to discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={siteConfig.hero.ctaHref}
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105"
              >
                {siteConfig.hero.ctaText}
              </a>
              <a
                href="/about"
                className={`inline-flex items-center justify-center px-8 py-4 font-medium rounded-lg transition-all duration-300 hover:scale-105 ${
                  mounted && theme === 'dark' 
                    ? 'border border-white/30 text-white hover:bg-white hover:text-gray-900'
                    : 'border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
                }`}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
