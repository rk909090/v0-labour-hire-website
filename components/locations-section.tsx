import { MapPin, Globe, Plane } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const australianLocations = [
  "Western Australia",
  "Queensland",
  "Northern Territory",
  "South Australia",
  "New South Wales",
]

export function LocationsSection() {
  return (
    <section id="locations" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Where We Go</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
            Servicing Australia's Remote Operations
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From our recruitment hub in Indonesia to mining sites across Australia, we deliver workforce solutions
            wherever you need them.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Australia Operations */}
          <Card className="border-0 shadow-lg bg-card">
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Australian Operations</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We service mining sites and remote operations across all major resource states.
              </p>
              <ul className="space-y-3">
                {australianLocations.map((location, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground">{location}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Indonesia Hub */}
          <Card className="border-0 shadow-lg bg-card">
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Indonesia Recruitment Hub</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our dedicated recruitment office in Indonesia sources and prepares top hospitality talent.
              </p>
              <div className="bg-secondary rounded-xl p-4">
                <p className="font-semibold text-foreground mb-2">Bali Office</p>
                <p className="text-sm text-muted-foreground">
                  Managed by Andrew Hylands with 20+ years of Indonesian hospitality expertise
                </p>
              </div>
            </CardContent>
          </Card>

          {/* The Connection */}
          <Card className="border-0 shadow-lg bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-6">
                <Plane className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4">Seamless Integration</h3>
              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                We handle the entire recruitment journey from Indonesia to your Australian worksite.
              </p>
              <ul className="space-y-3 text-primary-foreground/90">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-accent-foreground">
                    1
                  </div>
                  <span>Candidate sourcing & screening</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-accent-foreground">
                    2
                  </div>
                  <span>Documentation & compliance</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-accent-foreground">
                    3
                  </div>
                  <span>Travel & placement coordination</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-accent-foreground">
                    4
                  </div>
                  <span>Ongoing support & management</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
