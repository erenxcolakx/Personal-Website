# Project Structure

## Directory Organization

```
/
├── .git/           # Git version control
├── .kiro/          # Kiro AI assistant configuration
├── .vscode/        # VS Code workspace settings
└── public/         # Static assets and media
    ├── images/     # Technology logos, project screenshots, personal photos
    ├── *.svg       # Brand icons (Next.js, Vercel, custom icons)
    └── favicon.ico # Site favicon (likely)
```

## Asset Categories

### `/public/images/`
- **Technology Logos**: Programming languages, frameworks, tools (react.webp, nextjs.png, python.png, etc.)
- **Project Assets**: Screenshots and demos (weather.gif, tindog.png, smarttestai.png, etc.)
- **Personal Branding**: Profile photo (Me.jpg), institutional logos (Marmara_Üniversitesi_logo.png)
- **Social Icons**: Platform logos for links (github.png, linkedin.png, instagram.png, kaggle.png)

### `/public/` (root)
- **Brand SVGs**: Core branding elements (next.svg, vercel.svg, globe.svg, window.svg, file.svg)

## Conventions

### File Naming
- Technology assets use lowercase with extensions: `nextjs.png`, `react.webp`
- Project names use descriptive lowercase: `tindog.png`, `smarttestai.png`
- Personal assets use descriptive names: `Me.jpg`
- SVG icons use descriptive lowercase: `globe.svg`, `window.svg`

### Asset Organization
- All static assets in `/public` for Next.js optimization
- Technology showcase images grouped in `/images` subdirectory
- Brand/UI icons kept in public root for easy reference
- Mixed file formats (PNG, WebP, GIF, SVG) optimized per use case