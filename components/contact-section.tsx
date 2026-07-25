"use client"

import { Mail, Phone, MapPin, Clock, Building2, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether you need skilled workers or you are looking to build your career in Australia — we are here to help.
          </p>
        </div>

        {/* Two cards side by side */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Card 1 — For Employers */}
          <Card className="border-0 shadow-xl bg-primary text-primary-foreground rounded-3xl overflow-hidden">
            <CardContent className="p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-primary-foreground/10 rounded-xl flex items-center justify-center shrink-0">
                  <Building2 className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-accent text-xs font-semibold uppercase tracking-wider">Australian Office</p>
                  <h3 className="text-xl font-bold">For Employers</h3>
                </div>
              </div>

              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-8">
                Looking to source skilled hospitality or trades workers for your site? Contact our Australian team and we will get you staffed up fast.
              </p>

              <div className="space-y-5">
                <a
                  href="https://wa.me/61414425993"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 bg-primary-foreground/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/60 text-xs font-medium uppercase tracking-wide">Phone / WhatsApp</p>
                    <p className="text-primary-foreground font-semibold group-hover:text-accent transition-colors">+61 414 425 993</p>
                  </div>
                </a>

                <a
                  href="mailto:office@aipersonnelaustralia.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 bg-primary-foreground/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/60 text-xs font-medium uppercase tracking-wide">Email</p>
                    <p className="text-primary-foreground font-semibold group-hover:text-accent transition-colors break-all">
                      office@aipersonnelaustralia.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary-foreground/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/60 text-xs font-medium uppercase tracking-wide">Head Office</p>
                    <p className="text-primary-foreground font-semibold">Perth, Western Australia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary-foreground/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/60 text-xs font-medium uppercase tracking-wide">Business Hours</p>
                    <p className="text-primary-foreground font-semibold">Mon – Fri: 8:00 AM – 6:00 PM AWST</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 2 — For Job Seekers */}
          <Card className="border-0 shadow-xl bg-accent text-accent-foreground rounded-3xl overflow-hidden">
            <CardContent className="p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-accent-foreground/10 rounded-xl flex items-center justify-center shrink-0">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-accent-foreground/60 text-xs font-semibold uppercase tracking-wider">Indonesia Office</p>
                  <h3 className="text-xl font-bold">For Job Seekers</h3>
                </div>
              </div>

              <p className="text-accent-foreground/80 text-sm leading-relaxed mb-8">
                Dreaming of working in Australia? Reach our international recruitment team directly. We support you through every step — from CV to visa to placement.
              </p>

              <div className="space-y-5">
                <a
                  href="https://wa.me/6285713710836"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 bg-accent-foreground/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent-foreground/20 transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-accent-foreground/60 text-xs font-medium uppercase tracking-wide">WhatsApp (Indonesia)</p>
                    <p className="text-accent-foreground font-semibold group-hover:opacity-80 transition-opacity">+62 857 1371 0836</p>
                  </div>
                </a>

                <a
                  href="mailto:office@aipersonnelaustralia.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 bg-accent-foreground/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent-foreground/20 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-accent-foreground/60 text-xs font-medium uppercase tracking-wide">Email</p>
                    <p className="text-accent-foreground font-semibold group-hover:opacity-80 transition-opacity break-all">
                      office@aipersonnelaustralia.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-accent-foreground/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-accent-foreground/60 text-xs font-medium uppercase tracking-wide">Response Time</p>
                    <p className="text-accent-foreground font-semibold">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}
