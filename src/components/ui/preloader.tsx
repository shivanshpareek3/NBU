"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function Preloader() {
  const [progress, setProgress] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    // Simulate loading progress
    const duration = 1500 // 1.5s total loading simulation
    const intervalTime = 30
    const steps = duration / intervalTime
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100)
      setProgress(newProgress)

      if (currentStep >= steps) {
        clearInterval(timer)
        setTimeout(() => {
          setIsLoading(false)
        }, 400) // slight delay at 100%
      }
    }, intervalTime)

    return () => clearInterval(timer)
  }, [])

  // Calculate SVG dash offset
  const radius = 90
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[300] flex items-center justify-center bg-white"
        >
          <div className="relative flex items-center justify-center">
            {/* SVG Progress Circle */}
            <svg width="220" height="220" className="transform -rotate-90">
              <circle
                cx="110"
                cy="110"
                r={radius}
                className="stroke-black/10"
                strokeWidth="4"
                fill="none"
              />
              <motion.circle
                cx="110"
                cy="110"
                r={radius}
                className="stroke-brand"
                strokeWidth="4"
                fill="none"
                strokeDasharray={circumference}
                animate={{ strokeDashoffset }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </svg>
            
            {/* Logo instead of Percentage */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Image 
                src="/logo-removebg-preview.png"
                alt="Logo"
                width={240}
                height={100}
                className="w-[120%] h-auto object-contain invert scale-[1.3]"
                priority
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
