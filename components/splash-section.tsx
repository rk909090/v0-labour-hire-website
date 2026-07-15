"use client"

import { useEffect, useState } from "react"

export function SplashSection() {
  const [phase, setPhase] = useState<"visible" | "fading" | "gone">("visible")

  useEffect(() => {
    // Lock scroll while splash is shown
    document.body.style.overflow = "hidden"

    const fadeTimer = setTimeout(() => setPhase("fading"), 3200)
    const goneTimer = setTimeout(() => {
      setPhase("gone")
      document.body.style.overflow = ""
    }, 4000)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(goneTimer)
      document.body.style.overflow = ""
    }
  }, [])

  if (phase === "gone") return null

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col"
      style={{
        opacity: phase === "fading" ? 0 : 1,
        transition: phase === "fading" ? "opacity 0.8s ease" : "none",
        pointerEvents: phase === "fading" ? "none" : "auto",
      }}
    >
      {/* Navy background */}
      <div className="absolute inset-0 bg-[#0d1f3c]" />

      {/* Subtle mine-site background photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/australian-mining-site-with-workers-and-industrial.jpg"
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.08 }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 text-center">
        {/* Heading */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight text-balance max-w-3xl mb-6"
          style={{ animation: "splashFadeUp 0.8s 0.1s ease both" }}
        >
          Streamline your workforce with our workforce solutions
        </h1>

        {/* Subtitle */}
        <p
          className="text-white/70 text-lg md:text-xl max-w-xl leading-relaxed mb-12"
          style={{ animation: "splashFadeUp 0.8s 0.35s ease both" }}
        >
          AI Personnel unlocks your potential career in Australia. Progressing in
          Australia&apos;s rapidly growing resources sector.
        </p>

        {/* Logo */}
        <div
          className="bg-white rounded-2xl px-8 py-5 shadow-2xl"
          style={{ animation: "splashFadeUp 0.8s 0.55s ease both" }}
        >
          <img
            src="/images/logo-20ai-20personnel.jpeg"
            alt="AI Personnel Australia"
            className="h-16 w-auto"
          />
        </div>
      </div>

      {/* Two photos at the bottom — matching the brief layout */}
      <div
        className="relative z-10 flex gap-4 px-6 pb-8 max-w-3xl mx-auto w-full"
        style={{ animation: "splashFadeUp 0.8s 0.75s ease both" }}
      >
        <div className="flex-1 h-40 rounded-2xl overflow-hidden">
          <img
            src="/industrial-kitchen-chef-cooking-in-commercial-mini.jpg"
            alt="Worker in a mine camp kitchen"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 h-40 rounded-2xl overflow-hidden">
          <img
            src="/mining-camp-accommodation-buildings-australian-out.jpg"
            alt="Wide shot of a mine camp"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <style>{`
        @keyframes splashFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
