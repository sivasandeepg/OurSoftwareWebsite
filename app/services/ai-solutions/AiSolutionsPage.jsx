'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Button from '../../../components/Button'
import { siteConfig } from '../../../config/siteConfig'

export default function AISolutions() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const services = [
    {
      title: "Machine Learning Solutions",
      description: "Develop custom ML models to extract insights and automate decision-making processes.",
      features: ["Predictive Analytics", "Classification Models", "Regression Analysis", "Time Series Forecasting"]
    },
    {
      title: "Natural Language Processing",
      description: "Build intelligent systems that understand, interpret, and generate human language.",
      features: ["Chatbots", "Sentiment Analysis", "Text Classification", "Language Translation"]
    },
    {
      title: "Computer Vision",
      description: "Create advanced visual recognition systems for images and video analysis.",
      features: ["Object Detection", "Face Recognition", "Image Classification", "Video Analytics"]
    },
    {
      title: "AI Integration",
      description: "Integrate AI capabilities into your existing applications and workflows.",
      features: ["API Integration", "Model Deployment", "Performance Optimization", "Monitoring & Maintenance"]
    }
  ]

  const technologies = [
    "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "Hugging Face", "Azure ML", "AWS SageMaker", "Google AI"
  ]

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
            className={`rounded-2xl p-8 md:p-12 ${
              'glass'
            }`}
          >
            <h1 className={`font-bold mb-6 ${
              'text-text-primary'
            }`}>
              AI Solutions & Machine Learning
            </h1>
            <p className={`leading-relaxed ${
              'text-muted'
            }`}>
              Harness the power of artificial intelligence to transform your business operations and gain competitive advantage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-xl p-6 hover-glow h-full flex flex-col ${
                  'glass hover-glow'
                }`}
              >
                <h3 className={`font-semibold mb-3 ${
                  'text-text-primary'
                }`}>
                  {service.title}
                </h3>
                <p className={`leading-relaxed mb-4 flex-grow ${
                  'text-muted'
                }`}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-center ${
                      'text-muted'
                    }`}>
                      <svg className="w-4 h-4 text-secondary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`rounded-2xl p-8 md:p-12 ${
              'glass'
            }`}
          >
            <h2 className={`font-bold mb-6 text-center ${
              'text-text-primary'
            }`}>
              AI Technologies We Use
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full font-medium ${
                    'bg-secondary/20 text-secondary'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-background`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`rounded-2xl p-8 md:p-12 ${
              'glass'
            }`}
          >
            <h2 className={`font-bold mb-6 text-center ${
              'text-text-primary'
            }`}>
              Real-World AI Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className={`font-semibold mb-2 ${
                  'text-text-primary'
                }`}>
                  Healthcare
                </h3>
                <p className={`mb-4 ${
                  'text-muted'
                }`}>
                  Medical imaging analysis, disease prediction, and personalized treatment recommendations.
                </p>
              </div>
              <div>
                <h3 className={`font-semibold mb-2 ${
                  'text-text-primary'
                }`}>
                  Finance
                </h3>
                <p className={`mb-4 ${
                  'text-muted'
                }`}>
                  Fraud detection, risk assessment, algorithmic trading, and customer service automation.
                </p>
              </div>
              <div>
                <h3 className={`font-semibold mb-2 ${
                  'text-text-primary'
                }`}>
                  Retail
                </h3>
                <p className={`mb-4 ${
                  'text-muted'
                }`}>
                  Recommendation engines, demand forecasting, inventory optimization, and customer insights.
                </p>
              </div>
              <div>
                <h3 className={`font-semibold mb-2 ${
                  'text-text-primary'
                }`}>
                  Manufacturing
                </h3>
                <p className={`mb-4 ${
                  'text-muted'
                }`}>
                  Predictive maintenance, quality control, supply chain optimization, and process automation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
