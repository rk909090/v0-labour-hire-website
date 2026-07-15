"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Upload, CheckCircle2, Mail, Phone, FileText, AlertCircle } from "lucide-react"

interface JobApplicationModalProps {
  job: { title: string; location: string } | null
  onClose: () => void
}

const INITIAL_FORM = {
  name: "",
  age: "",
  gender: "",
  nationality: "",
  email: "",
  phone: "",
  visaStatus: "",
}

export function JobApplicationModal({ job, onClose }: JobApplicationModalProps) {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [cvFile, setCvFile] = useState<File | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<typeof INITIAL_FORM> & { cv?: string }>({})
  const fileInputRef = useRef<HTMLInputElement>(null)

  if (!job) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.currentTarget
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    if (file) {
      const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
      if (!allowed.includes(file.type)) {
        setErrors((prev) => ({ ...prev, cv: "Please upload a PDF or Word document (.pdf, .doc, .docx)" }))
        return
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, cv: "File must be under 5 MB" }))
        return
      }
      setCvFile(file)
      setErrors((prev) => ({ ...prev, cv: "" }))
    }
  }

  const validate = () => {
    const newErrors: typeof errors = {}
    if (!formData.name.trim()) newErrors.name = "Full name is required"
    if (!formData.age || Number(formData.age) < 18 || Number(formData.age) > 70)
      newErrors.age = "Please enter a valid age (18–70)"
    if (!formData.gender) newErrors.gender = "Please select your gender"
    if (!formData.nationality.trim()) newErrors.nationality = "Nationality is required"
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email address"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.visaStatus) newErrors.visaStatus = "Please select your visa status"
    if (!cvFile) newErrors.cv = "Please upload your CV"
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    // Static submission — in production this would POST to an endpoint
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
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-background rounded-2xl shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-primary text-primary-foreground px-6 py-5 rounded-t-2xl flex items-start justify-between z-10">
          <div>
            <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">Apply Now</p>
            <h2 id="modal-title" className="text-xl font-bold leading-tight">{job.title}</h2>
            <p className="text-primary-foreground/70 text-sm mt-0.5">{job.location}</p>
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
            <h3 className="text-xl font-bold text-foreground mb-2">Application Submitted!</h3>
            <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
              Thank you, <strong>{formData.name}</strong>. We have received your application for <strong>{job.title}</strong> and will be in touch soon.
            </p>
            <Button onClick={onClose} className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5" noValidate>

            {/* Name */}
            <div>
              <label htmlFor="name" className={labelClass}>Full Name <span className="text-destructive">*</span></label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Budi Santoso" className={inputClass} />
              {errors.name && <p className={errorClass}><AlertCircle className="h-3 w-3" />{errors.name}</p>}
            </div>

            {/* Age + Gender */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="age" className={labelClass}>Age <span className="text-destructive">*</span></label>
                <Input id="age" name="age" type="number" min={18} max={70} value={formData.age} onChange={handleChange} placeholder="e.g. 28" className={inputClass} />
                {errors.age && <p className={errorClass}><AlertCircle className="h-3 w-3" />{errors.age}</p>}
              </div>
              <div>
                <label htmlFor="gender" className={labelClass}>Gender <span className="text-destructive">*</span></label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-md bg-secondary text-sm focus:outline-none focus:ring-2 focus:ring-ring border-0"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
                {errors.gender && <p className={errorClass}><AlertCircle className="h-3 w-3" />{errors.gender}</p>}
              </div>
            </div>

            {/* Nationality */}
            <div>
              <label htmlFor="nationality" className={labelClass}>Nationality <span className="text-destructive">*</span></label>
              <Input id="nationality" name="nationality" value={formData.nationality} onChange={handleChange} placeholder="e.g. Indonesian" className={inputClass} />
              {errors.nationality && <p className={errorClass}><AlertCircle className="h-3 w-3" />{errors.nationality}</p>}
            </div>

            {/* Email + Phone */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className={labelClass}>Email <span className="text-destructive">*</span></label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
                {errors.email && <p className={errorClass}><AlertCircle className="h-3 w-3" />{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>Phone / WhatsApp <span className="text-destructive">*</span></label>
                <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+62 812 0000 0000" className={inputClass} />
                {errors.phone && <p className={errorClass}><AlertCircle className="h-3 w-3" />{errors.phone}</p>}
              </div>
            </div>

            {/* Visa Status */}
            <div>
              <label htmlFor="visaStatus" className={labelClass}>
                Visa Status — Have you applied or are you in the process of applying for Australia?{" "}
                <span className="text-destructive">*</span>
              </label>
              <select
                id="visaStatus"
                name="visaStatus"
                value={formData.visaStatus}
                onChange={handleChange}
                className="w-full h-10 px-3 rounded-md bg-secondary text-sm focus:outline-none focus:ring-2 focus:ring-ring border-0"
              >
                <option value="">Select your visa status</option>
                <option value="have-visa">Yes, I already have an Australian work visa</option>
                <option value="applied">Yes, I have applied and am awaiting approval</option>
                <option value="in-process">Yes, I am currently in the application process</option>
                <option value="not-started">No, I have not yet started the process</option>
                <option value="au-citizen">I am an Australian citizen or permanent resident</option>
              </select>
              {errors.visaStatus && <p className={errorClass}><AlertCircle className="h-3 w-3" />{errors.visaStatus}</p>}
            </div>

            {/* CV Upload */}
            <div>
              <label className={labelClass}>
                Upload Your CV <span className="text-destructive">*</span>
              </label>
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-border rounded-xl p-6 text-center cursor-pointer hover:border-accent hover:bg-accent/5 transition-colors"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  aria-label="Upload CV"
                />
                {cvFile ? (
                  <div className="flex items-center justify-center gap-3">
                    <FileText className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium text-foreground">{cvFile.name}</span>
                    <span className="text-xs text-muted-foreground">({(cvFile.size / 1024).toFixed(0)} KB)</span>
                  </div>
                ) : (
                  <>
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm font-medium text-foreground">Click to upload your CV</p>
                    <p className="text-xs text-muted-foreground mt-1">PDF, DOC or DOCX — max 5 MB</p>
                  </>
                )}
              </div>
              {errors.cv && <p className={errorClass}><AlertCircle className="h-3 w-3" />{errors.cv}</p>}

              {/* ATS tip */}
              <div className="mt-3 bg-accent/8 border border-accent/20 rounded-lg px-4 py-3">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">CV tip:</span> Use a simple, single-column layout with clear headings (Work Experience, Education, Skills). Avoid tables, images, and fancy fonts so your CV passes Applicant Tracking Systems (ATS) used to match candidates to roles.
                </p>
              </div>
            </div>

            {/* Help block */}
            <div className="bg-secondary rounded-xl p-4 flex flex-col sm:flex-row gap-4">
              <p className="text-xs text-muted-foreground font-medium self-center shrink-0">Need help with your CV?</p>
              <div className="flex flex-col sm:flex-row gap-3 flex-1">
                <a
                  href="mailto:office@aipersonnelaustralia.com"
                  className="flex items-center gap-2 text-xs text-accent hover:underline"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0" />
                  office@aipersonnelaustralia.com
                </a>
                <a
                  href="https://wa.me/61414425993"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-accent hover:underline"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0" />
                  WhatsApp: +61 414 425 993
                </a>
              </div>
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 h-12">
              Submit Application
            </Button>
            <p className="text-xs text-muted-foreground text-center">All fields marked * are required before submission.</p>
          </form>
        )}
      </div>
    </div>
  )
}
