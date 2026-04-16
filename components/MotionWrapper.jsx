'use client'

import { motion } from 'framer-motion'

const MotionWrapper = ({ children, ...props }) => {
  return <motion.div {...props}>{children}</motion.div>
}

export default MotionWrapper
