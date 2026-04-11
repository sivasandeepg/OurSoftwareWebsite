'use client'

import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTheme } from 'next-themes'
import { siteConfig } from '../config/siteConfig'
import Button from './Button'

const Hero = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isDark = theme === 'dark'
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 200])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3])

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y, opacity }} 
        className="absolute inset-0 z-0"
      >
        <img 
          src={siteConfig.hero.backgroundImage} 
          alt="Background"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Dark Overlay */}
      <div className={`absolute inset-0 z-10 ${
        mounted && isDark ? 'bg-black/55' : mounted ? 'bg-gradient-to-b from-black/40 to-black/20' : 'bg-black/55'
      }`} />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Hero content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Glass card */}
        <motion.div
          variants={cardVariants}
          className="rounded-2xl p-8 md:p-12 shadow-2xl hover-glow glass"
        >
          {/* Badge */}
          {siteConfig.hero.badge && (
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-1 border border-white/40 bg-white/20 rounded-full text-xs tracking-widest uppercase mb-4 text-white font-medium"
              animate={{
                background: [
                  "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
                  "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
                ],
                backgroundSize: "200% 200%",
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✦ {siteConfig.hero.badge}
            </motion.div>
          )}
          
          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base font-medium mb-4 tracking-wider uppercase text-accent"
          >
            {siteConfig.tagline}
          </motion.p>

          {/* Main title - Split into two lines */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
          >
            {siteConfig.hero.title.split(' ').map((word, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                transition={{ delay: index * 0.2 }}
              >
                {word}
                {index < siteConfig.hero.title.split(' ').length - 1 && ' '}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle with gradient text */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-white/80"
          >
            <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              {siteConfig.hero.subtitle}
            </span>
          </motion.p>

          {/* Stats Row */}
          {siteConfig.hero.stats && (
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-8 mb-8"
            >
              {siteConfig.hero.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold mb-1 text-white">
                    {stat.value}
                    {stat.suffix && <span className="text-xl md:text-2xl">{stat.suffix}</span>}
                  </div>
                  <div className="text-sm text-white/70">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
          
          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              href={siteConfig.hero.ctaHref}
              size="lg"
              className="w-full sm:w-auto"
            >
              {siteConfig.hero.ctaText}
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="#features"
              className="w-full sm:w-auto"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          {/* Animated scroll line */}
          <motion.div
            className="w-0.5 h-16 bg-white/40 rounded-full"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1 }}
          />
          
          {/* Scroll text */}
          <motion.p
            variants={itemVariants}
            className="text-white/40 text-xs uppercase tracking-widest -rotate-90 origin-left mt-2"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
