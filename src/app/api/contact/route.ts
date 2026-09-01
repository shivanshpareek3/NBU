import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy")

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, businessName, service, message } = body

    if (!firstName || !lastName || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Send email to founder
    await resend.emails.send({
      from: "No Books University <noreply@nobooksuniversity.com>", // Typically you need a verified domain in Resend
      to: "join@nobooksuniversity.com",
      subject: `New No Books University Enquiry — ${service}`,
      html: `
        <h2>New Enquiry</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Business Name:</strong> ${businessName || "N/A"}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p><strong>Submitted At:</strong> ${new Date().toISOString()}</p>
      `,
    })

    // Send confirmation to user
    await resend.emails.send({
      from: "No Books University <noreply@nobooksuniversity.com>",
      to: email,
      subject: "Thank you for your enquiry - No Books University",
      html: `
        <p>Hi ${firstName},</p>
        <p>Thank you for reaching out to No Books University. We have received your enquiry regarding <strong>${service}</strong>.</p>
        <p>Our team will review your message and get back to you shortly to discuss how we can help build the infrastructure behind your business.</p>
        <p>Best regards,<br/>The No Books University Team</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Resend API Error:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
