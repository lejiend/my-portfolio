# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies (Already Done!)
```bash
npm install
```

### 2. Development Mode
Run the development server with hot reload:
```bash
npm run dev
```
Visit: http://localhost:3000

### 3. Production Build
Build for production:
```bash
npm run build
```

Serve the production build:
```bash
npm run serve
```

---

## 📝 What's Included

### Pages with React Router
- **Home** (`/`) - Landing page with hero section
- **About** (`/about`) - Professional background
- **Skills** (`/skills`) - Technical expertise breakdown
- **Projects** (`/projects`) - Featured work showcase
- **Experience** (`/experience`) - Career timeline
- **Contact** (`/contact`) - Contact form & social links

### Components
- **Navigation** - Sticky navbar with mobile menu
- **Footer** - Site footer with links and social media

### Technologies
- React 18
- React Router v6 (client-side routing)
- Vite (build tool)
- Native Node.js HTTP server (no Express)
- CSS3 with custom properties

---

## ✏️ Customize Your Portfolio

### 1. Update Personal Information
Edit files in `src/pages/`:
- `Home.jsx` - Your headline and intro
- `About.jsx` - Your story
- `Skills.jsx` - Your technical skills
- `Projects.jsx` - Your portfolio projects
- `Experience.jsx` - Your work history
- `Contact.jsx` - Your contact information

### 2. Change Colors
Edit `src/index.css` - CSS variables at the top:
```css
:root {
  --primary-color: #0066cc;
  --secondary-color: #00a8e8;
  --accent: #ff6b35;
  /* ... more colors */
}
```

### 3. Update Social Links
In `src/components/Footer.jsx` and `src/pages/Contact.jsx`:
- Replace email addresses
- Update LinkedIn profile URL
- Update GitHub profile URL
- Update Twitter handle

---

## 🌐 Deployment Options

### Vercel (Easiest)
1. Push to GitHub
2. Go to vercel.com
3. Import your repo
4. Done! ✨

### Netlify
1. Push to GitHub
2. Go to netlify.com
3. Connect repo
4. Set build: `npm run build`, output: `dist`

### AWS S3 + CloudFront
```bash
npm run build
aws s3 sync dist/ s3://your-bucket-name
```

### Self-Hosted Server
```bash
npm run build
scp -r dist/* user@server:/var/www/portfolio
ssh user@server
cd /var/www/portfolio
node /path/to/server.js &
```

---

## 📊 Project Statistics

- **React Components**: 2 (Navigation, Footer)
- **Pages**: 6 (Home, About, Skills, Projects, Experience, Contact)
- **Routes**: 6 + 404 fallback
- **Build Size**: ~190 KB JS, ~22 KB CSS (gzipped)
- **Dev Dependencies**: Vite, Terser, React plugin

---

## 🎯 Key Features

✅ **Client-Side Routing** - No page reloads, smooth navigation
✅ **Responsive Design** - Mobile-first, works on all devices
✅ **Dark Theme** - Modern dark UI with gradient accents
✅ **Fast Performance** - Vite + optimized production build
✅ **No Backend Required** - Fully static, can deploy anywhere
✅ **SEO Ready** - Proper HTML structure and meta tags
✅ **Production Ready** - Includes proper Node.js HTTP server

---

## 🛠️ Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Serve production build
npm run serve

# Check dependencies
npm list

# Update packages
npm update
```

---

## 📞 Support

For issues or questions:
- Check the README.md for detailed documentation
- Review React Router docs: https://reactrouter.com
- Check Vite docs: https://vitejs.dev
- See Node.js HTTP module: https://nodejs.org/api/http.html

---

**You're all set! Happy building! 🚀**
