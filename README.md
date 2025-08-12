# BASCC

## Build Setup

```bash
# install dependencies
$ npm install

# Development Mode (Client-side rendering)
$ npm run dev          # Standard development server
$ npm run dev:spa      # SPA mode for development

# Production Builds
$ npm run build        # Universal SSR build
$ npm run build:static # Static site generation (SSG)
$ npm run generate     # Legacy generate command

# Preview and Testing
$ npm run preview      # Preview production build
$ npm run start        # Start production server
```

## Rendering Modes

### Development
- **Client-side rendering (SPA)** for faster development
- Hot reload and instant updates
- No server-side rendering overhead

### Production
- **Static Site Generation (SSG)** for optimal performance
- Pre-rendered HTML for better SEO
- Fast loading times

## Environment Configuration

The site automatically detects the environment:
- **Development**: `NODE_ENV=development` → Client-side rendering
- **Production**: `NODE_ENV=production` → Server-side rendering ready for SSG

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
