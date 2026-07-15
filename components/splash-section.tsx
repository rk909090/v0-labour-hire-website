"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"

export function SplashSection() {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Start fade-out after 2.8s, fully remove at 3.5s
    const fadeTimer = setTimeout(() => setFadeOut(true), 2800)
    const hideTimer = setTimeout(() => setVisible(false), 3500)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary transition-opacity duration-700"
      style={{ opacity: fadeOut ? 0 : 1, pointerEvents: fadeOut ? "none" : "auto" }}
      aria-hidden={fadeOut}
    >
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/australian-mining-site-with-workers-and-industrial.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">
        {/* Logo */}
        <div className="mb-8 animate-[fadeInDown_0.7s_ease_both]">
          <img
            src="/images/logo-20ai-20personnel.jpeg"
            alt="AI Personnel Australia"
            className="h-24 w-auto mx-auto rounded-xl shadow-2xl"
          />
        </div>

        {/* Company name */}
        <h1
          className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 tracking-tight text-balance animate-[fadeInUp_0.7s_0.2s_ease_both_forwards] opacity-0"
        >
          AI Personnel Australia
        </h1>

        {/* Tagline */}
        <p
          className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed text-balance animate-[fadeInUp_0.7s_0.45s_ease_both_forwards] opacity-0"
        >
          Connecting skilled professionals with Australia&apos;s thriving resources sector.
        </p>

        {/* Animated scroll hint */}
        <div className="mt-12 animate-[fadeIn_0.7s_1.2s_ease_both_forwards] opacity-0">
          <ArrowDown className="h-6 w-6 text-primary-foreground/50 animate-bounce" />
        </div>
      </div>

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 0.7; }
        }
      `}</style>
    </div>
  )
}
