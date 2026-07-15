import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col lg:flex-row pt-[88px]">

      {/* ── Left column: Companies ─────────────────────────── */}
      <div className="relative flex-1 flex items-center justify-center min-h-[50vh] lg:min-h-screen overflow-hidden group">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/industrial-kitchen-chef-cooking-in-commercial-mini.jpg"
            alt="Commercial kitchen operations"
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-primary/85" />
        </div>

        {/* Decorative large letter */}
        <span
          className="absolute bottom-0 right-0 text-[22rem] font-black leading-none text-primary-foreground/5 select-none pointer-events-none translate-x-8 translate-y-8"
          aria-hidden="true"
        >
          C
        </span>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 lg:px-16 xl:px-24 py-20 max-w-2xl">
          {/* Icon pill */}
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Building2 className="h-4 w-4 text-accent" />
            For Employers
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-primary-foreground leading-tight mb-6 text-balance">
            Unlock your Workforce Potential with{" "}
            <span className="text-accent">AI Personnel Australia</span>
          </h2>

          {/* Sub-heading */}
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-10 max-w-lg">
            Specialising in hospitality and technical staff for mining sites and remote operations. We connect
            Australian businesses with skilled, work-ready professionals from Australia and abroad.
          </p>

          {/* CTA */}
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 h-auto rounded-xl shadow-lg shadow-accent/20 transition-transform hover:scale-105"
          >
            <Link href="#contact">
              Looking to Hire?
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Vertical divider */}
      <div className="hidden lg:block w-px bg-primary-foreground/10 self-stretch" />

      {/* ── Right column: Workers ──────────────────────────── */}
      <div className="relative flex-1 flex items-center justify-center min-h-[50vh] lg:min-h-screen overflow-hidden group">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/mining-workers-walking-to-site-at-sunrise-silhouet.jpg"
            alt="Mining workers at sunrise"
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        {/* Decorative large letter */}
        <span
          className="absolute bottom-0 left-0 text-[22rem] font-black leading-none text-primary-foreground/5 select-none pointer-events-none -translate-x-8 translate-y-8"
          aria-hidden="true"
        >
          W
        </span>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 lg:px-16 xl:px-24 py-20 max-w-2xl">
          {/* Icon pill */}
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Users className="h-4 w-4 text-accent" />
            For Job Seekers
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-primary-foreground leading-tight mb-6 text-balance">
            Have you ever dreamt about{" "}
            <span className="text-accent">working in Australia?</span>
          </h2>

          {/* Sub-heading */}
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-10 max-w-lg">
            The opportunity for short term experiences or long term career progression in Australia is what AI
            Personnel strives for. Offering career progressing pathways to a career in Australia&apos;s thriving
            resources sector. We find permanent placements, bespoke offerings, long and short term casual options for
            you.
          </p>

          {/* CTA */}
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 h-auto rounded-xl shadow-lg shadow-accent/20 transition-transform hover:scale-105"
          >
            <Link href="#jobs">
              Find Work Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

    </section>
  )
}
