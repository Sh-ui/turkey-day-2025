# Turkey Day 2025 - Ebook Site

A beautiful, web-based ebook built with Astro, featuring a rustic-modern design and deployable to GitHub Pages.

## 🎨 Design

- **Color Palette**: Pale tan backgrounds (#F5F1E8), golden accents (#D4A574), dark fall colors (burgundy & forest green)
- **Typography**: Spectral (body text) + Playfair Display (headers)
- **Style**: Clean, minimal, inspired by Serious Eats and Medium
- **Responsive**: Mobile-friendly navigation and layouts

## 📚 Content

The site contains:
- **Landing Page**: Hero section with overview and navigation cards
- **Overview**: Quick summary, TLDR, and philosophy
- **Timeline**: Complete 6-day countdown schedule
- **Menu**: All dishes with ingredient checklists
- **Thursday**: Thanksgiving Day prep and fusion dinner
- **Friday**: Turkey Day roasting and feast
- **Leftovers**: Leftovers Pie assembly guide
- **Print Version**: Single-page printable/downloadable format

## 🚀 Getting Started

### Prerequisites
- Node.js v18+ (v23.9.0 recommended via nvm)
- npm

### Installation

```bash
# If using nvm to manage Node versions
nvm use 23.9.0

# Install dependencies
npm install
```

### Development

```bash
# Start dev server at http://localhost:4321
npm run dev
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment to GitHub Pages

### Option 1: Automatic (GitHub Actions)

The repository includes a GitHub Actions workflow that automatically deploys on push to the `ebook-site` branch.

**Steps:**
1. Commit your changes
2. Push to the `ebook-site` branch:
   ```bash
   git add .
   git commit -m "Add Astro ebook site"
   git push -u origin ebook-site
   ```
3. Enable GitHub Pages in repository Settings → Pages → Source: GitHub Actions
4. Site will deploy automatically

### Option 2: Manual

```bash
npm run build
# Deploy the `dist/` directory to your hosting provider
```

## ⚙️ Configuration

### Update GitHub Pages URL

Edit `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',  // Update with your GitHub username
  base: '/turkey-day-2025',                  // Update if repo name is different
  // ...
});
```

## 📁 Project Structure

```
src/
├── layouts/
│   ├── BaseLayout.astro       # Main site layout
│   └── PrintLayout.astro      # Print-optimized layout
├── pages/
│   ├── index.astro            # Landing page
│   ├── overview.astro         # Overview & philosophy
│   ├── timeline.astro         # 6-day timeline
│   ├── menu.astro             # Complete menu
│   ├── thursday.astro         # Thursday prep
│   ├── friday.astro           # Friday feast
│   ├── leftovers.astro        # Leftovers pie
│   └── print.astro            # Single-page print version
├── components/
│   ├── Navigation.astro       # Chapter navigation
│   ├── Checklist.astro        # Ingredient checklist
│   └── TimelineItem.astro     # Timeline entry
└── styles/
    └── global.css             # Rustic-modern theme
```

## 🎯 Features

- **Responsive Navigation**: Sticky header with mobile hamburger menu
- **Chapter Navigation**: Breadcrumb-style navigation between sections
- **Print Version**: Optimized single-page layout for PDF export
- **Reusable Components**: Checklists, timeline items, and navigation
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Fast**: Static site generation for optimal performance

## 🐛 Known Issues

### Directory Name Issue

If your project directory contains a "?" character (e.g., `Cooking?`), Vite/Astro may have issues building. See [BUILD-NOTES.md](BUILD-NOTES.md) for solutions.

## 📝 Content Updates

To update content:
1. Edit the relevant `.astro` file in `src/pages/`
2. Run `npm run dev` to preview changes
3. Commit and push to trigger automatic deployment

## 🎨 Styling

Global styles are in `src/styles/global.css`. The theme uses CSS variables for easy customization:

```css
:root {
  --bg-tan: #F5F1E8;
  --accent-gold: #D4A574;
  --accent-burgundy: #6B2C2C;
  --accent-forest: #3A4A3D;
  --text-dark: #2C1810;
  /* ... */
}
```

## 📄 License

This is a personal cooking project. Content is original unless otherwise noted.

## 🙏 Acknowledgments

- Recipe inspiration: Serious Eats, America's Test Kitchen
- Built with: [Astro](https://astro.build)
- Fonts: [Google Fonts](https://fonts.google.com) (Spectral & Playfair Display)

