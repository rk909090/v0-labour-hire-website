import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, ArrowRight } from "lucide-react"

const directors = [
  {
    name: "Andrew Hylands",
    role: "Recruitment Director",
    slug: "andrew-hylands",
    image: "/images/andrew-20hylands.jpg",
    bio: "With over 30 years of experience operating businesses, Andrew brings extensive industry knowledge and leadership to AI Personnel Australia. For the past 20 years, he has managed and operated restaurants and hotels across Indonesia, giving him deep insight into the country's rich hospitality talent pool.",
    highlight: "Manages our Indonesia recruitment office",
  },
  {
    name: "Brendon Bryden",
    role: "Managing Director",
    slug: "brendon-bryden",
    image: "/images/brendon-20bryden.jpg",
    bio: "With 20 years of experience running a successful fishing business in Western Australia, Brendon understands the importance of hard work, reliability, and building strong teams. Over the past 15 years in the mining industry, he has gained deep insight into the challenges faced by mine sites and remote operations.",
    highlight: "15+ years mining industry experience",
  },
  {
    name: "Brian Chalmers",
    role: "Director",
    slug: "brian-chalmers",
    image: "/images/brian-20chalmers.jpg",
    bio: "Brian brings a diverse mix of practical skill and business experience to AI Personnel Australia. A carpenter by trade, he has built a strong foundation in hands-on work, problem-solving, and delivering quality results. His experience in the promotional business sector adds valuable expertise in client engagement.",
    highlight: "Practical trades & business expertise",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Team</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
            Meet the Leadership Team
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Backed by decades of hands-on industry experience in mining, hospitality, and business operations.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {directors.map((director, index) => (
            <Card key={index} className="border-0 shadow-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={director.image || "/placeholder.svg"}
                  alt={director.name}
                  className="w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-primary-foreground font-bold text-xl">{director.name}</p>
                  <p className="text-accent text-sm font-medium">{director.role}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {director.highlight}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">{director.bio}</p>
                <div className="flex items-center justify-between mt-6">
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-9 h-9 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                  <Link href={`/team/${director.slug}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-accent hover:text-accent hover:bg-accent/10 gap-1"
                    >
                      View Profile
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
