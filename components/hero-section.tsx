"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Users } from "lucide-react"
import { EmployerEnquiryModal } from "@/components/employer-enquiry-modal"

export function HeroSection() {
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  return (
    <section id="home" className="flex flex-col lg:flex-row" style={{ minHeight: "calc(100vh - 88px)", marginTop: "88px" }}>

      {/* ── Left column: Companies (C?) ─────────────────── */}
      <div className="relative flex-1 flex flex-col min-h-[60vh] lg:min-h-0 overflow-hidden">

        {/* Full-bleed background photo */}
        <div className="absolute inset-0 z-0">
          <img
            src="/industrial-kitchen-chef-cooking-in-commercial-mini.jpg"
            alt="Commercial kitchen operations"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay — heavier so content is readable */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(2,22,40,0.78) 0%, rgba(2,22,40,0.72) 100%)" }} />
        </div>

        {/* Content — vertically centered */}
        <div className="relative z-20 flex-1 flex flex-col justify-center px-8 lg:px-14 py-16 items-start">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <Building2 className="h-3 w-3 text-accent" />
            For Employers
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 max-w-md text-balance">
            Unlock your workforce Potential with{" "}
            <span className="text-accent">AI Personnel Australia</span>
          </h2>

          {/* Subtitle */}
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-md">
            Specialising in hospitality and technical staff for mining sites and remote operations. We connect Australian businesses with skilled, work-ready professionals.
          </p>

          {/* CTA */}
          <Button
            size="lg"
            onClick={() => setEnquiryOpen(true)}
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-xl font-bold px-10 py-7 h-auto rounded-2xl shadow-lg shadow-accent/25 transition-all hover:scale-105"
          >
            Looking to Hire?
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* ── Right column: Workers (W?) ──────────────────── */}
      <div className="relative flex-1 flex flex-col min-h-[60vh] lg:min-h-0 overflow-hidden">

        {/* Full-bleed background photo */}
        <div className="absolute inset-0 z-0">
          <img
            src="/mining-workers-walking-to-site-at-sunrise-silhouet.jpg"
            alt="Mining workers at sunrise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(2,28,40,0.78) 0%, rgba(2,28,40,0.72) 100%)" }} />
        </div>

        {/* Content — vertically centered */}
        <div className="relative z-20 flex-1 flex flex-col justify-center px-8 lg:px-14 py-16 items-start">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <Users className="h-3 w-3 text-accent" />
            For Job Seekers
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 max-w-md text-balance">
            Have you ever dreamt about{" "}
            <span className="text-accent">working in Australia?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-md">
            Short term or long term — AI Personnel opens career pathways into Australia&apos;s thriving resources sector. We find permanent placements, casual and contract roles for you.
          </p>

          {/* CTA */}
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-xl font-bold px-10 py-7 h-auto rounded-2xl shadow-lg shadow-accent/25 transition-all hover:scale-105"
          >
            <Link href="#jobs">
              Find Work Today
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </div>

      {enquiryOpen && <EmployerEnquiryModal onClose={() => setEnquiryOpen(false)} />}
    </section>
  )
}
