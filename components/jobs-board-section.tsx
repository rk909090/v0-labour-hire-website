"use client"

import { useState } from "react"
import { ChevronDown, MapPin, Clock, Briefcase, Users, ChefHat, Utensils, Bed, ClipboardCheck, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { JobApplicationModal } from "@/components/job-application-modal"
import { cn } from "@/lib/utils"

interface Job {
  id: number
  title: string
  location: string
  type: string
  category: string
  icon: React.ElementType
  rosters: string
  positions: number
  description: string
  responsibilities: string[]
  requirements: string[]
  benefits: string[]
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Camp Cook / Chef",
    location: "Pilbara Region, Western Australia",
    type: "FIFO — Full-Time",
    category: "Kitchen",
    icon: ChefHat,
    rosters: "2 weeks on / 1 week off",
    positions: 4,
    description:
      "Prepare and serve high-quality meals for mining camp residents. You will work in a fully equipped commercial kitchen catering to a workforce of up to 200 people.",
    responsibilities: [
      "Plan and prepare breakfast, lunch, and dinner menus",
      "Maintain food hygiene and kitchen cleanliness to HACCP standards",
      "Manage food stock, order ingredients, and minimise wastage",
      "Assist with catering for special events and functions",
      "Train and supervise kitchen hands as required",
    ],
    requirements: [
      "Certificate III in Commercial Cookery or equivalent trade qualification",
      "Minimum 2 years experience in a high-volume kitchen",
      "Valid food handling certificate",
      "Ability to pass a pre-employment medical and drug & alcohol screen",
      "Australian work rights or valid working visa",
    ],
    benefits: [
      "Competitive FIFO wage — above award rates",
      "Fully catered accommodation on site",
      "Return flights covered",
      "PPE and workwear provided",
      "Ongoing training and career development",
    ],
  },
  {
    id: 2,
    title: "Kitchen Hand",
    location: "Goldfields Region, Western Australia",
    type: "FIFO — Full-Time",
    category: "Kitchen",
    icon: Utensils,
    rosters: "2 weeks on / 2 weeks off",
    positions: 6,
    description:
      "Support the kitchen team with food preparation, washing up, and maintaining a clean and safe kitchen environment in a busy mining camp.",
    responsibilities: [
      "Assist chefs with food preparation and plating",
      "Wash, clean, and sanitise kitchen equipment and surfaces",
      "Receive and store food deliveries correctly",
      "Keep kitchen storerooms tidy and organised",
      "Follow all WHS procedures and food safety guidelines",
    ],
    requirements: [
      "Previous kitchen or food service experience preferred",
      "Food hygiene certificate (or willingness to obtain)",
      "Physical fitness — ability to stand for extended periods",
      "Reliable and punctual with a strong work ethic",
      "Australian work rights or valid working visa",
    ],
    benefits: [
      "FIFO wages — above award rates",
      "Fully catered accommodation on site",
      "Return flights covered",
      "Excellent entry-level pathway into the mining hospitality sector",
    ],
  },
  {
    id: 3,
    title: "Housekeeping Attendant",
    location: "Kimberley Region, Western Australia",
    type: "FIFO — Full-Time",
    category: "Housekeeping",
    icon: Bed,
    rosters: "3 weeks on / 1 week off",
    positions: 5,
    description:
      "Maintain high standards of cleanliness and comfort across accommodation villages, common areas, and facilities at a remote mining site.",
    responsibilities: [
      "Service and deep-clean accommodation rooms and amenities blocks",
      "Laundry duties including washing, drying, and folding linen",
      "Restock cleaning supplies and report maintenance issues",
      "Clean recreation rooms, gyms, and common areas",
      "Complete checklists and maintain daily cleaning records",
    ],
    requirements: [
      "Previous housekeeping or cleaning experience preferred",
      "Ability to work independently and as part of a team",
      "Attention to detail and high cleanliness standards",
      "Physical fitness for an active role",
      "Australian work rights or valid working visa",
    ],
    benefits: [
      "Competitive FIFO pay rates",
      "On-site accommodation and meals included",
      "Return flights covered",
      "PPE and uniforms provided",
    ],
  },
  {
    id: 4,
    title: "Camp Services Supervisor",
    location: "Mid West Region, Western Australia",
    type: "FIFO — Full-Time",
    category: "Management",
    icon: ClipboardCheck,
    rosters: "2 weeks on / 2 weeks off",
    positions: 2,
    description:
      "Lead and supervise a team of housekeeping, catering, and facilities staff to ensure smooth day-to-day operations of a remote accommodation village.",
    responsibilities: [
      "Supervise, roster, and performance-manage camp services teams",
      "Liaise with client site management on staffing and service delivery",
      "Conduct daily site inspections and quality audits",
      "Manage consumable inventory and supply ordering",
      "Ensure compliance with WHS policies and company standards",
    ],
    requirements: [
      "Minimum 3 years supervisory experience in camp management or hospitality",
      "Strong communication and leadership skills",
      "Proficiency in Microsoft Office and reporting tools",
      "First Aid Certificate (or willingness to obtain)",
      "Australian work rights or valid working visa",
    ],
    benefits: [
      "Senior FIFO salary package — above industry rates",
      "On-site accommodation and all meals included",
      "Return flights covered",
      "Leadership development and career progression opportunities",
    ],
  },
  {
    id: 5,
    title: "Catering Assistant",
    location: "Pilbara Region, Western Australia",
    type: "FIFO — Full-Time",
    category: "Kitchen",
    icon: Utensils,
    rosters: "2 weeks on / 1 week off",
    positions: 8,
    description:
      "Assist in the preparation and service of meals for a large mining workforce, supporting the catering team to deliver a consistent and high-quality dining experience.",
    responsibilities: [
      "Set up, service, and pack down the dining hall for all meal periods",
      "Assist with food preparation, portioning, and display",
      "Operate serveries and assist workers during meal service",
      "Maintain cleanliness of dining areas and servery equipment",
      "Support the team during peak periods and special events",
    ],
    requirements: [
      "Experience in a catering, hospitality, or food service environment",
      "Food safety certificate (or willingness to obtain)",
      "Positive attitude and ability to work in a fast-paced environment",
      "Ability to pass pre-employment health assessment",
      "Australian work rights or valid working visa",
    ],
    benefits: [
      "Competitive FIFO wages",
      "Fully catered on-site accommodation",
      "Return flights covered",
      "Genuine career pathways into camp management",
    ],
  },
  {
    id: 6,
    title: "Maintenance & Facilities Hand",
    location: "Goldfields Region, Western Australia",
    type: "FIFO — Full-Time",
    category: "Facilities",
    icon: Wrench,
    rosters: "2 weeks on / 2 weeks off",
    positions: 3,
    description:
      "Perform general maintenance and upkeep of camp facilities, accommodation buildings, and outdoor areas to ensure a safe and functional living environment for camp residents.",
    responsibilities: [
      "Carry out minor repairs to plumbing, electrical fittings, and carpentry",
      "Maintain camp grounds, roads, and external areas",
      "Assist with the setup and breakdown of temporary camp structures",
      "Report and escalate significant maintenance issues to the supervisor",
      "Complete maintenance logs and safety checklists",
    ],
    requirements: [
      "Trade or handyman background preferred (Certificate II or higher)",
      "Basic knowledge of WHS site safety requirements",
      "Driver's licence (manual preferred)",
      "Ability to pass pre-employment medical and police check",
      "Australian work rights or valid working visa",
    ],
    benefits: [
      "Competitive FIFO wage",
      "On-site accommodation and meals included",
      "Return flights covered",
      "PPE and tools provided",
    ],
  },
]

const categoryColors: Record<string, string> = {
  Kitchen: "bg-accent/10 text-accent",
  Housekeeping: "bg-primary/10 text-primary",
  Management: "bg-amber-100 text-amber-700",
  Facilities: "bg-emerald-100 text-emerald-700",
}

export function JobsBoardSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [applyingTo, setApplyingTo] = useState<{ title: string; location: string } | null>(null)

  const toggle = (id: number) => setExpandedId((prev) => (prev === id ? null : id))

  return (
    <section id="jobs" className="py-20 lg:py-32 bg-secondary/40">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Current Openings</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-5 text-balance">
            Jobs Board
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We are actively recruiting for the following roles across mining and remote operations in Australia.
            Click any position to view full details and apply.
          </p>
        </div>

        {/* Summary bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Briefcase className="h-4 w-4 text-accent" />
            <span><strong className="text-foreground">{jobs.length}</strong> open roles</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4 text-accent" />
            <span><strong className="text-foreground">{jobs.reduce((n, j) => n + j.positions, 0)}</strong> positions available</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-accent" />
            <span>Western Australia — FIFO</span>
          </div>
        </div>

        {/* Job list */}
        <div className="max-w-4xl mx-auto space-y-3">
          {jobs.map((job) => {
            const isOpen = expandedId === job.id
            const Icon = job.icon
            return (
              <div
                key={job.id}
                className={cn(
                  "bg-background rounded-2xl border border-border shadow-sm overflow-hidden transition-shadow duration-200",
                  isOpen && "shadow-md border-accent/30"
                )}
              >
                {/* Row header — always visible */}
                <button
                  onClick={() => toggle(job.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-5 flex items-center gap-4 hover:bg-secondary/50 transition-colors"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>

                  {/* Title + meta */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-base font-bold text-foreground">{job.title}</h3>
                      <span className={cn("text-xs font-medium px-2 py-0.5 rounded-full", categoryColors[job.category])}>
                        {job.category}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />{job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />{job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />{job.positions} position{job.positions !== 1 ? "s" : ""} available
                      </span>
                    </div>
                  </div>

                  {/* Chevron */}
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                {/* Expanded detail */}
                {isOpen && (
                  <div className="px-6 pb-6 border-t border-border">
                    <div className="pt-5 grid md:grid-cols-3 gap-6">
                      {/* Left — description + responsibilities + requirements */}
                      <div className="md:col-span-2 space-y-5">
                        <div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-foreground mb-2">Key Responsibilities</h4>
                          <ul className="space-y-1.5">
                            {job.responsibilities.map((r, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-foreground mb-2">Requirements</h4>
                          <ul className="space-y-1.5">
                            {job.requirements.map((r, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right — quick facts + benefits + apply */}
                      <div className="space-y-4">
                        {/* Quick facts */}
                        <div className="bg-secondary rounded-xl p-4 space-y-3">
                          <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wide">Roster</p>
                            <p className="text-sm font-semibold text-foreground mt-0.5">{job.rosters}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wide">Employment Type</p>
                            <p className="text-sm font-semibold text-foreground mt-0.5">{job.type}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wide">Positions</p>
                            <p className="text-sm font-semibold text-foreground mt-0.5">{job.positions} available</p>
                          </div>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h4 className="text-sm font-bold text-foreground mb-2">What&apos;s Included</h4>
                          <ul className="space-y-1.5">
                            {job.benefits.map((b, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Apply button */}
                        <Button
                          onClick={() => setApplyingTo({ title: job.title, location: job.location })}
                          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                        >
                          Apply for This Role
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom help note */}
        <div className="max-w-4xl mx-auto mt-8 bg-background border border-border rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">Don&apos;t see a role that fits?</p>
            <p className="text-xs text-muted-foreground mt-0.5">Send us your CV and we&apos;ll keep you on file for upcoming opportunities.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:office@aipersonnelaustralia.com"
              className="inline-flex items-center gap-2 text-xs font-medium text-accent hover:underline"
            >
              office@aipersonnelaustralia.com
            </a>
            <a
              href="https://wa.me/61414425993"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-accent hover:underline"
            >
              WhatsApp: +61 414 425 993
            </a>
          </div>
        </div>
      </div>

      {/* Application modal */}
      <JobApplicationModal job={applyingTo} onClose={() => setApplyingTo(null)} />
    </section>
  )
}
