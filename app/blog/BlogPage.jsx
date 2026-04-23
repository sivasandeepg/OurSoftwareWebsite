'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import { siteConfig } from '../../config/siteConfig'
import { cardStyles, cardTitleStyles } from '../../lib/styles'

export default function Blog() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const blogPosts = [
    {
      title: "Aventurine Tech Solutions Begins Journey - Founded April 16",
      excerpt: "Our software company officially started with 6 experienced professionals, bringing over 5+ years of collective expertise in software development and technology solutions.",
      category: "Company News",
      date: "April 16, 2026",
      readTime: "3 min read",
      image: "/images/blog/company-launch.jpg",
      slug: "company-founding-april-16"
    },
    {
      title: "Digital Marketing Services Launched - April 18",
      excerpt: "Expanding our service portfolio, we're excited to announce the launch of our comprehensive digital marketing services to help businesses grow their online presence.",
      category: "Services",
      date: "April 18, 2026",
      readTime: "4 min read",
      image: "/images/blog/digital-marketing.jpg",
      slug: "digital-marketing-launch-april-18"
    },
    {
      title: "Our Product Development Journey - Project Start April 20",
      excerpt: "Starting development of our first proprietary product - a major milestone marking our entry into product development and innovation. Launch coming soon!",
      category: "Product Launch",
      date: "April 20, 2026",
      readTime: "5 min read",
      image: "/images/blog/product-launch.jpg",
      slug: "product-launch-april-20"
    }
  ]

  const categories = ["All", "Company News", "Services", "Product Launch"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <main className="relative">
      <Navbar />
      
      {/* Hero Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`rounded-2xl p-8 md:p-12 card ${
              'hover:-translate-y-1'
            }`}
          >
            <h1 className={`font-bold mb-6 ${
              'text-text-primary'
            }`}>
              Our Blog
            </h1>
            <p className={`leading-relaxed ${
              'text-muted'
            }`}>
              Insights, tutorials, and industry news from our team of experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className={`py-8 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-secondary text-white'
                    : 'bg-secondary/20 text-secondary hover:bg-secondary/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-xl overflow-hidden h-full flex flex-col ${cardStyles}`}
              >
                {/* Placeholder Image */}
                <div className={`h-48 bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center`}>
                  <svg className="w-16 h-16 text-secondary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  {/* Category and Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-medium px-2 py-1 rounded-full ${
                      'bg-secondary/20 text-secondary'
                    }`}>
                      {post.category}
                    </span>
                    <span className={`${
                      'text-muted'
                    }`}>
                      {post.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`${cardTitleStyles} ${
                    'text-text-primary'
                  }`}>
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className={`leading-relaxed mb-4 flex-grow ${
                    'text-muted'
                  }`}>
                    {post.excerpt}
                  </p>

                  {/* Read Time and Link */}
                  <div className="flex items-center justify-between">
                    <span className={`${
                      'text-muted'
                    }`}>
                      {post.readTime}
                    </span>
                    <Button href={`/blog/${post.slug}`} variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`rounded-2xl p-8 md:p-12 card ${
              'hover:-translate-y-1'
            }`}
          >
            <h2 className={`font-bold mb-6 text-center ${
              'text-text-primary'
            }`}>
              Stay Updated
            </h2>
            <p className={`mb-8 text-center ${
              'text-muted'
            }`}>
              Subscribe to our newsletter for the latest insights and updates from our team.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`flex-1 px-4 py-3 rounded-lg border ${
                    'bg-background border-border text-text-primary placeholder-muted'
                  } focus:outline-none focus:ring-2 focus:ring-secondary`}
                />
                <Button size="lg">
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
