import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MapPin, Briefcase, Award, Users } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const directors = {
  "andrew-hylands": {
    name: "Andrew Hylands",
    role: "Recruitment Director",
    image: "/images/andrew-20hylands.jpg",
    location: "Indonesia",
    experience: "30+ years",
    specialty: "International Recruitment & Hospitality",
    bio: `With over 30 years of experience operating businesses, Andrew brings extensive industry knowledge and leadership to AI Personnel Australia. For the past 20 years, he has managed and operated restaurants and hotels across Indonesia, giving him deep insight into the country's rich hospitality talent pool.

As Recruitment Director, Andrew oversees and manages our AI Personnel recruitment office in Indonesia, ensuring we identify, screen, and prepare the highest-quality candidates for placement in Australia. His hands-on experience in Indonesia allows him to build strong local partnerships and maintain a consistent pipeline of skilled, work-ready hospitality professionals.

Andrew's commitment to service excellence, cultural understanding, and workforce quality is at the core of our recruitment operations.`,
    highlights: [
      "30+ years business operations experience",
      "20 years managing restaurants & hotels in Indonesia",
      "Oversees Indonesia recruitment office",
      "Expert in identifying top hospitality talent",
      "Builds strong local partnerships",
      "Ensures work-ready candidate preparation",
    ],
  },
  "brendon-bryden": {
    name: "Brendon Bryden",
    role: "Managing Director",
    image: "/images/brendon-20bryden.jpg",
    location: "Western Australia",
    experience: "35+ years",
    specialty: "Mining Operations & Workforce Solutions",
    bio: `Brendon brings a wealth of hands-on leadership and operational expertise to AI Personnel Australia. With 20 years of experience running a successful fishing business in Western Australia, he understands the importance of hard work, reliability, and building strong teams in demanding environments.

Over the past 15 years in the mining industry, Brendon has gained deep insight into the challenges faced by mine sites and remote operations—particularly when it comes to maintaining consistent, dependable hospitality and support services. His firsthand knowledge of site requirements, workforce expectations, and operational pressures drives his dedication to delivering staffing solutions that truly work for clients.

Brendon's commitment to quality, efficiency, and practical, real-world results plays a key role in shaping AI Personnel Australia's approach to service.`,
    highlights: [
      "20 years running successful fishing business in WA",
      "15+ years mining industry experience",
      "Deep understanding of remote operations",
      "Expert in workforce requirements for mine sites",
      "Commitment to quality and efficiency",
      "Practical, results-driven approach",
    ],
  },
  "brian-chalmers": {
    name: "Brian Chalmers",
    role: "Director",
    image: "/images/brian-20chalmers.jpg",
    location: "Australia",
    experience: "25+ years",
    specialty: "Sports Management & Client Solutions",
    bio: `Brian brings a diverse combination of practical expertise and business experience to AI Personnel Australia. Trained as a Wood Machinist, he developed a strong foundation in hands-on work, problem-solving, and consistently delivering high-quality outcomes.

Building on this practical background, Brian transitioned into Sports and Recreation Management, where he accumulated over 20 years of experience across sports centre operations, player management, and broader sports management roles.

In addition, for more than half of his professional career, Brian has operated within the promotional and marketing sector, gaining valuable expertise in client engagement, branding, and service delivery.

Brian's ability to integrate practical know-how with commercial insight strengthens our team and supports AI Personnel Australia's commitment to dependable, customer-focused staffing solutions. He is a proven problem-solver, with a strong focus on effective solutions and logistical coordination.`,
    highlights: [
      "Trained Wood Machinist",
      "20+ years Sports & Recreation Management",
      "Sports centre operations expertise",
      "Player management experience",
      "Promotional and marketing sector specialist",
      "Proven problem-solver & logistical coordinator",
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(directors).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const director = directors[slug as keyof typeof directors]
  if (!director) return { title: "Director Not Found" }
  return {
    title: `${director.name} - ${director.role} | AI Personnel Australia`,
    description: director.bio.slice(0, 160),
  }
}

export default async function DirectorProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const director = directors[slug as keyof typeof directors]

  if (!director) {
    notFound()
  }

  const otherDirectors = Object.entries(directors)
    .filter(([key]) => key !== slug)
    .map(([key, value]) => ({ slug: key, ...value }))

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/#team">
            <Button
              variant="ghost"
              className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10 mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Team
            </Button>
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Leadership Team</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-3 mb-4">
                {director.name}
              </h1>
              <p className="text-accent text-xl font-medium mb-6">{director.role}</p>
              <div className="flex flex-wrap gap-4 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>{director.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-accent" />
                  <span>{director.experience} Experience</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl" />
                <img
                  src={director.image || "/placeholder.svg"}
                  alt={director.name}
                  className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Bio */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">About {director.name.split(" ")[0]}</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                {director.bio.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Specialty Card */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Award className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground">Area of Expertise</h3>
                  </div>
                  <p className="text-muted-foreground">{director.specialty}</p>
                </CardContent>
              </Card>

              {/* Key Highlights */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground">Key Highlights</h3>
                  </div>
                  <ul className="space-y-3">
                    {director.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                        <span className="text-muted-foreground text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Other Directors */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Meet Our Other Directors</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {otherDirectors.map((otherDirector) => (
              <Link key={otherDirector.slug} href={`/team/${otherDirector.slug}`}>
                <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="flex">
                    <div className="w-32 h-32 shrink-0">
                      <img
                        src={otherDirector.image || "/placeholder.svg"}
                        alt={otherDirector.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4 flex flex-col justify-center">
                      <h3 className="font-bold text-foreground group-hover:text-accent transition-colors">
                        {otherDirector.name}
                      </h3>
                      <p className="text-accent text-sm font-medium">{otherDirector.role}</p>
                      <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                        {otherDirector.bio.slice(0, 100)}...
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
