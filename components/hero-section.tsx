import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col lg:flex-row pt-[88px]">

      {/* ── Left column: Companies ─────────────────────────── */}
      <div className="relative flex-1 flex items-center justify-center min-h-[50vh] lg:min-h-screen overflow-hidden group">
        {/* Background photo + overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/industrial-kitchen-chef-cooking-in-commercial-mini.jpg"
            alt="Commercial kitchen operations"
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-primary/88" />
        </div>

        {/* C? — large, pinned right edge, high visibility */}
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[18%] leading-none select-none pointer-events-none font-black"
          style={{
            fontSize: "clamp(16rem, 28vw, 26rem)",
            color: "rgba(255,255,255,0.13)",
            fontFamily: "'Georgia', serif",
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          C?
        </span>

        {/* Content — constrained to left ~60% so it never overlaps C? */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 lg:px-16 xl:px-20 py-16 w-full max-w-[60%]">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-primary-foreground px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
            <Building2 className="h-3.5 w-3.5 text-accent" />
            For Employers
          </div>

          {/* Heading — smaller */}
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground leading-snug mb-4 text-balance">
            Unlock your Workforce Potential with{" "}
            <span className="text-accent">AI Personnel Australia</span>
          </h2>

          {/* Sub — smaller */}
          <p className="text-primary-foreground/70 text-sm leading-relaxed mb-8 max-w-sm">
            Specialising in hospitality and technical staff for mining sites and remote operations. We connect Australian businesses with skilled, work-ready professionals.
          </p>

          {/* CTA — bigger text */}
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

      {/* Vertical divider */}
      <div className="hidden lg:block w-px bg-primary-foreground/10 self-stretch" />

      {/* ── Right column: Workers ──────────────────────────── */}
      <div className="relative flex-1 flex items-center justify-center min-h-[50vh] lg:min-h-screen overflow-hidden group">
        {/* Background photo + overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/mining-workers-walking-to-site-at-sunrise-silhouet.jpg"
            alt="Mining workers at sunrise"
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-primary/83" />
        </div>

        {/* W? — large, pinned left edge, high visibility */}
        <span
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[10%] leading-none select-none pointer-events-none font-black"
          style={{
            fontSize: "clamp(16rem, 28vw, 26rem)",
            color: "rgba(255,255,255,0.11)",
            fontFamily: "'Georgia', serif",
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          W?
        </span>

        {/* Content — constrained to right ~60% so it never overlaps W? */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 lg:px-16 xl:px-20 py-16 w-full max-w-[60%] ml-auto">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-primary-foreground px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
            <Users className="h-3.5 w-3.5 text-accent" />
            For Job Seekers
          </div>

          {/* Heading — smaller */}
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground leading-snug mb-4 text-balance">
            Have you ever dreamt about{" "}
            <span className="text-accent">working in Australia?</span>
          </h2>

          {/* Sub — smaller */}
          <p className="text-primary-foreground/70 text-sm leading-relaxed mb-8 max-w-sm">
            Short term or long term — AI Personnel opens career pathways into Australia&apos;s thriving resources sector. We find permanent placements, casual and contract roles for you.
          </p>

          {/* CTA — bigger text */}
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
