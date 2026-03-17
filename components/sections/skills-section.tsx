'use client'

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      description: 'React, Next.js, TypeScript, Tailwind CSS, Responsive Design',
      color: 'from-primary to-accent',
    },
    {
      title: 'Backend',
      description: 'Node.js, Express, MongoDB, MySQL and REST APIs',
      color: 'from-accent to-secondary',
    },
    {
      title: 'Tools & Tech',
      description: 'Git, Docker, Postman/Thunder',
      color: 'from-secondary to-primary',
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted">
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
             
              <span className="text-sm font-semibold text-primary">MY EXPERTISE</span>
            </div>
          </div>
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight"
          >
            Skills &<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"> Technology</span>
          </h2>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
          ></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((skill, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay={200 + index * 150}
              className="group relative h-full"
            >
              {/* Card Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-xl`}></div>

              {/* Card Content */}
              <div className="relative bg-background border-2 border-border rounded-2xl p-8 h-full hover:border-accent hover:shadow-lg transition-all duration-300">
                {/* Icon placeholder */}
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-primary-foreground font-bold text-xl">⚡</span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4">{skill.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">{skill.description}</p>

                {/* Decorative element */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-accent-yellow/10 to-transparent rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
          className="mt-16 bg-primary-dark text-white rounded-xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold mb-6">Core Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Clean Code',
              'API Design',
              'Database Design',
              'Performance Optimization',
              'Responsive UI',
              'Git Workflow',
              'REST APIs',
              'Problem Solving',
            ].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-foreground/80"
              >
                <span className="w-2 h-2 bg-accent-yellow rounded-full"></span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
