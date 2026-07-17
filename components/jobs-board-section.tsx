"use client"

import { useState } from "react"
import {
  ChefHat,
  Utensils,
  Bed,
  ClipboardCheck,
  Wrench,
  Cog,
  Truck,
  Zap,
  Flame,
  Settings,
  HardHat,
  LifeBuoy,
  Power,
  Briefcase,
  Send,
  Mail,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { JobApplicationModal } from "@/components/job-application-modal"
import { cn } from "@/lib/utils"

interface Job {
  id: number
  title: string
  category: string
  icon: React.ElementType
}

const jobs: Job[] = [
  { id: 1,  title: "Camp Cook / Chef",              category: "Kitchen",      icon: ChefHat        },
  { id: 2,  title: "Kitchen Hand",                  category: "Kitchen",      icon: Utensils       },
  { id: 3,  title: "Housekeeping Attendant",        category: "Housekeeping", icon: Bed            },
  { id: 4,  title: "Camp Services Supervisor",      category: "Management",   icon: ClipboardCheck },
  { id: 5,  title: "Catering Assistant",            category: "Kitchen",      icon: Utensils       },
  { id: 6,  title: "Maintenance & Facilities Hand", category: "Facilities",   icon: Wrench         },
  { id: 7,  title: "Process Technician",            category: "Technical",    icon: Cog            },
  { id: 8,  title: "Fixed & Mobile Plant Operator", category: "Operations",   icon: Truck          },
  { id: 9,  title: "Mechanical Tradesmen",          category: "Trades",       icon: Wrench         },
  { id: 10, title: "Electrical Tradesmen",          category: "Trades",       icon: Zap            },
  { id: 11, title: "Boilermaker",                   category: "Trades",       icon: Flame          },
  { id: 12, title: "Fitter",                        category: "Trades",       icon: Settings       },
  { id: 13, title: "Safety Officer",                category: "Safety",       icon: HardHat        },
  { id: 14, title: "Support Personnel",             category: "Support",      icon: LifeBuoy       },
  { id: 15, title: "Shutdown Specialist",           category: "Projects",     icon: Power          },
  { id: 16, title: "Project Based Specialist",      category: "Projects",     icon: Briefcase      },
]

const categoryColors: Record<string, string> = {
  Kitchen:      "bg-accent/10 text-accent",
  Housekeeping: "bg-primary/10 text-primary",
  Management:   "bg-amber-100 text-amber-700",
  Facilities:   "bg-emerald-100 text-emerald-700",
  Technical:    "bg-primary/10 text-primary",
  Operations:   "bg-amber-100 text-amber-700",
  Trades:       "bg-accent/10 text-accent",
  Safety:       "bg-emerald-100 text-emerald-700",
  Support:      "bg-primary/10 text-primary",
  Projects:     "bg-amber-100 text-amber-700",
}

export function JobsBoardSection() {
  const [modalOpen, setModalOpen] = useState(false)

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
            If you are interested, send us your CV and we will be in touch.
          </p>
        </div>

        {/* Static job list — 2 columns */}
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-3 mb-16">
          {jobs.map((job) => {
            const Icon = job.icon
            return (
              <div
                key={job.id}
                className="bg-background rounded-2xl border border-border shadow-sm px-6 py-5 flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <div className="flex items-center gap-3">
                  <h3 className="text-base font-bold text-foreground">{job.title}</h3>
                  <span className={cn("text-xs font-medium px-2.5 py-0.5 rounded-full", categoryColors[job.category])}>
                    {job.category}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* CV submission CTA — primary action */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary rounded-3xl overflow-hidden">
            <div className="px-8 py-12 md:px-14 md:py-14 flex flex-col md:flex-row items-center gap-10">

              {/* Left — text */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-accent/20 text-accent text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
                  <Send className="h-3.5 w-3.5" />
                  Submit Your CV
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 text-balance">
                  Interested in working with us?
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed mb-6 max-w-lg">
                  Fill out our short form and attach your CV. We recruit from around the globe — wherever you are,
                  if you have the skills, we want to hear from you.
                </p>
                <Button
                  onClick={() => setModalOpen(true)}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 h-12 text-base"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Us Your CV
                </Button>
              </div>

              {/* Right — contact options */}
              <div className="shrink-0 w-full md:w-auto">
                <div className="bg-primary-foreground/10 border border-primary-foreground/15 rounded-2xl p-6 space-y-4 min-w-[260px]">
                  <p className="text-primary-foreground/60 text-xs font-semibold uppercase tracking-wider">
                    Or reach us directly
                  </p>
                  <a
                    href="mailto:office@aipersonnelaustralia.com"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 bg-accent/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent/30 transition-colors">
                      <Mail className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-primary-foreground/60 text-xs">Email</p>
                      <p className="text-primary-foreground text-sm font-medium group-hover:text-accent transition-colors">
                        office@aipersonnelaustralia.com
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/61414425993"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 bg-accent/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent/30 transition-colors">
                      <Phone className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-primary-foreground/60 text-xs">WhatsApp</p>
                      <p className="text-primary-foreground text-sm font-medium group-hover:text-accent transition-colors">
                        +61 414 425 993
                      </p>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Application modal — generic, not tied to a specific role */}
      {modalOpen && (
        <JobApplicationModal
          job={{ title: "General Application", location: "Mining & Remote Operations, Australia" }}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  )
}
