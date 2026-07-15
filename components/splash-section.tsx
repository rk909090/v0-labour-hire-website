"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function SplashSection() {
  const [phase, setPhase] = useState<"visible" | "fading" | "gone">("visible")

  function handleEnter() {
    document.body.style.overflow = ""
    setPhase("fading")
    setTimeout(() => setPhase("gone"), 700)
  }

  if (phase === "gone") return null

  // Lock scroll while splash is shown
  if (typeof document !== "undefined") {
    document.body.style.overflow = phase === "visible" ? "hidden" : ""
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex"
      style={{
        opacity: phase === "fading" ? 0 : 1,
        transition: phase === "fading" ? "opacity 0.7s ease" : "none",
        pointerEvents: phase === "fading" ? "none" : "auto",
      }}
    >
      {/* ── Left panel ─────────────────────────────────────────── */}
      <div className="relative flex flex-col justify-between w-full lg:w-1/2 bg-[#0a1628] px-10 py-12 lg:px-16 lg:py-16 overflow-hidden">

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Large decorative letter behind everything */}
        <span
          className="absolute -bottom-8 -left-6 text-[28rem] font-black leading-none select-none pointer-events-none"
          style={{ color: "rgba(255,255,255,0.03)", fontFamily: "serif" }}
          aria-hidden="true"
        >A</span>

        {/* Top: logo */}
        <div className="relative z-10">
          <div className="inline-block bg-white rounded-xl px-5 py-3 shadow-xl">
            <img
              src="/images/logo-20ai-20personnel.jpeg"
              alt="AI Personnel Australia"
              className="h-10 w-auto"
            />
          </div>
        </div>

        {/* Middle: heading + sub */}
        <div className="relative z-10 flex-1 flex flex-col justify-center py-12">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Workforce Solutions
          </p>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight text-balance mb-6">
            Streamline your workforce with our solutions
          </h1>
          <p className="text-white/60 text-base lg:text-lg leading-relaxed max-w-md">
            AI Personnel Australia connects skilled professionals with Australia&apos;s rapidly growing resources and hospitality sector.
          </p>
        </div>

        {/* Bottom: Enter button */}
        <div className="relative z-10 flex items-center gap-6">
          <button
            onClick={handleEnter}
            className="group flex items-center gap-3 bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg shadow-accent/30 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-accent/40"
          >
            Enter Site
            <span className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-xl group-hover:translate-x-1 transition-transform">
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>
          <p className="text-white/30 text-sm">Tap to continue</p>
        </div>
      </div>

      {/* ── Vertical divider ───────────────────────────────────── */}
      <div className="hidden lg:block w-px bg-white/10 relative">
        {/* Glow dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/60" />
      </div>

      {/* ── Right panel ────────────────────────────────────────── */}
      <div className="hidden lg:flex flex-col w-1/2 bg-[#060e1c]">
        {/* Top photo */}
        <div className="flex-1 overflow-hidden relative">
          <img
            src="/industrial-kitchen-chef-cooking-in-commercial-mini.jpg"
            alt="Worker in a mine camp kitchen"
            className="w-full h-full object-cover"
            style={{ opacity: 0.85 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060e1c]/40 to-transparent" />
          <div className="absolute bottom-4 left-6 text-white/70 text-xs font-medium tracking-wider uppercase">
            Hospitality & Kitchen
          </div>
        </div>

        {/* Thin horizontal divider */}
        <div className="h-px bg-white/10" />

        {/* Bottom photo */}
        <div className="flex-1 overflow-hidden relative">
          <img
            src="/mining-camp-accommodation-buildings-australian-out.jpg"
            alt="Wide shot of a mine camp"
            className="w-full h-full object-cover"
            style={{ opacity: 0.85 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060e1c]/40 to-transparent" />
          <div className="absolute top-4 left-6 text-white/70 text-xs font-medium tracking-wider uppercase">
            Mining & Remote Sites
          </div>
        </div>
      </div>

      <style>{`
        @keyframes splashFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
