# Build Notes

## Directory Name Issue

The project directory contains a "?" character (`Cooking?`), which causes issues with Vite/Astro's build process.

**Error:** `The project root contains the "?" character (/Users/ianschuepbach/Documents/Cooking?/turkey-day-2025), which may not work when running Vite.`

### Solutions:

**Option 1: Rename the directory** (Recommended)
```bash
cd /Users/ianschuepbach/Documents/
mv "Cooking?" "Cooking"
cd Cooking/turkey-day-2025
```

**Option 2: Use a symbolic link**
```bash
ln -s "/Users/ianschuepbach/Documents/Cooking?/turkey-day-2025" ~/turkey-day-2025
cd ~/turkey-day-2025
npm run build
```

**Option 3: Work directly in the ebook-site branch**
The Astro site is fully configured and ready. Once the directory is renamed or a symlink is created, the build will complete successfully.

## Deployment

After resolving the directory name issue:

1. Test the build:
```bash
npm run build
```

2. Test locally:
```bash
npm run dev
```

3. Commit and push to trigger GitHub Actions deployment:
```bash
git add .
git commit -m "Add Astro ebook site"
git push -u origin ebook-site
```

4. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - The site will deploy automatically on push to ebook-site branch

## What's Been Built

✅ Complete Astro site structure
✅ Rustic-modern theme (pale tan, golden accents, fall colors)
✅ Google Fonts (Spectral + Playfair Display)
✅ Responsive navigation
✅ All content migrated from markdown to Astro pages:
   - Landing page (index.astro)
   - Overview page
   - Timeline page
   - Menu page
   - Thursday prep page
   - Friday feast page
   - Leftovers pie page
   - Print page (single-page PDF-ready version)
✅ Reusable components (Checklist, TimelineItem, Navigation)
✅ Print layout with print/download button
✅ GitHub Actions workflow for deployment

## File Structure

```
turkey-day-2025/
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PrintLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── overview.astro
│   │   ├── timeline.astro
│   │   ├── menu.astro
│   │   ├── thursday.astro
│   │   ├── friday.astro
│   │   ├── leftovers.astro
│   │   └── print.astro
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── Checklist.astro
│   │   └── TimelineItem.astro
│   └── styles/
│       └── global.css
├── public/
│   └── images/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── .gitignore
```

## Next Steps

1. Resolve the directory name issue
2. Test build: `npm run build`
3. Test dev server: `npm run dev` (visit http://localhost:4321)
4. Commit changes
5. Push to GitHub
6. Enable GitHub Pages
7. Site will be live at: `https://[username].github.io/turkey-day-2025/`

## Configuration Notes

**astro.config.mjs** needs to be updated with your GitHub username:
- Change `site: 'https://YOUR_USERNAME.github.io'` to your actual GitHub username
- The `base: '/turkey-day-2025'` should match your repository name

