'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle } from 'lucide-react'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

interface SubmitState {
  loading: boolean
  success: boolean
  error: string | null
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitState, setSubmitState] = useState<SubmitState>({
    loading: false,
    success: false,
    error: null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitState({ loading: true, success: false, error: null })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email')
      }

      setSubmitState({
        loading: false,
        success: true,
        error: null,
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitState({ loading: false, success: false, error: null })
      }, 5000)
    } catch (error) {
      setSubmitState({
        loading: false,
        success: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      })
    }
  }

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center mb-20"
        >
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            className="inline-block mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
             
              <span className="text-sm font-semibold text-primary">CONTACT ME</span>
            </div>
          </div>
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight"
          >
            Get In<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"> Touch</span>
          </h2>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"
          ></div>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="text-foreground/70 text-lg"
          >
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="space-y-6"
          >
            {/* Email */}
            <div
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="300"
              className="p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-primary-foreground" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-foreground/70 hover:text-accent transition-colors font-medium"
                  >
                    your.email@example.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="400"
              className="p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-primary-foreground" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-foreground/70 hover:text-accent transition-colors font-medium"
                  >
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="500"
              className="p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-primary-foreground" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Location</h3>
                  <p className="text-foreground/70 font-medium">
                    City, Country
                  </p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="600"
              className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20"
            >
              <p className="text-sm text-foreground/60 mb-2 font-semibold tracking-wide">AVAILABILITY</p>
              <p className="text-foreground font-semibold mb-4">Open for opportunities</p>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <p className="text-sm text-foreground/70">Available for freelance projects</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="lg:col-span-2 space-y-6 bg-background p-8 rounded-2xl border-2 border-border hover:border-accent hover:shadow-lg transition-all duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  suppressHydrationWarning
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-foreground/50"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  suppressHydrationWarning
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-foreground/50"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                suppressHydrationWarning
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-foreground/50"
                placeholder="What is this about?"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                suppressHydrationWarning
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-foreground/50 resize-none"
                placeholder="Tell me about your project or inquiry..."
              ></textarea>
            </div>

            {/* Success Message */}
            {submitState.success && (
              <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="text-green-600" size={20} />
                <div>
                  <p className="text-green-800 font-semibold">Message sent successfully!</p>
                  <p className="text-green-700 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitState.error && (
              <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div>
                  <p className="text-red-800 font-semibold">Error</p>
                  <p className="text-red-700 text-sm">{submitState.error}</p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitState.loading}
              className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 disabled:opacity-50 transition-opacity font-semibold flex items-center justify-center gap-2"
            >
              {submitState.loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
