# Customization Guide

This guide walks you through customizing TaskFlow to match your brand and messaging.

## 🎨 Color Scheme

### Step 1: Update Primary Colors

Edit **`tailwind.config.ts`**:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#667eea',           // Change to your brand color
      'primary-dark': '#764ba2',    // Change to darker variant
      'neutral-light': '#f8f9fa',   // Light background
      'text-muted': '#6b7280',      // Muted text color
    },
  },
}
```

**Tips:**
- Use a color picker tool: [Coolors.co](https://coolors.co)
- Ensure adequate contrast for accessibility
- Test on both light and dark backgrounds

### Step 2: Update CSS Variables

The gradient in global styles uses CSS variables. Components reference these automatically.

## 📝 Copy & Content

### Update Headlines

Edit **`components/Hero.tsx`**:

```typescript
<h1 className="...">
  Your New Headline Here
</h1>

<p className="...">
  Your value proposition and description goes here.
</p>
```

### Update Problem/Solution

Edit **`components/ProblemSolution.tsx`**:

```typescript
// In the problems array
const problems = [
  'Your problem statement here',
  'Another pain point',
  // ... etc
]

// In the solutions array
const solutions = [
  'Your solution here',
  'Another benefit',
  // ... etc
]
```

### Update Features

Edit **`lib/data.ts`**:

```typescript
export const features: Feature[] = [
  {
    title: 'Your Feature Name',
    description: 'What this feature does and why it matters.',
    icon: '📊', // Use any emoji
  },
  // ... add more
];
```

### Update Testimonials

Edit **`lib/data.ts`**:

```typescript
export const testimonials: Testimonial[] = [
  {
    author: 'Customer Name',
    role: 'Customer Role',
    content: 'What they said about your product...',
    avatar: 'CN', // Initials
  },
  // ... add more
];
```

### Update How It Works Steps

Edit **`lib/data.ts`**:

```typescript
export const steps: Step[] = [
  {
    number: 1,
    title: 'First Step Title',
    description: 'What happens in this step.',
  },
  // ... add more
];
```

## 🏷️ Form Handling

### Test Locally

Currently, forms show success messages but don't store data. To test form validation:

1. Try entering invalid email: `test@invalid` → shows error
2. Try empty field → shows "Please enter your email"
3. Valid email → success message appears

### Connect Email Service

#### Option 1: Mailchimp

1. Get API key from [Mailchimp](https://mailchimp.com)
2. Create `app/api/subscribe/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  try {
    const response = await fetch(
      `https://us1.api.mailchimp.com/3.0/lists/LIST_ID/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
        }),
      }
    );

    if (response.ok) {
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ error: 'Failed' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
```

3. Update `hooks/useFormSubmission.ts`:

```typescript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // ... validation code ...

  setLoading(true);
  
  try {
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      setSuccess(true);
      setEmail('');
    } else {
      setError('Failed to subscribe. Please try again.');
    }
  } catch (error) {
    setError('An error occurred. Please try again.');
  } finally {
    setLoading(false);
  }
};
```

4. Add to `.env.local`:
```
MAILCHIMP_API_KEY=your_api_key_here
MAILCHIMP_LIST_ID=your_list_id_here
```

#### Option 2: Resend (Recommended)

1. Install Resend:
```bash
npm install resend
```

2. Get API key from [resend.com](https://resend.com)

3. Create `app/api/subscribe/route.ts`:

```typescript
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  try {
    await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 400 });
  }
}
```

## 🎭 Styling Customization

### Change Font

Edit **`tailwind.config.ts`**:

```typescript
theme: {
  extend: {
    fontFamily: {
      sans: [
        'Georgia', // Your font here
        'serif',
        // ... fallbacks
      ],
    },
  },
}
```

Or use Google Fonts:

1. Add to `app/layout.tsx`:

```typescript
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});
```

2. Update `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ['var(--font-poppins)', 'sans-serif'],
}
```

### Adjust Spacing

Edit **`tailwind.config.ts`**:

```typescript
theme: {
  extend: {
    spacing: {
      // Increase padding in sections
      'hero-py': '6rem', // Change hero padding
    },
  },
}
```

### Modify Animations

Edit **`tailwind.config.ts`**:

```typescript
animation: {
  'fade-in-up': 'fadeInUp 1s ease-out forwards', // Slower animation
  // ... etc
},
keyframes: {
  fadeInUp: {
    '0%': { opacity: '0', transform: 'translateY(30px)' }, // More movement
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  // ... etc
},
```

## 🔗 Links & Social

### Update Footer Links

Edit **`components/Footer.tsx`**:

```typescript
{/* Product */}
<div>
  <h3 className="...">Product</h3>
  <ul className="...">
    <li><a href="https://your-site.com/features">Features</a></li>
    <li><a href="https://your-site.com/pricing">Pricing</a></li>
    // ... add your links
  </ul>
</div>
```

### Add Social Links

Edit **`components/Footer.tsx`**:

```typescript
{/* Social */}
<div>
  <h3 className="...">Follow Us</h3>
  <ul className="...">
    <li><a href="https://twitter.com/yourhandle">Twitter</a></li>
    <li><a href="https://linkedin.com/company/yourco">LinkedIn</a></li>
    // ... add socials
  </ul>
</div>
```

## 📱 Mobile Optimization

### Test Responsive Design

1. Open DevTools (F12 or Cmd+Option+I)
2. Click "Toggle device toolbar" 
3. Test on:
   - iPhone 12 (390px)
   - iPad (768px)
   - Desktop (1200px+)

### Adjust Mobile Padding

Edit components to add responsive classes:

```typescript
// Before
<div className="px-4 py-16">

// After - smaller on mobile, larger on desktop
<div className="px-4 py-8 md:px-6 md:py-12 lg:px-8 lg:py-16">
```

## 🌙 Add Dark Mode (Advanced)

1. Update `tailwind.config.ts`:

```typescript
module.exports = {
  darkMode: 'class', // or 'media'
  // ... rest of config
}
```

2. Update components:

```typescript
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  // Content
</div>
```

3. Add toggle button in Header

## 🚀 Before Going Live

Checklist:
- [ ] Update all copy & content
- [ ] Change colors to match brand
- [ ] Connect email service
- [ ] Update footer links
- [ ] Add privacy policy link
- [ ] Test on mobile devices
- [ ] Check all forms work
- [ ] Run lighthouse audit (DevTools)
- [ ] Test accessibility (WAVE extension)
- [ ] Update favicon (public/favicon.ico)
- [ ] Update meta descriptions in `layout.tsx`

## 📊 Analytics

Add Google Analytics to **`app/layout.tsx`**:

```typescript
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_ID');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

---

Need help? Review the component code comments for more details!
