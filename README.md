# TaskFlow - Professional SaaS Landing Page Template

A modern, high-converting SaaS landing page template built with **Next.js 13**, **TypeScript**, and **Tailwind CSS**. Perfect for freelancers, agencies, and SaaS businesses launching their product.

## ✨ Features

- **🎯 High-Converting Design** - Optimized for email capture and waitlist signups
- **⚡ Performance-First** - Built with Next.js for optimal speed and SEO
- **📱 Fully Responsive** - Mobile-first design that works on all devices
- **♿ Accessible** - WCAG 2.1 AA compliant with semantic HTML
- **🎨 Easy Customization** - Change colors, text, and content in minutes
- **🚀 TypeScript** - Type-safe codebase for reliability
- **🎭 Smooth Animations** - Polished micro-interactions and scroll reveals
- **📊 SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- **🔧 Production Ready** - Zero lint errors, best practices throughout

## 📋 What's Included

### Pre-Built Sections
- **Hero** - Eye-catching headline with dual email capture forms
- **Problem/Solution** - Two-column comparison layout
- **Features** - 6-feature grid with icons
- **Social Proof** - Customer testimonials with avatars
- **How It Works** - 3-step onboarding process
- **Waitlist** - Secondary conversion form with reduced-motion support
- **Final CTA** - Urgency messaging section
- **Footer** - Complete footer with links and social

### Technical Features
- Custom React hooks (`useFormSubmission`, `useScrollReveal`)
- Email validation with regex
- Form success/error states
- Intersection observer for scroll animations
- Reduced motion detection for accessibility
- Tailwind CSS with custom animations
- TypeScript interfaces for all components

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone or extract the template
cd taskflow

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your landing page.

## 🎨 Customization

### Change Colors
Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: '#YOUR_COLOR',
      'primary-dark': '#YOUR_DARK_COLOR',
    },
  },
}
```

### Edit Content
Modify `lib/data.ts` to change:
- Features list
- Testimonials
- How it works steps

### Update Copy
Edit component files directly:
- `components/Hero.tsx` - Main headline & CTA
- `components/ProblemSolution.tsx` - Problem/solution text
- `components/Features.tsx` - Feature descriptions
- `components/FinalCTA.tsx` - Urgency messaging

### Change Form Handling
Edit `hooks/useFormSubmission.ts` to integrate with your email service:
```typescript
// Replace the setTimeout with your API call
const response = await fetch('/api/subscribe', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email }),
});
```

## 📖 File Structure

```
taskflow/
├── app/
│   ├── layout.tsx          # Root layout & metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── SocialProof.tsx
│   ├── HowItWorks.tsx
│   ├── Waitlist.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
├── hooks/                  # Custom React hooks
│   ├── useFormSubmission.ts
│   └── useScrollReveal.ts
├── lib/                    # Utilities & data
│   ├── data.ts            # Features, testimonials, steps
│   └── validation.ts      # Email validation & helpers
├── types/                 # TypeScript interfaces
│   └── index.ts
├── public/                # Static assets
├── tailwind.config.ts     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies & scripts
└── README.md             # This file
```

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🎯 Email Integration

To connect to an email service provider:

1. **Mailchimp**: 
   - Get your API key from Mailchimp dashboard
   - Create a backend API route in `app/api/subscribe/route.ts`
   - Call it from `hooks/useFormSubmission.ts`

2. **SendGrid**:
   - Install `@sendgrid/mail` package
   - Set `SENDGRID_API_KEY` in `.env.local`
   - Create backend route to handle subscriptions

3. **Resend** (Recommended):
   ```bash
   npm install resend
   ```
   - Get API key from resend.com
   - Use their Next.js SDK in your API route

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 768px - 1024px
- **Desktop**: 1200px+

All sections are optimized for each breakpoint.

## ♿ Accessibility Features

- Semantic HTML5 structure
- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus visible styles
- Reduced motion media query support
- Proper color contrast ratios
- Form validation messages

## 🔒 Privacy & Security

- No external scripts (except Next.js)
- No cookie tracking by default
- GDPR-friendly design
- Privacy policy link in footer
- Email form validation on client-side

## 📊 SEO

- Meta tags optimized for social sharing
- Open Graph tags for LinkedIn, Facebook
- Twitter Card support
- Dynamic page title and description
- Semantic HTML structure
- Mobile-friendly viewport

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload 'out' folder to Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📝 License

This template is provided under the MIT License. See LICENSE file for details.

## 💬 Support

For questions or issues:
1. Check the CUSTOMIZATION_GUIDE.md
2. Review the SETUP.md for detailed instructions
3. Examine component code comments

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [React Hooks Documentation](https://react.dev/reference/react)

## 🔄 Future Customizations

Common customizations you might want:
- Add Dark Mode support
- Add form field variations
- Create multiple color schemes
- Add email template builder
- Integrate with CRM system
- Add analytics dashboard
- Create admin panel

---

**Ready to launch?** Deploy to Vercel in one click and start capturing leads! 🚀
