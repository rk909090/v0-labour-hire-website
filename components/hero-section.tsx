import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Building2, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/australian-mining-site-with-workers-and-industrial.jpg" alt="Mining site operations" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full mb-6 border border-accent/30">
            <Award className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">Trusted Recruitment Partner</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 text-balance">
            Unlock Workforce Potential with <span className="text-accent">AI Personnel Australia</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
            Specialising in hospitality and support staff for mining sites and remote operations. We connect Australian
            businesses with skilled, work-ready professionals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#contact">
                Looking to Hire?
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Link href="#services">Looking for Work?</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/20">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">150</p>
                <p className="text-sm text-primary-foreground/80">Workers Placed</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/20">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Building2 className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">25</p>
                <p className="text-sm text-primary-foreground/80">Partner Sites</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/20">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">5</p>
                <p className="text-sm text-primary-foreground/80">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
