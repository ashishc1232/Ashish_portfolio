import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      )
    }

    // Create transporter with your email credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can change this to your email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email to you (the portfolio owner)
    const mailOptionsToMe = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 8px;">
            <h2 style="color: #003566; margin-bottom: 20px;">New Contact Form Submission</h2>
            
            <div style="margin-bottom: 20px;">
              <p style="margin: 0 0 10px 0; color: #666;"><strong>Name:</strong></p>
              <p style="margin: 0; color: #333;">${escapeHtml(name)}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <p style="margin: 0 0 10px 0; color: #666;"><strong>Email:</strong></p>
              <p style="margin: 0; color: #333;">${escapeHtml(email)}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <p style="margin: 0 0 10px 0; color: #666;"><strong>Subject:</strong></p>
              <p style="margin: 0; color: #333;">${escapeHtml(subject)}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <p style="margin: 0 0 10px 0; color: #666;"><strong>Message:</strong></p>
              <p style="margin: 0; color: #333; white-space: pre-wrap;">${escapeHtml(message)}</p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
            <p style="color: #999; font-size: 12px; margin: 0;">This email was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
    }

    // Confirmation email to the sender
    const mailOptionsToSender = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for reaching out!',
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 8px;">
            <h2 style="color: #003566; margin-bottom: 20px;">Thank You for Contacting Me!</h2>
            
            <p style="color: #333; line-height: 1.6;">
              Hi ${escapeHtml(name)},
            </p>
            
            <p style="color: #333; line-height: 1.6;">
              Thank you for reaching out! I've received your message and I'll get back to you as soon as possible.
            </p>
            
            <p style="color: #333; line-height: 1.6;">
              In the meantime, feel free to check out my <a href="https://ashish-portfolio-pi-wine.vercel.app/" style="color: #003566; text-decoration: none;">portfolio</a> to learn more about my work.
            </p>
            
            <p style="color: #333; line-height: 1.6;">
              Best regards,<br>
              Ashish Chavan
            </p>
            
            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
            <p style="color: #999; font-size: 12px; margin: 0;">This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await transporter.sendMail(mailOptionsToMe)
    await transporter.sendMail(mailOptionsToSender)

    return NextResponse.json(
      {
        message: 'Email sent successfully! I will get back to you soon.',
        success: true,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        error: 'Failed to send email. Please try again later.',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}
