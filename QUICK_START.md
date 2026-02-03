# 🚀 Quick Start Guide - TaskFlow Landing Page Template

**Everything you need in 5 minutes.**

---

## Installation (2 minutes)

```bash
# 1. Extract or clone
cd taskflow

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open browser
# → http://localhost:3000
```

That's it! You should see the landing page running.

---

## Customization (3 minutes)

### Change Colors
Edit **`tailwind.config.ts`**:
```typescript
colors: {
  primary: '#YOUR_COLOR',        // Change this
  'primary-dark': '#DARKER_COLOR', // And this
}
```

### Update Headline
Edit **`components/Hero.tsx`**:
```typescript
<h1>Your New Headline Here</h1>
```

### Change Features
Edit **`lib/data.ts`**:
```typescript
export const features = [
  { title: 'Your Feature', description: '...', icon: '✨' },
  // More features
];
```

### Update Testimonials
Edit **`lib/data.ts`**:
```typescript
export const testimonials = [
  { author: 'Name', role: 'Role', content: 'Quote...', avatar: 'AB' },
];
```

---

## Ready to Deploy?

### Vercel (Recommended - Free)
```bash
npm i -g vercel
vercel
# Follow prompts, done in 2 minutes!
```

### Netlify
```bash
npm run build
# Upload `.next` folder to Netlify
```

---

## Need More Help?

- **Setup Details:** Read `SETUP.md`
- **Full Customization:** Read `CUSTOMIZATION_GUIDE.md`
- **What's Included:** Read `PACKAGE_CONTENTS.md`
- **Code Questions:** Check component comments

---

## Pro Tips

✅ **Change all copy fast:** Edit `lib/data.ts` for features, testimonials, and steps

✅ **Add new color scheme:** Update one file (`tailwind.config.ts`) and it changes everywhere

✅ **Test on mobile:** Open DevTools (F12), toggle device toolbar

✅ **Connect email:** Follow guide in `CUSTOMIZATION_GUIDE.md` → "Form Handling"

✅ **Speed it up:** Deploy to Vercel for automatic optimization

---

## Your Next Steps

1. ✅ Install & start (you're here!)
2. 📝 Customize copy (colors, headline, features)
3. 📧 Connect email service (Mailchimp/Resend/SendGrid)
4. 🧪 Test on mobile
5. 🚀 Deploy to Vercel

---

**Questions?** See full docs in README.md or CUSTOMIZATION_GUIDE.md

**Ready to launch?** You've got everything you need! 🎉
