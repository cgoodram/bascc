// Environment configuration utility
export const config = {
  // Environment detection
  isDev: process.env.NODE_ENV === 'development',
  isProd: process.env.NODE_ENV === 'production',
  
  // Rendering mode
  isSSR: process.env.NODE_ENV === 'production',
  isSPA: process.env.NODE_ENV === 'development',
  
  // API endpoints (if needed)
  apiBase: process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000/api' 
    : 'https://bascc.co.uk/api',
  
  // Feature flags
  features: {
    devTools: process.env.NODE_ENV === 'development',
    hotReload: process.env.NODE_ENV === 'development',
    analytics: process.env.NODE_ENV === 'production',
  }
}

// Helper functions
export function isDevelopment(): boolean {
  return config.isDev
}

export function isProduction(): boolean {
  return config.isProd
}

export function isClientSide(): boolean {
  return config.isSPA
}

export function isServerSide(): boolean {
  return config.isSSR
}
