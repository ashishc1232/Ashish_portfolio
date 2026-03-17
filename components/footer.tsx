import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-secondary-foreground py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm opacity-70">
              © {currentYear} Full Stack Developer. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-2 text-accent">
            <p className="text-sm">Crafted with</p>
            <Heart size={16} className="fill-accent" />
            <p className="text-sm">and React</p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:text-accent transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:text-accent transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:text-accent transition-colors text-sm"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
