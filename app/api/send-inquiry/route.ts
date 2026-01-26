import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, company, message, inquiryType } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !message || !inquiryType) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Create transporter with SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Determine subject based on inquiry type
    const subject =
      inquiryType === "employer"
        ? `New Staffing Inquiry - Looking to Hire from ${firstName} ${lastName}`
        : `Job Seeker Inquiry - Looking for Work from ${firstName} ${lastName}`

    // Create HTML email body
    const emailBody = `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
        <div style="background: linear-gradient(135deg, #2c3e50 0%, #1a5490 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h2 style="margin: 0; font-size: 24px;">${inquiryType === "employer" ? "🏢 New Hiring Inquiry" : "👤 New Job Seeker Inquiry"}</h2>
        </div>
        
        <div style="padding: 24px; background: #f9f9f9;">
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 16px;">
            <h3 style="margin-top: 0; color: #2c3e50; border-bottom: 2px solid #ff6b35; padding-bottom: 8px;">Contact Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
            ${company && inquiryType === "employer" ? `<p><strong>Company:</strong> ${company}</p>` : ""}
            <p><strong>Inquiry Type:</strong> ${inquiryType === "employer" ? "Looking to Hire" : "Looking for Work"}</p>
          </div>

          <div style="background: white; padding: 20px; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #2c3e50; border-bottom: 2px solid #ff6b35; padding-bottom: 8px;">
              ${inquiryType === "employer" ? "Staffing Requirements" : "Experience & Interests"}
            </h3>
            <p style="white-space: pre-wrap; word-wrap: break-word;">${message}</p>
          </div>
        </div>

        <div style="background: #2c3e50; color: white; padding: 16px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px;">
          <p style="margin: 0;">AI Personnel Australia - Professional Recruitment Services</p>
          <p style="margin: 4px 0 0 0;">© 2026 AI Personnel Australia. All rights reserved.</p>
        </div>
      </div>
    `

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "office@aipersonnelaustralia.com",
      subject: subject,
      html: emailBody,
    })

    return Response.json(
      { success: true, message: "Inquiry sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Email send error:", error)
    return Response.json(
      { error: "Failed to send inquiry. Please try again." },
      { status: 500 }
    )
  }
}
