"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react"

export function ContactSection() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [inquiryType, setInquiryType] = useState<"employer" | "jobseeker">("employer")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.currentTarget
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("submitting")
    setErrorMessage("")

    try {
      const response = await fetch("/send-inquiry.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          inquiryType,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to send inquiry")
      }

      setFormStatus("success")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })
    } catch (error) {
      console.error("Form submission error:", error)
      setErrorMessage(error instanceof Error ? error.message : "An error occurred. Please try again.")
      setFormStatus("error")
    }
  }

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
            Whether you're looking to hire quality staff or seeking work opportunities, we're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact form */}
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                {/* Inquiry type toggle */}
                <div className="flex gap-2 mb-8 p-1 bg-secondary rounded-lg">
                  <button
                    onClick={() => setInquiryType("employer")}
                    className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all ${
                      inquiryType === "employer"
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    I'm Looking to Hire
                  </button>
                  <button
                    onClick={() => setInquiryType("jobseeker")}
                    className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all ${
                      inquiryType === "jobseeker"
                        ? "bg-accent text-accent-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    I'm Looking for Work
                  </button>
                </div>

                {formStatus === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">
                      We've received your enquiry and will be in touch within 24 hours.
                    </p>
                  </div>
                ) : formStatus === "error" ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <AlertCircle className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Oops!</h3>
                    <p className="text-muted-foreground mb-6">{errorMessage}</p>
                    <Button
                      onClick={() => {
                        setFormStatus("idle")
                        setErrorMessage("")
                      }}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Try Again
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          placeholder="John"
                          className="bg-secondary border-0"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          placeholder="Smith"
                          className="bg-secondary border-0"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="john@company.com"
                          className="bg-secondary border-0"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+61 400 000 000"
                          className="bg-secondary border-0"
                        />
                      </div>
                    </div>

                    {inquiryType === "employer" && (
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company Name *
                        </label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          required={inquiryType === "employer"}
                          placeholder="Your Company Pty Ltd"
                          className="bg-secondary border-0"
                        />
                      </div>
                    )}

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        {inquiryType === "employer"
                          ? "Tell us about your staffing needs"
                          : "Tell us about your experience"}{" "}
                        *
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder={
                          inquiryType === "employer"
                            ? "What positions are you looking to fill? How many staff do you need?"
                            : "What is your background? What type of work are you looking for?"
                        }
                        className="bg-secondary border-0 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className={`w-full ${
                        inquiryType === "employer" ? "bg-primary hover:bg-primary/90" : "bg-accent hover:bg-accent/90"
                      } text-primary-foreground`}
                    >
                      {formStatus === "submitting" ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Enquiry
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-0 shadow-lg bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a
                        href="tel:1300000000"
                        className="text-primary-foreground/80 hover:text-accent transition-colors"
                      >
                        1300 AI PERSONNEL
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:info@aipersonnel.com.au"
                        className="text-primary-foreground/80 hover:text-accent transition-colors"
                      >
                        info@aipersonnel.com.au
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">Head Office</p>
                      <p className="text-primary-foreground/80">Perth, Western Australia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-primary-foreground/80">Mon - Fri: 8:00 AM - 6:00 PM AWST</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-accent text-accent-foreground">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Indonesia Recruitment Office</h3>
                <p className="text-accent-foreground/90 mb-4">
                  For candidate enquiries and recruitment operations in Indonesia.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-foreground/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Bali Office</p>
                    <a href="mailto:recruitment@aipersonnel.com.au" className="text-sm opacity-90 hover:opacity-100">
                      recruitment@aipersonnel.com.au
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
