'use client'

export default function AboutSection() {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Quastech',
      period: '2025 - present',
      description: 'Built responsive web applications, managed databases, implemented REST APIs for multiple clients.',
    },
    {
      title: 'Frontend Developer',
      company: 'Codify Software Solutions',
      period: '2024 - 2025',
      description: 'Developed front-end components, fixed bugs, assisted in code reviews and testing.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-background">
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
            
              <span className="text-sm font-semibold text-primary">ABOUT ME</span>
            </div>
          </div>
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight"
          >
            Crafting Digital<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"> Experiences</span>
          </h2>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
          ></div>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="space-y-8">
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
                className="text-foreground/80 text-lg leading-relaxed"
              >
                I'm a full-stack developer with 2+ years of experience building scalable, performant, and accessible web applications. I specialize in the MERN stack (MongoDB, Express, React, Node.js) and modern frontend frameworks like Next.js and TypeScript.
              </p>

              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
                className="text-foreground/70 text-lg leading-relaxed"
              >
                I believe in writing clean, maintainable code and creating delightful user experiences that prioritize both aesthetics and functionality.
              </p>

              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                className="pt-6 border-t border-border"
              >
                <p className="text-sm text-foreground/60 mb-4 font-semibold tracking-wide">TECH STACK</p>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL', 'Tailwind'].map((tech, idx) => (
                    <span
                      key={tech}
                      data-aos="zoom-in"
                      data-aos-duration="600"
                      data-aos-delay={600 + idx * 50}
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Experience Timeline */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="space-y-8">
              <h3
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
                className="text-2xl font-bold text-foreground mb-12"
              >
                Professional Experience
              </h3>

              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-accent last:pb-0 group"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={400 + index * 150}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-4 top-0 w-6 h-6 bg-accent rounded-full border-4 border-background group-hover:scale-125 transition-transform duration-300"></div>

                  <div className="p-4 shadow-xl shadow-black rounded-lg bg-card border border-border group-hover:border-accent/50 transition-all duration-300">
                    <h4 className="text-lg font-bold text-foreground mb-1">{exp.title}</h4>
                    <p className="text-sm text-accent font-semibold mb-2">{exp.company}</p>
                    <p className="text-xs text-foreground/50 mb-3 font-medium">{exp.period}</p>
                    <p className="text-foreground/70 leading-relaxed text-sm">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
