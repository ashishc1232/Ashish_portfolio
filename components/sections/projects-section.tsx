'use client'

import { ExternalLink, Github } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  liveUrl?: string
  featured?: boolean
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Samanya Gyan Education Platform',
      description: 'Online learning and competitive exam preparation platform providing study materials, mock tests, and subject-wise resources for exams like SSC, RAS, Railway, and teaching exams.',
      image: 'samanyagyan.png',
      tags: ['Next.js', 'Node.js', 'Tailwind CSS', 'Express', 'MongoDB'],
      liveUrl: 'https://samanyagyanedu.in/',
      featured: true,
    },
    {
      id: 2,
      title: 'NMFIC – Finance & Investment Cell Website',
      description: 'Official website for Narsee Monjee Finance & Investment Cell showcasing financial literacy initiatives, workshops, events, and student-driven projects like Project Samriddhi.',
      image: 'nmfic.png',
      tags: ['Next.js', 'Shadcn', 'Framer-Motion', 'Gsap', 'AOS'],
      liveUrl: 'https://www.nmfic.in/',
      featured: true,
    },
    {
      id: 3,
      title: 'Varcas Batteries Business Website',
      description: 'Corporate website for Varcas Batteries presenting battery products, company information, and business services with a responsive design for customers and distributors.',
      image: 'varcas.png',
      tags: ['React', 'Tailwind', 'TypeScript', 'React-Slick'],
      liveUrl: 'https://www.varcasbatteries.com/',
    },
    {
      id: 4,
      title: 'Digital Konnect Platform',
      description: 'Modern digital platform built with Next.js for connecting users with online services, featuring responsive UI and cloud deployment on Vercel.',
      image: 'digital_connect.png',
      tags: ['Next.js', 'Tailwind', 'Framer-motion'],
      liveUrl: 'https://digital-konnect.vercel.app/',
    },
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 bg-background">
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
            <div className="inline-flex shadow-xl items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
             
              <span className="text-sm  font-semibold text-primary">MY PORTFOLIO</span>
            </div>
          </div>
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight"
          >
            Featured<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"> Projects</span>
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
            Explore my best work and see what I can build for you
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={100 + index * 150}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 !== 0 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay={150 + index * 200}
                className="relative shadow-xl shadow-black group overflow-hidden rounded-2xl h-80 lg:h-96 border border-border"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={200 + index * 200}
                className="flex flex-col justify-center"
              >
                <h3 className="text-3xl font-bold text-foreground mb-4">{project.title}</h3>
                <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
                    >
                      <Github size={20} />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors font-semibold"
                    >
                      <ExternalLink size={20} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-foreground">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={project.id}
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay={400 + index * 100}
                className="group relative shadow-2xl rounded-xl shadow-black"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                {/* Card Content */}
                <div className="relative bg-background border-2 border-border rounded-xl p-6 h-full hover:border-accent transition-colors duration-300">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-lg h-48 mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <h4 className="text-xl font-bold text-foreground mb-2">{project.title}</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary-blue/20 text-primary-blue rounded text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-blue hover:text-accent-yellow transition-colors"
                        title="GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-yellow hover:text-primary-blue transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
