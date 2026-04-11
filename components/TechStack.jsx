'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

const TechStack = () => {
  const { theme } = useTheme()
  const [hoveredTech, setHoveredTech] = useState(null)
  const isDark = theme === 'dark'

  const techStack = [
    {
      name: "React",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48v11.52c0 1.11.89 2 2 2s-.89-2-2-2-2 2.48 2 2 11.52 0 4.48 4.48 4.48 4.48-4.48-4.48-4.48-4.48C7.52 2 6.48 2 2 2s-.89 2-2 2zm3.52 0v11.52c0 1.11.89 2 2 2s-.89-2-2-2-2-2-2-2-2c-1.11 0-2 .89-2 2v11.52c0 1.11.89 2 2 2s.89 2 2 2z"/>
        </svg>
      ),
      description: "Component-based library for building user interfaces",
      proficiency: 95,
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Next.js",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.52 4.48 10 10h10c5.52 0 10-4.48 10-10V7l10-5z"/>
        </svg>
      ),
      description: "React framework with server-side rendering and routing",
      proficiency: 90,
      color: "from-gray-100 to-gray-900"
    },
    {
      name: "Node.js",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48v11.52c0 1.11.89 2 2 2s-.89-2-2-2-2-2-2-2-2-2c-1.11 0-2 .89-2 2v11.52c0 1.11.89 2 2 2s.89 2 2 2zm3.52 0v11.52c0 1.11.89 2 2 2s-.89-2-2-2-2-2-2-2-2-2-2c-1.11 0-2 .89-2 2v11.52c0 1.11.89 2 2 2s.89 2 2 2z"/>
        </svg>
      ),
      description: "JavaScript runtime for scalable server-side applications",
      proficiency: 92,
      color: "from-green-400 to-green-600"
    },
    {
      name: ".NET",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48v11.52c0 1.11.89 2 2 2s-.89-2-2-2-2-2-2-2-2-2c-1.11 0-2 .89-2 2v11.52c0 1.11.89 2 2 2s.89 2 2 2zm3.52 0v11.52c0 1.11.89 2 2 2s-.89-2-2-2-2-2-2-2-2-2c-1.11 0-2 .89-2 2v11.52c0 1.11.89 2 2 2s.89 2 2 2z"/>
        </svg>
      ),
      description: "Microsoft framework for enterprise applications",
      proficiency: 88,
      color: "from-purple-400 to-purple-600"
    },
    {
      name: "PHP",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48v11.52c0 1.11.89 2 2 2s-.89-2-2-2-2-2-2-2-2-2c-1.11 0-2 .89-2 2v11.52c0 1.11.89 2 2 2s.89 2 2 2zm3.52 0v11.52c0 1.11.89 2 2 2s-.89-2-2-2-2-2-2-2-2-2c-1.11 0-2 .89-2 2v11.52c0 1.11.89 2 2 2s.89 2 2 2z"/>
        </svg>
      ),
      description: "Server-side scripting language for web development",
      proficiency: 85,
      color: "from-indigo-400 to-indigo-600"
    },
    {
      name: "React Native",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48v11.52c0 1.11.89 2 2 2s-.89-2-2-2-2-2-2-2-2-2c-1.11 0-2 .89-2 2v11.52c0 1.11.89 2 2 2s.89 2 2 2zm3.52 0v11.52c0 1.11.89 2 2 2s-.89-2-2-2-2-2-2-2-2c-1.11 0-2 .89-2 2v11.52c0 1.11.89 2 2 2s.89 2 2 2z"/>
        </svg>
      ),
      description: "Cross-platform mobile app development framework",
      proficiency: 87,
      color: "from-cyan-400 to-cyan-600"
    },
    {
      name: "Android",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48v11.52c0 1.11.89 2 2 2s-.89-2-2-2-2-2-2-2-2-2c-1.11 0-2 .89-2 2v11.52c0 1.11.89 2 2 2s.89 2 2 2zm3.52 0v11.52c0 1.11.89 2 2 2s-.89-2-2-2-2-2-2-2-2c-1.11 0-2 .89-2 2v11.52c0 1.11.89 2 2 2s.89 2 2 2z"/>
        </svg>
      ),
      description: "Native mobile app development for Android platform",
      proficiency: 83,
      color: "from-green-400 to-green-600"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${
      isDark ? '' : 'bg-gradient-to-br from-[#f8faff] to-[#eef2ff]'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent/70 tracking-widest text-xs uppercase mb-8"
          >
            — Our Tech Stack —
          </motion.p>
          
          <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-[#0f2040]'
          }`}>
            Technologies We Master
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-white/80' : 'text-[#4a6080]'
          }`}>
            Cutting-edge technologies and frameworks we use to build exceptional digital solutions
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {/* Tech Card */}
              <div className={`relative rounded-xl p-6 text-center transition-all duration-300 cursor-pointer ${
                isDark 
                  ? 'bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20'
                  : 'bg-white border border-slate-200 shadow-md hover:shadow-lg'
              }`}>
                {/* Gradient Background */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${tech.color} opacity-10`} />
                
                {/* Icon */}
                <div className={`relative z-10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                  isDark ? 'bg-white/10' : 'bg-white/90'
                }`}>
                  <div className={`bg-gradient-to-br ${tech.color} bg-clip-text text-transparent`}>
                    {tech.icon}
                  </div>
                </div>

                {/* Tech Name */}
                <h3 className={`font-bold text-lg mb-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {tech.name}
                </h3>

                {/* Proficiency Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden">
                  <motion.div 
                    className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.proficiency}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* Tooltip */}
              {hoveredTech === tech.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`absolute z-50 p-4 rounded-lg shadow-xl border max-w-xs ${
                    isDark 
                      ? 'bg-slate-800 border-white/20 text-white'
                      : 'bg-white border-slate-200 text-slate-800'
                  }`}
                >
                  <h4 className={`font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {tech.name}
                  </h4>
                  <p className={`text-sm leading-relaxed ${
                    isDark ? 'text-white/80' : 'text-slate-600'
                  }`}>
                    {tech.description}
                  </p>
                  <div className={`mt-3 pt-3 border-t ${
                    isDark ? 'border-white/20' : 'border-slate-200'
                  }`}>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${
                        isDark ? 'text-white/60' : 'text-slate-500'
                      }`}>
                        Proficiency: {tech.proficiency}%
                      </span>
                      <div className={`w-20 h-1 rounded-full ${
                        isDark ? 'bg-white/30' : 'bg-slate-300'
                      }`} />
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
