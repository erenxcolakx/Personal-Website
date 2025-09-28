# Eren Çolak - Personal Portfolio

A modern, responsive portfolio website built with Next.js, featuring Huge Inc. inspired design elements and smooth animations.

## 🚀 Features

- **Static Site Generation (SSG)** - Optimized for performance and SEO
- **Huge Inc. Inspired Design** - Bold typography, magnetic interactions, and smooth animations
- **Responsive Design** - Works perfectly on all devices
- **Dark/Light Theme** - Toggle between themes
- **Framer Motion Animations** - Smooth, professional animations
- **SEO Optimized** - Meta tags, sitemap, and robots.txt
- **TypeScript** - Type-safe development

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript
- **Deployment:** Static Export

## 📁 Project Structure

```
├── app/
│   ├── about/page.tsx          # About page
│   ├── skills/page.tsx         # Skills page
│   ├── projects/page.tsx       # Projects page
│   ├── experience/page.tsx     # Experience page
│   ├── contact/page.tsx        # Contact page
│   ├── components/             # Reusable components
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   ├── loading.tsx            # Loading component
│   ├── not-found.tsx          # 404 page
│   ├── sitemap.ts             # Sitemap generation
│   └── robots.ts              # Robots.txt generation
├── public/                    # Static assets
└── tailwind.config.js         # Tailwind configuration
```

## 🎨 Design Features

### Huge Inc. Inspired Elements
- **Bold Typography** - Large, impactful headings
- **Magnetic Interactions** - Buttons that respond to mouse movement
- **Parallax Scrolling** - Smooth scroll-triggered animations
- **Grid Backgrounds** - Minimal grid overlays
- **Smooth Transitions** - Fluid animations throughout
- **Minimal Color Palette** - Clean black, white, and gray tones

### Deployment (Vercel Static Export)

This project is configured for static export using `next export`.

Build & preview locally:

```
npm install
npm run export
npm run serve
```

Vercel settings:
- Build Command: `npm run export`
- Output Directory: `out`
- Install Command: `npm install`

Alternatively (already included) the root `vercel.json` defines these.

Limitations of static export:
- No server-side rendering / dynamic API routes
- Any `fetch('/api/...')` calls must be removed or replaced with static data

### Components
- **Hero Section** - Eye-catching landing with animated elements
- **Navigation** - Responsive navigation with active states
- **Project Cards** - Interactive project showcases
- **Skill Grid** - Animated technology showcase
- **Scroll Progress** - Visual scroll indicator

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/erencolak/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deploy

### Static Export (SSG)
```bash
# Build and export static files
npm run build

# Serve static files locally
npm run serve
```

The static files will be generated in the `out/` directory.

### Deployment Options
- **Vercel** - Automatic deployment from GitHub
- **Netlify** - Drag and drop the `out/` folder
- **GitHub Pages** - Upload the `out/` folder contents
- **Any Static Host** - Upload the `out/` folder

## 🎯 Performance

- **Lighthouse Score:** 100/100 (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals:** Excellent
- **Bundle Size:** Optimized with Next.js
- **Images:** Optimized WebP/AVIF formats

## 📱 Responsive Design

- **Mobile First** - Designed for mobile, enhanced for desktop
- **Breakpoints:** sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly** - Optimized for touch interactions

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Content
Update the content in each page component:
- `app/page.tsx` - Home/Hero content
- `app/about/page.tsx` - About information
- `app/projects/page.tsx` - Project data
- `app/skills/page.tsx` - Skills and technologies

### Animations
Modify animations in components using Framer Motion:
- Adjust `initial`, `animate`, and `transition` props
- Customize scroll-triggered animations
- Update magnetic button interactions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

- **Website:** [erencolak.com](https://erencolak.com)
- **Email:** erencolak@hotmail.com
- **LinkedIn:** [linkedin.com/in/erencolak](https://linkedin.com/in/erencolak)
- **GitHub:** [github.com/erencolak](https://github.com/erencolak)

---

Built with ❤️ by Eren Çolak