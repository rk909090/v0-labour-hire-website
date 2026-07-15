import { Header } from "@/components/header"
import { SplashSection } from "@/components/splash-section"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { LocationsSection } from "@/components/locations-section"
import { TeamSection } from "@/components/team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { JobsBoardSection } from "@/components/jobs-board-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <SplashSection />
      <Header />
      <HeroSection />
      <JobsBoardSection />
      <AboutSection />
      <LocationsSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
