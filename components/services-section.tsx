import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, ChefHat, Utensils, Bed, ClipboardCheck, ArrowRight } from "lucide-react"

const employerServices = [
  {
    icon: ChefHat,
    title: "Kitchen Staff",
    description: "Qualified chefs, cooks, and kitchen hands for remote dining facilities",
  },
  {
    icon: Utensils,
    title: "Catering Teams",
    description: "Full catering crews for mining camps and site operations",
  },
  {
    icon: Bed,
    title: "Housekeeping",
    description: "Professional cleaning and accommodation services",
  },
  {
    icon: ClipboardCheck,
    title: "Camp Management",
    description: "Experienced camp managers and supervisors",
  },
]

const jobSeekerBenefits = [
  "Competitive pay rates",
  "Fly-in fly-out opportunities",
  "Accommodation provided",
  "Career progression pathways",
  "Safety training included",
  "Ongoing support",
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
            Streamline Your Workforce with Our Labour Hire Solutions
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Through short and long term casual options, permanent placements, or bespoke offerings for your workforce
            requirements.
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* For Employers */}
          <Card className="relative overflow-hidden border-0 shadow-xl">
            <div className="absolute inset-0 z-0">
              <img
                src="/industrial-kitchen-chef-cooking-in-commercial-mini.jpg"
                alt="Commercial kitchen operations"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/90" />
            </div>
            <CardContent className="relative z-10 p-8 lg:p-12">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">For Employers</h3>
              <p className="text-primary-foreground/90 mb-8 leading-relaxed">
                We understand the unique challenges of staffing remote operations. Our extensive network delivers
                qualified, reliable hospitality professionals ready to hit the ground running.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {employerServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-3 bg-primary-foreground/10 rounded-lg p-4">
                    <service.icon className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-primary-foreground text-sm">{service.title}</p>
                      <p className="text-primary-foreground/70 text-xs mt-1">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#contact">
                  Hire Staff Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* For Job Seekers */}
          <Card className="relative overflow-hidden border-0 shadow-xl">
            <div className="absolute inset-0 z-0">
              <img
                src="/happy-hospitality-workers-team-in-uniforms-smiling.jpg"
                alt="Hospitality team members"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-accent/90" />
            </div>
            <CardContent className="relative z-10 p-8 lg:p-12">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-accent-foreground mb-4">For Job Seekers</h3>
              <p className="text-accent-foreground/90 mb-8 leading-relaxed">
                Join Australia's thriving resources sector. We offer exciting opportunities in hospitality roles across
                mining sites and remote locations throughout Australia.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {jobSeekerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-accent-foreground text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#jobs">
                  Find Work Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
