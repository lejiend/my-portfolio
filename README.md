# DevOps Engineer Portfolio

A professional, responsive portfolio website built with **React**, **React Router**, **Vite**, and served with a **Node.js HTTP server**. No Express.js, Docker, or Kubernetes required!

## 🚀 Features

- **Client-Side Routing** - React Router for seamless navigation between pages
- **Responsive Design** - Mobile-first approach works on all devices
- **Modern UI** - Dark theme with gradient accents and smooth animations
- **Static Site** - Built with Vite for fast performance and optimized bundle
- **Node.js Server** - Simple HTTP server using native Node.js modules
- **SEO Ready** - Proper HTML structure and semantic markup
- **Fast** - Vite's instant HMR during development, optimized production build

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navigation.jsx
│   │   ├── Navigation.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   ├── NotFound.jsx
│   │   └── *.css files
│   ├── App.jsx             # Main app with routing
│   ├── App.css
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets (optional)
├── dist/                   # Built output (generated)
├── index.html              # HTML entry point
├── vite.config.js          # Vite configuration
├── server.js               # Node.js HTTP server
├── package.json
├── .gitignore
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 14.x or higher
- npm or yarn

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Development Server
Run the Vite dev server with hot module replacement:
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser.

### Step 3: Build for Production
Create an optimized production build:
```bash
npm run build
```
This generates a `dist` folder with all static files.

### Step 4: Serve Production Build
Run the Node.js HTTP server to serve the built files:
```bash
npm run serve
```
Or directly:
```bash
node server.js
```

## 📝 Customization

### Update Your Information

Edit the following files to personalize your portfolio:

#### Home Page (`src/pages/Home.jsx`)
- Hero section title and subtitle
- Quick stats numbers
- Core expertise areas

#### About Page (`src/pages/About.jsx`)
- Professional summary
- Values and achievements
- Journey and milestones

#### Skills Page (`src/pages/Skills.jsx`)
- Add/remove skill categories in the `skillCategories` array
- Update proficiency levels
- Add your certifications

#### Projects Page (`src/pages/Projects.jsx`)
- Update the `projects` array with your projects
- Modify project descriptions, tags, and impact statements

#### Experience Page (`src/pages/Experience.jsx`)
- Update career history in the `experiences` array
- Add your responsibilities and achievements
- Update skill proficiency levels

#### Contact Page (`src/pages/Contact.jsx`)
- Replace placeholder email and social links
- Update FAQ questions and answers

### Customize Colors

Edit `src/index.css` to change the color scheme:
```css
:root {
  --primary-color: #0066cc;      /* Main blue */
  --secondary-color: #00a8e8;    /* Light blue */
  --dark-bg: #0a0e27;            /* Dark background */
  --dark-card: #1a1f3a;          /* Card background */
  --accent: #ff6b35;             /* Orange accent */
}
```

### Update Navigation Links

Edit `src/components/Navigation.jsx` to add or modify navigation items.

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel automatically detects Vite and builds your project
5. Your site is live!

### Deploy to Netlify
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

### Deploy to AWS S3 + CloudFront
```bash
# Build the project
npm run build

# Upload dist folder to S3
aws s3 sync dist/ s3://your-bucket-name

# Create CloudFront distribution for the S3 bucket
```

### Deploy to DigitalOcean App Platform
1. Push to GitHub
2. Connect your GitHub repo to DigitalOcean
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy!

### Self-Hosted on Your Server
```bash
# Build the project
npm run build

# Upload to your server
scp -r dist/* user@your-server:/var/www/portfolio/

# Run the Node.js server
ssh user@your-server
cd /var/www/portfolio
node /path/to/server.js &
```

## 📜 Available Scripts

```bash
# Start Vite dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run production server with Node.js
npm run serve
```

## 🎨 Styling

The portfolio uses:
- **CSS Grid & Flexbox** - Responsive layouts
- **CSS Custom Properties (Variables)** - Easy theme customization
- **CSS Animations** - Smooth transitions and effects
- **Mobile-First Approach** - Responsive breakpoints at 768px and below

### Responsive Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## ⚙️ How It Works

1. **Development Phase**
   - Vite provides instant hot module replacement (HMR)
   - React components are reloaded instantly when you make changes
   - Fast development experience with Vite's ES modules

2. **Build Phase**
   - `npm run build` compiles React + JSX to optimized JavaScript
   - Vite minifies CSS, JavaScript, and assets
   - Generates `dist` folder with static files ready for deployment

3. **Production Phase**
   - Simple Node.js HTTP server (`server.js`) serves static files
   - Implements client-side routing fallback (all routes serve `index.html`)
   - Proper MIME types and cache headers for optimal performance
   - Graceful shutdown on SIGTERM

## 🔒 Environment Variables

Create a `.env` file for production:
```
PORT=3000
NODE_ENV=production
```

## 📊 Performance Tips

1. **Image Optimization** - Use optimized image formats (WebP, AVIF)
2. **Minification** - Vite automatically minifies in production
3. **Code Splitting** - Vite automatically splits code for faster loading
4. **Lazy Loading** - Consider lazy-loading components for better performance
5. **Caching** - The server implements proper cache headers

## 🚀 Deployment Checklist

- [ ] Update all personal information
- [ ] Add your projects and achievements
- [ ] Replace email and social links
- [ ] Update resume/CV links
- [ ] Test all navigation routes
- [ ] Test responsive design on mobile
- [ ] Build and test production build locally
- [ ] Check for console errors
- [ ] Deploy to production
- [ ] Test live site functionality

## 🤝 Customization for DevOps

To make this portfolio DevOps-focused, ensure it includes:
- ✅ Infrastructure projects (Kubernetes, Docker)
- ✅ CI/CD pipeline implementations
- ✅ Cloud infrastructure experience
- ✅ Monitoring and observability setups
- ✅ Infrastructure as Code examples
- ✅ Security and compliance achievements
- ✅ Cost optimization results
- ✅ Team leadership and mentoring

## 📚 Technology Stack

- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Vite** - Build tool and dev server
- **Node.js** - Server runtime
- **CSS3** - Styling and animations
- **JavaScript ES6+** - Modern JavaScript

## 📄 License

MIT - Feel free to use this template for your portfolio

## ❓ Troubleshooting

### Port Already in Use
```bash
# Use a different port
PORT=3001 npm run serve
```

### Dependencies Not Installed
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf dist node_modules
npm install
npm run build
```

### Styling Issues
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check browser DevTools console for CSS errors
- Verify CSS file paths in components

### Routes Not Working After Deployment
- Ensure your server falls back to `index.html` for all routes (Node.js server does this)
- Check that your deployment platform supports SPA (Single Page Application) routing

## 🎯 Next Steps

1. Clone or fork this repository
2. Customize with your information
3. Build the project: `npm run build`
4. Test locally: `npm run serve`
5. Deploy to your preferred platform
6. Share your portfolio with the world!

---

**Happy building! 🚀**

For support or issues, check the Vite docs: https://vitejs.dev
