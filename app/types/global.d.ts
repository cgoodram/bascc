// Global type declarations for the BASCC project

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Declare global variables if needed
declare global {
  // Add any global types here
}

export {}
