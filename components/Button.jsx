'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick, 
  className = '',
  ...props 
}) => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isDark = theme === 'dark'

  useEffect(() => {
    setMounted(true)
  }, [])

  const getThemeClass = (darkClass, lightClass) => {
    if (!mounted) return darkClass
    return isDark ? darkClass : lightClass
  }

  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: getThemeClass('bg-accent text-white hover:bg-accent/90 focus:ring-accent', 'bg-[#0f3460] text-white hover:bg-[#0a2545] focus:ring-[#0f3460]'),
    outline: getThemeClass('border-2 border-white text-white hover:bg-white hover:text-primary focus:ring-white', 'border-2 border-[#0f3460] text-[#0f3460] hover:bg-[#0f3460] hover:text-white focus:ring-[#0f3460]'),
    ghost: getThemeClass('text-white hover:bg-white/10 focus:ring-white', 'text-slate-700 hover:bg-slate-100 focus:ring-slate-300')
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
  
  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2 }
  }
  
  if (href) {
    return (
      <motion.a 
        href={href} 
        className={classes}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.a>
    )
  }
  
  return (
    <motion.button 
      className={classes}
      onClick={onClick}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
