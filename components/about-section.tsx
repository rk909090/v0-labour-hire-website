import { CheckCircle2 } from "lucide-react"
import { LegalBadge } from "@/components/legal-badge"

const highlights = [
  "Quality hospitality professionals for mining & remote operations",
  "Dedicated recruitment office in Indonesia",
  "Stringent screening and preparation processes",
  "Cultural understanding and workforce integration",
  "20+ years combined industry experience",
  "End-to-end workforce solutions",
]

const stats = [
  { value: "20+", label: "Years Experience", description: "Combined industry expertise" },
  { value: "500+", label: "Placements Made", description: "Successful workforce placements" },
  { value: "2", label: "Countries Active", description: "Australia & Indonesia operations" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">

        {/* Row 1 — Image collage + Text content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — Image collage only */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/professional-chef-preparing-food-in-industrial-kit.jpg"
                  alt="Professional chef at work"
                  className="w-full h-56 lg:h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/mining-camp-accommodation-buildings-australian-out.jpg"
                  alt="Mining camp facilities"
                  className="w-full h-48 lg:h-56 object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-10">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/business-meeting-recruitment-interview-professiona.jpg"
                  alt="Recruitment interview"
                  className="w-full h-48 lg:h-56 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/mining-workers-walking-to-site-at-sunrise-silhouet.jpg"
                  alt="Workers at mining site"
                  className="w-full h-56 lg:h-64 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right — Text content */}
          <div className="flex flex-col justify-center">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              Your Trusted Partner in Workforce Solutions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              AI Personnel Australia is a specialist labour hire and recruitment agency focused on delivering quality
              hospitality and support staff for mining sites and remote operations across Australia.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With deep industry knowledge and a dedicated recruitment office in Indonesia, we bridge the gap between
              skilled professionals and Australian employers. Our hands-on approach ensures every candidate is
              thoroughly screened, prepared, and work-ready.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground text-sm leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-14 mb-10 border-t border-border" />

        {/* Row 2 — Stats (left) + Legal badge (right) */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left — 3 stat cards */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-background rounded-2xl px-4 py-6 shadow-sm border border-border flex flex-col items-center text-center h-fit"
              >
                <p className="text-3xl font-bold text-accent leading-none">{stat.value}</p>
                <p className="text-sm font-semibold text-foreground mt-2">{stat.label}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-snug">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* Right — Legal badge */}
          <LegalBadge />

        </div>

      </div>
    </section>
  )
}
