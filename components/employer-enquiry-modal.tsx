"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, CheckCircle2, AlertCircle, Building2 } from "lucide-react"

const INITIAL_FORM = {
  companyName: "",
  contactName: "",
  email: "",
  whatsapp: "",
  state: "",
  preferredContact: "",
}

interface EmployerEnquiryModalProps {
  onClose: () => void
}

export function EmployerEnquiryModal({ onClose }: EmployerEnquiryModalProps) {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<typeof INITIAL_FORM>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.currentTarget
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const validate = () => {
    const errs: Partial<typeof INITIAL_FORM> = {}
    if (!formData.companyName.trim()) errs.companyName = "Company name is required"
    if (!formData.contactName.trim()) errs.contactName = "Contact person name is required"
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errs.email = "Please enter a valid email address"
    if (!formData.whatsapp.trim()) errs.whatsapp = "WhatsApp number is required"
    if (!formData.state.trim()) errs.state = "Please enter the state your company operates in"
    if (!formData.preferredContact) errs.preferredContact = "Please select a preferred contact method"
    return errs
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitted(true)
  }

  const labelClass = "block text-sm font-medium text-foreground mb-1.5"
  const inputClass = "bg-secondary border-0 focus-visible:ring-ring"
  const errorClass = "text-xs text-destructive mt-1 flex items-center gap-1"

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="employer-modal-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-background rounded-2xl shadow-2xl w-full max-w-lg max-h-[92vh] overflow-y-auto">

        {/* Header */}
        <div className="sticky top-0 bg-primary text-primary-foreground px-6 py-5 rounded-t-2xl flex items-start justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary-foreground/10 rounded-xl flex items-center justify-center shrink-0">
              <Building2 className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-0.5">Staffing Enquiry</p>
              <h2 id="employer-modal-title" className="text-xl font-bold leading-tight">Get in Touch</h2>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary-foreground/10 transition-colors shrink-0 mt-0.5"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {submitted ? (
          <div className="px-6 py-16 text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Enquiry Sent!</h3>
            <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
              Thank you, <strong>{formData.contactName}</strong> from <strong>{formData.companyName}</strong>. We will be in touch shortly.
            </p>
            <Button onClick={onClose} className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5" noValidate>

            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className={labelClass}>
                Company Name <span className="text-destructive">*</span>
              </label>
              <Input id="companyName" name="companyName" value={formData.companyName} onChange={handleChange}
                placeholder="e.g. Acme Mining Pty Ltd" className={inputClass} />
              {errors.companyName && <p className={errorClass}><AlertCircle className="h-3 w-3" />{errors.companyName}</p>}
            </div>

            {/* Contact Person */}
            <div>
              <label htmlFor="contactName" className={labelClass}>
                Contact Person&apos;s Name <span className="text-destructive">*</span>
              </label>
              <Input id="contactName" name="contactName" value={formData.contactName} onChange={handleChange}
                placeholder="e.g. John Smith" className={inputClass} />
              {errors.contactName && <p className={errorClass}><AlertCircle className="h-3 w-3" />{errors.contactName}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelClass}>
                Email <span className="text-destructive">*</span>
              </label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange}
                placeholder="john@company.com" className={inputClass} />
              {errors.email && <p className={errorClass}><AlertCircle className="h-3 w-3" />{errors.email}</p>}
            </div>

            {/* WhatsApp */}
            <div>
              <label htmlFor="whatsapp" className={labelClass}>
                WhatsApp <span className="text-destructive">*</span>
              </label>
              <Input id="whatsapp" name="whatsapp" type="tel" value={formData.whatsapp} onChange={handleChange}
                placeholder="+61 400 000 000" className={inputClass} />
              {errors.whatsapp && <p className={errorClass}><AlertCircle className="h-3 w-3" />{errors.whatsapp}</p>}
            </div>

            {/* State */}
            <div>
              <label htmlFor="state" className={labelClass}>
                State <span className="text-destructive text-xs font-normal ml-1">(where your company operates and is based in)</span>
                <span className="text-destructive"> *</span>
              </label>
              <Input id="state" name="state" value={formData.state} onChange={handleChange}
                placeholder="e.g. Western Australia" className={inputClass} />
              {errors.state && <p className={errorClass}><AlertCircle className="h-3 w-3" />{errors.state}</p>}
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label htmlFor="preferredContact" className={labelClass}>
                Preferred Contact Method <span className="text-destructive">*</span>
              </label>
              <select
                id="preferredContact"
                name="preferredContact"
                value={formData.preferredContact}
                onChange={handleChange}
                className="w-full h-10 px-3 rounded-md bg-secondary text-sm focus:outline-none focus:ring-2 focus:ring-ring border-0"
              >
                <option value="">Select preferred method</option>
                <option value="email">Email</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="phone-call">Phone Call</option>
              </select>
              {errors.preferredContact && <p className={errorClass}><AlertCircle className="h-3 w-3" />{errors.preferredContact}</p>}
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 h-12">
              Send Enquiry
            </Button>
            <p className="text-xs text-muted-foreground text-center">All fields marked * are required.</p>
          </form>
        )}
      </div>
    </div>
  )
}
