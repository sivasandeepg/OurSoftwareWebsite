'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

const Testimonials = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const isDark = theme === 'dark'

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000) // Auto-scroll every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const scrollToTestimonial = (index) => {
    setCurrentIndex(index)
    const container = document.getElementById('testimonials-container')
    if (container) {
      const cardWidth = 320 // w-80 = 20rem = 320px
      const gap = 24 // gap-6 = 1.5rem = 24px
      const scrollPosition = index * (cardWidth + gap)
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
    }
  }

  const nextTestimonial = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length
    setCurrentIndex(nextIndex)
    scrollToTestimonial(nextIndex)
  }

  const prevTestimonial = () => {
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length
    setCurrentIndex(prevIndex)
    scrollToTestimonial(prevIndex)
  }

  // TODO: connect to CMS (Sanity/Contentful) for dynamic content
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CEO, TechNova Solutions, Hyderabad",
      content: "Aventurine Tech Solutions developed our enterprise software with exceptional quality. Their React and Node.js expertise transformed our business operations completely.",
      rating: 5
    },
    {
      name: "Dr. Priya Sharma",
      role: "Principal, Greenwood International School, Bangalore",
      content: "The school management system they built is outstanding. Student enrollment and academic tracking have become seamless processes for our institution.",
      rating: 5
    },
    {
      name: "Dr. Vijay Reddy",
      role: "Senior Cardiologist, Apollo Hospitals, Hyderabad",
      content: "Their hospital management software improved our patient care significantly. The appointment system and electronic health records are game-changers.",
      rating: 5
    },
    {
      name: "Ananya Patel",
      role: "CTO, DigitalWave Technologies, Bangalore",
      content: "The .NET development services are exceptional. They delivered our complex enterprise solution on time with perfect execution.",
      rating: 5
    },
    {
      name: "Dr. Suresh Babu",
      role: "Medical Director, CARE Hospitals, Vizag",
      content: "TechVision's healthcare software solutions revolutionized our hospital operations. Patient management and billing systems are now fully automated.",
      rating: 5
    },
    {
      name: "Meera Naidu",
      role: "Principal, Delhi Public School, Vizag",
      content: "The educational platform they created enhanced our teaching methods. Online classes and student progress tracking have never been better.",
      rating: 5
    },
    {
      name: "Arjun Verma",
      role: "Founder, StartupHub Bangalore",
      content: "From concept to deployment, their team delivered excellence. The mobile app they built increased our user engagement by 400%. ",
      rating: 5
    },
    {
      name: "Kavita Malhotra",
      role: "Operations Head, MedTech Solutions, Hyderabad",
      content: "The microservices architecture they implemented made our system incredibly scalable. 24/7 support has been crucial for our healthcare operations.",
      rating: 5
    }
  ]

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
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  
  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
                mounted && isDark 
                  ? (i < rating ? 'text-yellow-400' : 'text-white/30')
                  : (i < rating ? 'text-yellow-400' : 'text-gray-300')
              }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <section className="py-[120px] px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bold font-inter text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Hear from our clients about their experiences working with us
          </p>
        </motion.div>

        
        {/* Testimonials Container */}
        <div className="relative">
          <motion.div
            id="testimonials-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex overflow-x-auto gap-6 mt-12 pb-4 scrollbar-hide"
          >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="card rounded-xl p-6 flex-shrink-0 w-80"
            >
              <StarRating rating={testimonial.rating} />
              <p className="text-sm text-text-muted mb-4 mt-4 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-semibold font-inter text-text-primary">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-text-muted">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 rounded-full transition-colors duration-200 z-10 ${
                mounted && isDark ? 'bg-accent/20 hover:bg-accent/30 text-white' : 'bg-accent/20 hover:bg-accent/30 text-slate-800'
              }`}
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 rounded-full transition-colors duration-200 z-10 ${
                mounted && isDark ? 'bg-accent/20 hover:bg-accent/30 text-white' : 'bg-accent/20 hover:bg-accent/30 text-slate-800'
              }`}
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-accent w-8'
                    : mounted && isDark
                      ? 'bg-white/30 hover:bg-white/50'
                      : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
