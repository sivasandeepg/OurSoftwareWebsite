'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        willChange: 'transform, opacity'
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.0,
        delay: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        willChange: 'transform, opacity'
      },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  }

  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '12+', label: 'Technologies' },
    { value: '99%', label: 'Client Satisfaction' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background grid-background noise-texture py-24 md:py-36">
      {/* White gradient glow band in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[250px] bg-white/[0.03] rounded-full blur-[100px]" />

      {/* Background orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl"></div>

      {/* Hero content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full"
      >
        <div className="grid lg:grid-cols-[60%_40%] gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center px-4 py-2 border border-primary/20 bg-primary/10 rounded-full text-xs font-inter font-medium tracking-[0.1em] uppercase text-primary"
            >
              AI-Powered · Enterprise Ready
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={itemVariants}
              transition={{
                delay: 0.25,
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                willChange: 'transform, opacity'
              }}
              className="font-extrabold font-inter text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight tracking-tight text-text-primary"
            >
              We Build Software
              <br />
              That{' '}
              <span className="bg-gradient-to-r from-primary via-blue-400 to-secondary bg-clip-text text-transparent">
                Thinks Ahead
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl font-normal max-w-2xl leading-relaxed text-text-muted"
            >
              Masters of 12+ Technologies — We build intelligent software that scales with your business.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              transition={{ delay: 0.55 }}
              className="flex flex-col gap-4 sm:flex-row sm:gap-4"
            >
              <motion.a
                href="/contact"
                className="btn-primary w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Start a new software project with us"
              >
                Start a Project
              </motion.a>
              <motion.a
                href="/case-studies"
                className="btn-outline w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View our software development portfolio and case studies"
              >
                View Our Work
              </motion.a>
            </motion.div>

            {/* Mini stats strip */}
            <motion.div
              variants={itemVariants}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-8 pt-4 border-t border-border/50"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl font-bold text-text-primary">{stat.value}</span>
                  <span className="text-xs text-text-muted tracking-wide">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Code Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="relative"
          >
            {/* Floating card with gradient border */}
            <div className="relative bg-surface border border-border rounded-xl p-6 glow-primary shadow-2xl overflow-hidden">
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-20 blur-sm"></div>

              {/* Card content */}
              <div className="relative bg-surface rounded-lg p-3 sm:p-4 border border-border overflow-x-auto">
                {/* Code snippet */}
                <div className="space-y-3 font-mono text-xs sm:text-sm min-w-max">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-500 whitespace-nowrap">// AI-powered automation</div>
                  <div className="text-gray-300 whitespace-nowrap">
                    <span className="text-purple-400">const</span> agent = <span className="text-blue-400">createAI</span>(&#123;
                  </div>
                  <div className="ml-4 text-gray-300 whitespace-nowrap">
                    <span className="text-purple-400">model</span>: <span className="text-green-400">&apos;gpt-4&apos;</span>,
                  </div>
                  <div className="ml-4 text-gray-300 whitespace-nowrap">
                    capabilities: [<span className="text-green-400">&apos;analysis&apos;</span>, <span className="text-green-400">&apos;automation&apos;</span>]
                  </div>
                  <div className="text-gray-300 whitespace-nowrap">&#125;);</div>
                </div>

                {/* Pulsing circle accent */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
