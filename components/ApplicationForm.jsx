'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

// EmailJS config - same as contact form
const EMAILJS_CONFIG = {
  serviceId: 'service_s5e2sem',
  templateId: 'template_wf402ki', // You may want to create a separate template for job applications
  publicKey: 'BS99goKy45zd0DpVc',
}

const ApplicationForm = ({ position, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    skills: '',
    resume: null
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }))
  }

  // EmailJS sender function
  const sendApplicationEmail = async () => {
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: EMAILJS_CONFIG.serviceId,
          template_id: EMAILJS_CONFIG.templateId,
          user_id: EMAILJS_CONFIG.publicKey,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            subject: `Job Application: ${position}`,
            message: `Position Applied: ${position}\n\nExperience: ${formData.experience}\n\nSkills: ${formData.skills}\n\nResume: ${formData.resume?.name || 'No file attached'}`,
            // Additional fields to ensure all data is captured
            applicant_name: formData.name,
            applicant_email: formData.email,
            applicant_phone: formData.phone,
            applicant_experience: formData.experience,
            applicant_skills: formData.skills,
            applicant_position: position,
            resume_filename: formData.resume?.name || 'No file attached',
          },
        }),
      })
      return response.ok
    } catch (error) {
      console.error('EmailJS error:', error)
      return false
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Send application via EmailJS
      const emailSent = await sendApplicationEmail()
      
      if (emailSent) {
        setShowSuccess(true)
        
        if (onSubmit) {
          onSubmit(formData)
        }
        
        // Close form after showing success message
        setTimeout(() => {
          onClose()
        }, 3000)
      } else {
        // Handle email sending error
        alert('There was an error sending your application. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting your application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (showSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass rounded-2xl p-8 max-w-md w-full text-center"
        >
          <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            Application Submitted!
          </h3>
          <p className="text-muted mb-4">
            Thank you for your interest in the {position} position. We'll review your application and get back to you soon.
          </p>
          <p className="text-sm text-muted opacity-75">
            This window will close automatically...
          </p>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="glass rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-text-primary">
            Apply for {position}
          </h2>
          <button
            onClick={onClose}
            className="text-muted hover:text-text-primary transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Row - Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary placeholder-text-muted"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary placeholder-text-muted"
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Second Row - Phone and Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary placeholder-text-muted"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">
                Years of Experience *
              </label>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary placeholder-text-muted"
                placeholder="e.g., 3+ years"
              />
            </div>
          </div>

          {/* Third Row - Skills and Resume */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">
                Skills *
              </label>
              <textarea
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary placeholder-text-muted"
                placeholder="List your relevant skills (e.g., React, Node.js, Python, etc.)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">
                Resume *
              </label>
              <input
                type="file"
                name="resume"
                onChange={handleChange}
                required
                accept=".pdf,.doc,.docx"
                className="w-full px-3 py-2 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
              />
              <p className="text-xs text-muted mt-1">
                Accepted formats: PDF, DOC, DOCX (Max 5MB)
              </p>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default ApplicationForm
