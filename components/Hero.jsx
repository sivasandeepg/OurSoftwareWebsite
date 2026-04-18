'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
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
      transition: { duration: 1, delay: 0.4, ease: 'easeOut' }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background grid-background noise-texture py-24 md:py-36">
      {/* Radial gradient glow */}
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
              className="inline-flex items-center px-4 py-2 border border-primary/20 bg-primary/10 rounded-full text-xs font-inter font-medium tracking-[0.1em] uppercase text-primary"
            >
              AI-Powered · Enterprise Ready
            </motion.div>
            
            {/* Main headline */}
            <motion.h1
              variants={itemVariants}
              className="font-extrabold font-inter text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-text-primary animate-fade-in-up"
            >
              We Build Software
              <br />
              That Thinks Ahead
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl font-normal max-w-2xl leading-relaxed text-text-muted"
            >
              From AI agents to enterprise platforms — we engineer intelligent software that scales with your ambition.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="/contact"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
              </motion.a>
              <motion.a
                href="/case-studies"
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Work
              </motion.a>
            </motion.div>

            {/* Trust line */}
            <motion.p
              variants={itemVariants}
              className="text-[13px] text-text-muted"
            >
              Designing the Future of Fortune
            </motion.p>
          </div>

          {/* Right Column - Abstract Visual */}
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
              <div className="relative bg-surface rounded-lg p-4 border border-border">
                {/* Fake code snippet */}
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-primary">// AI-powered automation</div>
                  <div className="text-text-muted">
                    <span className="text-primary">const</span> agent = <span className="text-primary">createAI</span>(&#123;
                  </div>
                  <div className="ml-4 text-text-muted">
                    model: <span className="text-primary">'gpt-4'</span>,
                  </div>
                  <div className="ml-4 text-text-muted">
                    capabilities: [<span className="text-primary">'analysis'</span>, <span className="text-primary">'automation'</span>]
                  </div>
                  <div className="text-text-muted">&#125;);</div>
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
