#!/usr/bin/env node

/**
 * Development Setup Script
 * Helps configure the environment for different development modes
 */

const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(process.cwd(), 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

console.log('🚀 BASCC Development Setup\n');

console.log('Available commands:');
console.log('  npm run dev          - Development server (SPA mode)');
console.log('  npm run dev:spa      - Explicit SPA mode');
console.log('  npm run build        - Production build (SSR)');
console.log('  npm run build:static - Static site generation\n');

console.log('Current configuration:');
console.log(`  - SSR: ${process.env.NODE_ENV === 'production' ? 'Enabled' : 'Disabled (SPA)'}`);
console.log(`  - Environment: ${process.env.NODE_ENV || 'development'}`);
console.log(`  - Mode: ${process.env.NODE_ENV === 'production' ? 'Production' : 'Development'}\n`);

console.log('For development (client-side rendering):');
console.log('  npm run dev\n');

console.log('For production (static generation):');
console.log('  npm run build:static\n');

console.log('💡 Tip: The site automatically detects the environment and switches rendering modes accordingly.');
