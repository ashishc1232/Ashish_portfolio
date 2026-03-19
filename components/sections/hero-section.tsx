'use client'

import { ChevronDown, ArrowRight } from 'lucide-react'
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress } from "react-icons/si";
import Link from 'next/link'
import Image from 'next/image';
const techStack = [
  { label: "React", desc: "UI Framework", icon: <FaReact /> },
  { label: "Next.js", desc: "Full Stack", icon: <SiNextdotjs /> },
  { label: "Node.js", desc: "Backend", icon: <FaNodeJs /> },
  { label: "Express.js", desc: "Node Framework", icon: <SiExpress /> },
  { label: "MongoDB", desc: "Database", icon: <SiMongodb /> },
];
export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left side - Text Content */}
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              {/* Tag */}
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="inline-flex items-center gap-2 w-fit"
              >

                <span className="text-accent text-sm font-semibold tracking-wide">WELCOME TO MY PORTFOLIO</span>
              </div>

              {/* Main Heading */}
              <div
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
                  Full Stack
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Developer
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
                className="text-lg text-foreground/70 leading-relaxed max-w-lg"
              >
                Crafting beautiful, scalable, and performant web applications with 2+ years of expertise in the MERN stack, Next.js, and modern web technologies.
              </p>

              {/* Quick Stats */}
              <div
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="500"
                className="grid grid-cols-3 gap-6 pt-4 border-t border-border"
              >
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-accent">2+</p>
                  <p className="text-sm text-foreground/60">Years Experience</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-accent">10+</p>
                  <p className="text-sm text-foreground/60">Projects</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-accent">100%</p>
                  <p className="text-sm text-foreground/60">Satisfaction</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="600"
                className="flex flex-wrap gap-4 pt-4"
              >
                <Link
                  href="#projects"
                  className="inline-flex shadow-xl shadow-black items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 font-semibold group"
                >
                  View My Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex shadow-xl shadow-slate-700 items-center gap-2 mb-3 lg:mb-0 px-8 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors duration-300 font-semibold"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - Illustration/Feature Cards */}
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="700"
            className="hidden lg:flex flex-col gap-6"
          >
            {/* Featured Tech Stack */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
              {techStack.map((tech, idx) => (
                <div
                  key={tech.label}
                  className="p-3 sm:p-4 shadow-2xl border rounded-xl text-center"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl mb-2">
                    {tech.icon}
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold">{tech.label}</h4>
                  <p className="text-[10px] sm:text-xs opacity-60">{tech.desc}</p>
                </div>
              ))}
            </div>

            {/* Large Featured Card */}
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="1000"
              className="p-6 shadow-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 rounded-2xl mt-4"
            >
              <div className="relative  h-40 bg-gradient-to-br from-primary/20 to-accent/10 rounded-xl mb-4 overflow-hidden">
                <Image
                  src="/laptop.jpg"
                  alt="program"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">Building the Future</h3>
              <p className="text-sm text-foreground/60">
                Creating innovative solutions with cutting-edge technologies and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="800"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="text-accent" size={32} />
      </div>
    </section>
  )
}
