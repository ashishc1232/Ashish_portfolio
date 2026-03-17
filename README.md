# Professional Full Stack Developer Portfolio

A modern, interactive portfolio website built with Next.js 16, React 19, and Tailwind CSS. Features beautiful scroll animations using AOS library, animated gradient backgrounds, and a fully functional contact form with email integration.

## Features

- **Animated Hero Section** - Floating gradient blobs with smooth scroll-triggered reveals
- **Scroll Animations** - AOS (Animate on Scroll) with staggered timing for all content
- **Responsive Design** - Mobile-first approach works seamlessly on all devices
- **Contact Form** - Fully functional email system using Nodemailer
- **Modern Tech Stack** - Next.js 16, React 19.2.4, TypeScript, Tailwind CSS
- **Custom Color Scheme** - Professional color palette (#000814, #001d3d, #003566, #ffc300, #ffd60a)
- **Smooth Navigation** - Fixed header with smooth scroll behavior and mobile menu
- **Project Showcase** - Featured and grid-based project displays with image zoom effects
- **Experience Timeline** - Professional career timeline with interactive hover effects

## Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19.2.4** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling and custom properties
- **AOS (Animate on Scroll) v2.3** - Professional scroll animations
- **Lucide React** - Icon library
- **React Hook Form** - Form handling
- **Zod** - Form validation

### Backend
- **Node.js & Express** - Server runtime
- **Nodemailer** - Email sending

## Getting Started

### Installation

1. **Install dependencies** using the shadcn CLI or clone the repository:
```bash
npx shadcn-cli@latest init my-portfolio
# or
git clone <your-repo>
cd your-portfolio
npm install
# or
pnpm install
```

2. **Set up environment variables:**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your email configuration:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

### Email Setup (Gmail)

To use Gmail for sending emails:

1. Enable 2-Factor Authentication on your Google Account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Generate a new app password
4. Use your Gmail address as `EMAIL_USER`
5. Use the generated password as `EMAIL_PASSWORD`

### Running the Development Server

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
.
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # Contact form API endpoint
│   ├── layout.tsx              # Root layout with AOS initializer
│   ├── globals.css             # Global styles with animations
│   ├── page.tsx                # Home page
│   └── icon.svg                # Favicon
├── components/
│   ├── navigation.tsx          # Top navigation bar
│   ├── footer.tsx              # Footer component
│   ├── aos-initializer.tsx     # AOS setup component
│   ├── three-d/
│   │   ├── scene.tsx           # Main 3D Canvas component
│   │   ├── animated-cube.tsx   # 3D Cube component
│   │   └── animated-sphere.tsx # 3D Sphere component
│   └── sections/
│       ├── hero-section.tsx    # Hero with 3D graphics
│       ├── about-section.tsx   # About & Experience
│       ├── skills-section.tsx  # Skills showcase
│       ├── projects-section.tsx # Featured projects
│       └── contact-section.tsx # Contact form
├── lib/
│   └── utils.ts                # Utility functions
├── public/                      # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── .env.example                # Environment variables template
└── package.json                # Dependencies
```

## Customization

### Update Your Information

1. **About Section** - Edit `components/sections/about-section.tsx`:
   - Add your real experience entries
   - Update the tech stack list

2. **Skills Section** - Edit `components/sections/skills-section.tsx`:
   - Customize skill categories and descriptions
   - Add your core competencies

3. **Projects Section** - Edit `components/sections/projects-section.tsx`:
   - Replace with your real projects
   - Add GitHub links and live URLs
   - Update project images and descriptions

4. **Contact Section** - Edit `components/sections/contact-section.tsx`:
   - Update email, phone, and location
   - Customize contact information

5. **Navigation** - Edit `components/navigation.tsx`:
   - Add additional navigation links
   - Update the logo/brand name

### Customizing Colors

The color scheme is defined in:
- `app/globals.css` - CSS variables for the design tokens
- `tailwind.config.ts` - Tailwind color extension

Current palette:
- Primary Dark: `#000814`
- Primary Darker: `#001d3d`
- Primary Blue: `#003566`
- Accent Yellow: `#ffc300`
- Accent Gold: `#ffd60a`

### Adding More Sections

1. Create a new component in `components/sections/`
2. Add it to your page layout
3. Use the `data-aos` attribute for animations:

```tsx
<section data-aos="fade-up" data-aos-duration="800">
  {/* Your content */}
</section>
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com)
3. Click "New Project" and import your repository
4. Add environment variables in project settings:
   - `EMAIL_USER`
   - `EMAIL_PASSWORD`
5. Deploy!

### Environment Variables on Vercel

Set up your email credentials in Vercel:
1. Go to Project Settings → Environment Variables
2. Add `EMAIL_USER` and `EMAIL_PASSWORD`
3. Redeploy the project

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Image optimization with Next.js
- Code splitting and lazy loading
- Optimized animations for smooth performance
- Minimal dependencies and bundle size

## Common Issues

### 3D Scene Not Rendering
- Ensure Three.js and React Three Fiber versions are compatible
- Check browser WebGL support
- Check console for errors

### Email Not Sending
- Verify EMAIL_USER and EMAIL_PASSWORD are correct
- Check if Gmail 2FA is enabled and app password is generated
- Allow less secure apps (if not using Gmail App Password)
- Check spam/junk folder

### Animations Not Working
- Ensure AOS CSS is imported in globals.css
- Check that `data-aos` attributes are present on elements
- Verify AOS is initialized in layout.tsx

## Contact Form Customization

### Email Template
Edit the HTML email template in `app/api/contact/route.ts`:
- Customize colors and styling
- Add company logo or signature
- Modify the confirmation email message

### Form Validation
Modify validation rules in `app/api/contact/route.ts`:
- Change field requirements
- Add custom validation rules
- Update error messages

## License

This project is open source and available under the MIT License.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Tailwind CSS](https://tailwindcss.com)
- [AOS Library](https://michalsnik.github.io/aos/)
- [Nodemailer](https://nodemailer.com)

## Support

For issues, questions, or suggestions, please open an issue on GitHub or contact me through the portfolio contact form.

---

**Built with ❤️ using Next.js, React, and Three.js**
