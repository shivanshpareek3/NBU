"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function Preloader() {
  const [progress, setProgress] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const duration = 2000 // 2s premium load
    const intervalTime = 20
    const steps = duration / intervalTime
    let currentStep = 0

    // Using an easeOut curve for the progress to feel premium
    const easeOutCubic = (x: number): number => 1 - Math.pow(1 - x, 3)

    const timer = setInterval(() => {
      currentStep++
      const rawProgress = currentStep / steps
      const easedProgress = easeOutCubic(rawProgress)
      const newProgress = Math.min(Math.round(easedProgress * 100), 100)
      
      setProgress(newProgress)

      if (currentStep >= steps) {
        clearInterval(timer)
        setTimeout(() => {
          setIsLoading(false)
        }, 500) // hang at 100% for half a second
      }
    }, intervalTime)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-10%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-[#030303]"
        >
          {/* Logo Container */}
          <div className="relative w-64 md:w-80 aspect-[3/1] flex items-center justify-center">
            
            {/* Background Logo (Dimmed) */}
            <Image 
              src="/logo-removebg-preview.png"
              alt="Loading..."
              fill
              className="object-contain opacity-10"
              priority
            />

            {/* Foreground Logo (Fills up from bottom) */}
            <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
              <motion.div 
                className="relative w-full overflow-hidden flex items-end"
                style={{ height: `${progress}%` }}
                initial={{ height: "0%" }}
                animate={{ height: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              >
                <div className="absolute bottom-0 left-0 right-0 h-full w-full min-h-[5.33rem] md:min-h-[6.66rem]">
                  <Image 
                    src="/logo-removebg-preview.png"
                    alt="Loading..."
                    fill
                    className="object-contain object-bottom drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Elegant Counter Below */}
          <div className="mt-8 flex items-center gap-3 overflow-hidden">
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xs font-heading font-bold tracking-[0.3em] uppercase text-white/50"
            >
              System Initializing
            </motion.span>
            <motion.div 
              className="w-8 h-px bg-white/20"
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ delay: 0.4 }}
            />
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xs font-heading font-bold text-white tracking-widest w-8 text-right"
            >
              {progress}%
            </motion.span>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}
