"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "AI Personnel Australia has been instrumental in solving our staffing challenges. Their candidates are well-prepared, professional, and integrate seamlessly into our remote operations.",
    author: "Sarah Mitchell",
    role: "Operations Manager",
    company: "Pilbara Mining Services",
    image: "/professional-woman-business-portrait-headshot-mini.jpg",
  },
  {
    quote:
      "The quality of hospitality staff we receive is consistently excellent. The team understands the unique demands of mining site catering and delivers every time.",
    author: "David Thompson",
    role: "Camp Manager",
    company: "Northern Gold Resources",
    image: "/professional-man-business-portrait-headshot-mining.jpg",
  },
  {
    quote:
      "What sets AI Personnel apart is their thorough screening process and ongoing support. We've built a reliable partnership that delivers real results for our workforce needs.",
    author: "Michael Chen",
    role: "HR Director",
    company: "Queensland Mining Corp",
    image: "/professional-asian-man-business-portrait-headshot-.jpg",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-primary">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-3 mb-6 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Don't just take our word for it. Here's what industry leaders say about working with AI Personnel Australia.
          </p>
        </div>

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl bg-card">
            <CardContent className="p-8 lg:p-12">
              <Quote className="h-12 w-12 text-accent mb-6" />
              <p className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8">
                "{testimonials[activeIndex].quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].image || "/placeholder.svg"}
                  alt={testimonials[activeIndex].author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-foreground">{testimonials[activeIndex].author}</p>
                  <p className="text-muted-foreground text-sm">{testimonials[activeIndex].role}</p>
                  <p className="text-accent text-sm font-medium">{testimonials[activeIndex].company}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center text-primary-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? "bg-accent" : "bg-primary-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center text-primary-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
