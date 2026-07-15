import Link from "next/link"
import { Facebook, Linkedin, Instagram, ShieldCheck } from "lucide-react"

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Locations", href: "#locations" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  services: [
    { label: "For Employers", href: "#services" },
    { label: "For Job Seekers", href: "#services" },
    { label: "Industries", href: "#services" },
    { label: "Contact Us", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">AI</span>
              </div>
              <div>
                <span className="text-xl font-bold">AI Personnel</span>
                <span className="text-sm text-primary-foreground/70 block -mt-1">Australia</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6 max-w-sm">
              Specialist labour hire and recruitment agency providing quality hospitality staff for mining sites and
              remote operations across Australia.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ASIC Trust Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                <ShieldCheck className="h-4 w-4 text-accent" />
              </div>
              <div>
                <p className="text-primary-foreground/90 text-sm font-semibold">
                  AUSINDO PTY LTD &mdash; Registered Australian Company
                </p>
                <p className="text-primary-foreground/60 text-xs">
                  ACN 692 851 700 &middot; Registered in Western Australia under the Corporations Act 2001 &middot; ASIC Certified 14 Nov 2025
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-2 shrink-0">
              <ShieldCheck className="h-4 w-4 text-accent" />
              <span className="text-primary-foreground/80 text-xs font-medium">ASIC Registered Business</span>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-primary-foreground/10">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} AI Personnel Australia. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">Trading as AI Personnel Australia &middot; ACN: 692 851 700</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
