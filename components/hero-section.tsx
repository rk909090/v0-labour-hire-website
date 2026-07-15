import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Users } from "lucide-react"

export function HeroSection() {
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

        {/* C? — photo-clipped letterform, upper portion */}
        <div className="relative z-10 flex items-start justify-start px-8 lg:px-12 pt-10 flex-1">
          <div
            className="select-none pointer-events-none font-black leading-none"
            style={{
              fontSize: "clamp(10rem, 22vw, 22rem)",
              fontFamily: "'Georgia', 'Times New Roman', serif",
              lineHeight: 0.9,
              /* Photo shows THROUGH the letterform */
              backgroundImage: "url('/industrial-kitchen-chef-cooking-in-commercial-mini.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              /* Warm golden tint — boost brightness so it pops on dark bg */
              filter: "drop-shadow(0 0 40px rgba(218,165,32,0.7)) drop-shadow(0 0 80px rgba(218,165,32,0.4)) brightness(1.8) sepia(0.35) saturate(1.4)",
            }}
            aria-hidden="true"
          >
            C?
          </div>
        </div>

        {/* Flowing light curve — SVG decoration */}
        <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M 55 0 Q 40 30 50 50 Q 60 70 45 100"
            stroke="rgba(218,165,32,0.18)"
            strokeWidth="0.3"
            fill="none"
            strokeDasharray="2 3"
          />
          <path
            d="M 60 0 Q 45 35 55 55 Q 65 75 50 100"
            stroke="rgba(218,165,32,0.10)"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>

        {/* Bottom content */}
        <div className="relative z-20 px-8 lg:px-12 pb-12 pt-4 flex flex-col items-start">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5 backdrop-blur-sm">
            <Building2 className="h-3 w-3 text-accent" />
            For Employers
          </div>

          {/* Heading */}
          <h2 className="text-xl lg:text-2xl font-bold text-white leading-snug mb-3 max-w-xs">
            Unlock your workforce Potential with{" "}
            <span className="text-accent">AI Personnel Australia</span>
          </h2>

          {/* Subtitle */}
          <p className="text-white/60 text-base leading-relaxed mb-8 max-w-xs">
            Specialising in hospitality and technical staff for mining sites and remote operations. We connect Australian businesses with skilled, work-ready professionals.
          </p>

          {/* CTA */}
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-xl font-bold px-10 py-7 h-auto rounded-2xl shadow-lg shadow-accent/25 transition-all hover:scale-105"
          >
            <Link href="#contact">
              Looking to Hire?
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
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

        {/* W? — photo-clipped letterform, upper portion */}
        <div className="relative z-10 flex items-start justify-start px-8 lg:px-12 pt-10 flex-1">
          <div
            className="select-none pointer-events-none font-black leading-none"
            style={{
              fontSize: "clamp(10rem, 22vw, 22rem)",
              fontFamily: "'Georgia', 'Times New Roman', serif",
              lineHeight: 0.9,
              backgroundImage: "url('/mining-workers-walking-to-site-at-sunrise-silhouet.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              /* Cool teal/blue tint — boost so it pops on dark bg */
              filter: "drop-shadow(0 0 40px rgba(0,200,200,0.7)) drop-shadow(0 0 80px rgba(0,200,200,0.4)) brightness(1.6) saturate(1.3) hue-rotate(15deg)",
            }}
            aria-hidden="true"
          >
            W?
          </div>
        </div>

        {/* Flowing light curve */}
        <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M 45 0 Q 60 30 50 50 Q 40 70 55 100"
            stroke="rgba(0,180,180,0.18)"
            strokeWidth="0.3"
            fill="none"
            strokeDasharray="2 3"
          />
          <path
            d="M 40 0 Q 55 35 45 55 Q 35 75 50 100"
            stroke="rgba(0,180,180,0.10)"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>

        {/* Bottom content */}
        <div className="relative z-20 px-8 lg:px-12 pb-12 pt-4 flex flex-col items-start">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5 backdrop-blur-sm">
            <Users className="h-3 w-3 text-accent" />
            For Job Seekers
          </div>

          {/* Heading */}
          <h2 className="text-xl lg:text-2xl font-bold text-white leading-snug mb-3 max-w-xs">
            Have you ever dreamt about{" "}
            <span className="text-accent">working in Australia?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-white/60 text-base leading-relaxed mb-8 max-w-xs">
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

    </section>
  )
}
