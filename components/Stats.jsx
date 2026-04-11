'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { siteConfig } from '../config/siteConfig'

const Stats = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isDark = theme === 'dark'
  
  const [counters, setCounters] = useState(
    siteConfig.stats.map(stat => ({ ...stat, current: 0 }))
  )
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    const interval = setInterval(() => {
      setCounters(prevCounters => 
        prevCounters.map((counter, index) => {
          const target = counter.value
          const increment = target / steps
          const newValue = Math.min(counter.current + increment, target)
          
          return {
            ...counter,
            current: newValue
          }
        })
      )
    }, stepDuration)

    return () => clearInterval(interval)
  }, [isVisible])

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`rounded-2xl p-8 md:p-12 relative ${
                mounted && isDark
                  ? 'glass'
                  : mounted
                    ? 'bg-white border border-slate-200 shadow-sm'
                    : 'glass'
              }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {counters.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-2 ${
                  mounted && isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {Math.round(stat.current)}
                  {stat.suffix && (
                    <span className="text-xl md:text-2xl lg:text-3xl ml-1">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <div className={`text-sm md:text-base uppercase tracking-wide ${
                  mounted && isDark ? 'text-white/70' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Decorative elements */}
          <div className={`absolute top-4 left-4 w-2 h-2 rounded-full ${mounted && isDark ? 'bg-accent/50' : 'bg-accent/30'}`} />
          <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${mounted && isDark ? 'bg-accent/50' : 'bg-accent/30'}`} />
          <div className={`absolute bottom-4 left-4 w-2 h-2 rounded-full ${mounted && isDark ? 'bg-accent/50' : 'bg-accent/30'}`} />
          <div className={`absolute bottom-4 right-4 w-2 h-2 rounded-full ${mounted && isDark ? 'bg-accent/50' : 'bg-accent/30'}`} />
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
