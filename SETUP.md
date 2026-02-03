# Setup & Installation Guide

Complete step-by-step guide to get TaskFlow running on your local machine.

## 📋 Prerequisites

Before you start, make sure you have:

- **Node.js** 18.0 or higher ([Download](https://nodejs.org))
- **npm** (comes with Node.js) or **yarn**
- **Git** (optional, for cloning)
- A code editor (VS Code recommended)

### Check Your Versions

Open Terminal/Command Prompt and run:

```bash
node --version  # Should be v18.0 or higher
npm --version   # Should be 9.0 or higher
```

## 🚀 Installation Steps

### Step 1: Extract/Clone the Project

**Option A: If you downloaded a ZIP file**
```bash
# Extract the ZIP file
# Navigate to the folder
cd taskflow
```

**Option B: If cloning from git**
```bash
git clone <repository-url>
cd taskflow
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages (Next.js, React, TypeScript, Tailwind CSS, etc.).

**What it installs:**
- Next.js 13.x - React framework
- React 18 - UI library
- TypeScript - Type safety
- Tailwind CSS - Styling
- ESLint - Code quality

### Step 3: Start Development Server

```bash
npm run dev
```

**Expected output:**
```
> taskflow-landing@0.1.0 dev
> next dev

  ▲ Next.js 13.5.11
  - Local:        http://localhost:3000
  - Environments: .env.local

 ✓ Ready in 3.9s
```

### Step 4: Open in Browser

Visit **`http://localhost:3000`** in your web browser. You should see the landing page!

## 📦 Project Structure

```
taskflow/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout & page metadata
│   ├── page.tsx                 # Main landing page
│   ├── globals.css              # Global styles
│   └── api/                     # API routes (for forms, etc.)
│
├── components/                   # Reusable React components
│   ├── Header.tsx               # Navigation header
│   ├── Hero.tsx                 # Main hero section
│   ├── ProblemSolution.tsx      # Problem/solution section
│   ├── Features.tsx             # Features grid
│   ├── SocialProof.tsx          # Testimonials
│   ├── HowItWorks.tsx           # 3-step process
│   ├── Waitlist.tsx             # Email signup form
│   ├── FinalCTA.tsx             # Call-to-action
│   └── Footer.tsx               # Footer
│
├── hooks/                        # Custom React hooks
│   ├── useFormSubmission.ts     # Form handling logic
│   └── useScrollReveal.ts       # Scroll animation logic
│
├── lib/                          # Utility functions & data
│   ├── data.ts                  # Features, testimonials, steps
│   └── validation.ts            # Email validation, helpers
│
├── types/                        # TypeScript type definitions
│   └── index.ts                 # Component interfaces
│
├── public/                       # Static files (images, icons)
│
├── tailwind.config.ts           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies & scripts
├── package-lock.json            # Locked dependency versions
│
├── README.md                     # Project overview
├── CUSTOMIZATION_GUIDE.md        # How to customize
├── SETUP.md                      # This file
├── CHANGELOG.md                  # Version history
└── LICENSE                       # MIT License
```

## 🛠️ Available Commands

### Development
```bash
# Start dev server (with hot reload)
npm run dev
```

### Production
```bash
# Build for production
npm run build

# Start production server
npm start
```

### Code Quality
```bash
# Run ESLint to check code
npm run lint

# Fix ESLint issues automatically
npm run lint -- --fix
```

## 🔧 Configuration Files Explained

### `package.json`
- Lists all dependencies your project needs
- Defines npm scripts (dev, build, start)
- Contains project metadata (name, version, author)

### `tsconfig.json`
- TypeScript compilation settings
- Path aliases (@ = root directory)
- Strict mode for type safety

### `tailwind.config.ts`
- Tailwind CSS configuration
- Custom colors, fonts, spacing
- Animation definitions
- Responsive breakpoints

### `postcss.config.js`
- PostCSS configuration
- Enables Tailwind CSS processing
- Autoprefixer for browser compatibility

### `next.config.js`
- Next.js-specific settings
- Build optimization options
- Environment variables

## 🌱 First-Time Customization

After installation, here's what to change first:

### 1. Update Site Metadata

Edit **`app/layout.tsx`**:
```typescript
export const metadata: Metadata = {
  title: 'Your Product Name - Your Tagline',
  description: 'Your product description',
  // ... etc
};
```

### 2. Change Brand Colors

Edit **`tailwind.config.ts`**:
```typescript
colors: {
  primary: '#YOUR_COLOR',
  'primary-dark': '#YOUR_DARK_COLOR',
}
```

### 3. Update Main Content

Edit **`lib/data.ts`**:
```typescript
export const features: Feature[] = [
  {
    title: 'Your Feature',
    description: 'What it does',
    icon: '✨',
  },
  // ... more features
];
```

For detailed customization, see **CUSTOMIZATION_GUIDE.md**.

## 🧪 Testing

### Test Responsive Design

1. Open DevTools: `F12` (Windows) or `Cmd+Option+I` (Mac)
2. Click "Toggle device toolbar" icon
3. Test on different screen sizes:
   - Mobile: 390px
   - Tablet: 768px
   - Desktop: 1200px

### Test Form Validation

1. Go to email input field
2. Try: `invalid-email` → Should show error
3. Try: (empty) → Should show "Please enter email"
4. Try: `valid@email.com` → Should show success

### Test Accessibility

1. Install [WAVE extension](https://wave.webaim.org/extension/)
2. Run it on your page
3. Should see zero errors

## 🐛 Troubleshooting

### Issue: "npm: command not found"
**Solution:** Install [Node.js](https://nodejs.org)

### Issue: Port 3000 already in use
**Solution:** 
```bash
# Use a different port
npm run dev -- -p 3001
```

### Issue: "Cannot find module" error
**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Tailwind CSS not applying
**Solution:**
1. Check `tailwind.config.ts` paths are correct
2. Restart dev server: `Ctrl+C` then `npm run dev`
3. Clear browser cache: `Ctrl+Shift+Delete`

### Issue: TypeScript errors
**Solution:**
```bash
# Check TypeScript compilation
npx tsc --noEmit

# Fix formatting issues
npm run lint -- --fix
```

## 📈 Performance Tips

### Optimize Images
- Use Next.js Image component
- Keep images under 100KB
- Use WebP format when possible

### Reduce Bundle Size
```bash
# Analyze bundle
npm run build
npm install --save-dev @next/bundle-analyzer
```

### Enable Caching
Update `next.config.js`:
```javascript
module.exports = {
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
```

## 🚀 Deployment

### Option 1: Vercel (Recommended - Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Netlify

```bash
# Build first
npm run build

# Deploy using Netlify drag-and-drop
# Upload the .next folder
```

### Option 3: Docker

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t taskflow .
docker run -p 3000:3000 taskflow
```

## 📚 Next Steps

1. ✅ Installation complete
2. 📝 Customize content (see CUSTOMIZATION_GUIDE.md)
3. 🎨 Update colors and branding
4. 📧 Connect email service
5. 🧪 Test on mobile devices
6. 🚀 Deploy to production

## 💡 Pro Tips

- **Auto-format code:** Install Prettier extension in VS Code
- **TypeScript help:** Hover over code to see type hints
- **Component testing:** Make changes and see live updates (hot reload)
- **Debug mode:** Add `debugger;` in code and use DevTools

## 🆘 Need Help?

1. Check **README.md** for overview
2. See **CUSTOMIZATION_GUIDE.md** for specific changes
3. Review component code comments
4. Check [Next.js Docs](https://nextjs.org/docs)
5. Check [TypeScript Docs](https://www.typescriptlang.org/docs/)

---

**You're all set!** Start customizing and building. Happy coding! 🎉
