# OTH Domain Placeholder

A professional domain placeholder website for OvertimeHosting, built with Next.js 14 and shadcn/ui components.

## Features

- **Modern Black & White Design**: Clean, professional aesthetic
- **Responsive Layout**: Works perfectly on all devices
- **Dynamic Domain Display**: Shows the current domain automatically
- **Copy Domain Feature**: One-click domain copying
- **Professional Messaging**: Clear ownership and contact information
- **SEO Optimized**: Proper meta tags and structure

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
oth-domain-placeholder/
├── app/
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.js         # Root layout with metadata
│   └── page.js           # Main domain placeholder page
├── components/
│   └── ui/               # shadcn/ui components
│       ├── badge.js
│       ├── button.js
│       └── card.js
├── lib/
│   └── utils.js          # Utility functions
├── package.json
├── tailwind.config.js    # Tailwind configuration (black/white theme)
├── next.config.js
└── postcss.config.js
```

## Customization

- **Domain Name**: Automatically detects the current domain, or edit the `domainName` state in `app/page.js`
- **Contact Email**: Update the email in the contact button (`domains@overtimehosting.com`)
- **Company Website**: Update the website URL in the "Visit Website" button
- **Styling**: All colors and design are in the Tailwind config and component files

## Deployment

This is a standard Next.js application and can be deployed to:
- Vercel (recommended)
- Netlify
- Any Node.js hosting provider
- Static export for traditional web servers

## Tech Stack

- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Lucide React** - Beautiful icons
- **Black & White Theme** - Professional monochrome design

## License

© 2025 OvertimeHosting. All rights reserved.
