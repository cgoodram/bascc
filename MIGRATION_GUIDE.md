# Nuxt 4 Migration Guide

## ✅ Completed Changes

### 1. Package Dependencies
- Updated to `nuxt@^4.0.0`
- Replaced Bootstrap Vue with `@nuxt/ui`
- Updated all packages to latest versions
- Added TypeScript support
- Replaced Vuelidate with Vee-validate + Yup

### 2. Configuration Files
- Created `nuxt.config.ts` (replaced `nuxt.config.js`)
- Added `tsconfig.json` for TypeScript
- Updated `.eslintrc.js` for Nuxt 4 + TypeScript
- Created `app/app.vue` entry point

### 3. Directory Structure (Nuxt 4 Standard)
- ✅ **Restructured to Nuxt 4 standard**: All app files moved to `app/` directory
- ✅ **Static assets**: Renamed `static/` to `public/` (Nuxt 4 standard)
- ✅ **Server directory**: `server/` remains at root (correct for Nuxt 4)
- ✅ **App files**: `app.vue`, `components/`, `layouts/`, `pages/`, `plugins/`, `middleware/`, `assets/`, `store/` all moved to `app/`

### 4. Layout & Components
- Updated `app/layouts/default.vue` to use `<NuxtPage />`
- Converted `app/components/headAndNav.vue` to Nuxt UI + Composition API
- Converted `app/components/footer.vue` to Nuxt UI + Composition API
- Created `server/api/services.ts` API endpoint

## 🔄 Still Need to Update

### 1. Component Migration
The following components still need to be updated from Bootstrap Vue to Nuxt UI:

- `app/components/homeSlider.vue` - Update carousel components
- `app/components/newsSnippet.vue` - Update card components  
- `app/components/pageHeader.vue` - Update layout components
- `app/components/servicesCarousel.vue` - Update carousel components
- `app/components/servicesSidebar.vue` - Update sidebar components
- `app/components/contactForm.vue` - Update form components + validation
- `app/components/cta.vue` - Update button components
- `app/components/Logo.vue` - Update image components

### 2. Page Components
All pages in the `app/pages/` directory need to be updated:
- Convert from Options API to Composition API
- Replace `asyncData`/`fetch` with `useAsyncData`/`useFetch`
- Update any Bootstrap Vue components to Nuxt UI
- Replace `this.$router` with `navigateTo()`

### 3. Store Migration
- Remove Vuex dependency
- Convert to Pinia (recommended) or use Nuxt 4 composables
- Update all `this.$store` references

### 4. Plugin Updates
- Update `app/plugins/owl.js` for Vue 3 compatibility
- Remove `app/plugins/vuelidate` (replaced by Vee-validate)
- Update any other plugins for Vue 3

### 5. Dynamic Route Updates
- Update any dynamic route files (e.g., `_id.vue` → `[id].vue`)

## 🚀 Next Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Test Basic Setup
```bash
npm run dev
```

### 3. Fix Immediate Issues
- Check console for errors
- Fix any missing imports
- Update component references

### 4. Component-by-Component Migration
- Start with simpler components
- Update one component at a time
- Test after each update

### 5. Update Pages
- Convert page components to Composition API
- Update data fetching methods
- Test routing and navigation

## 🛠️ Key Nuxt 4 Changes

### Component Syntax
```vue
<!-- Before (Vue 2) -->
<script>
export default {
  data() { return {} },
  methods: {},
  computed: {}
}
</script>

<!-- After (Vue 3) -->
<script setup lang="ts">
const data = ref({})
const methods = () => {}
const computed = computed(() => {})
</script>
```

### Data Fetching
```vue
<!-- Before (Nuxt 2) -->
<script>
export default {
  async asyncData({ $axios }) {
    const data = await $axios.$get('/api/data')
    return { data }
  }
}
</script>

<!-- After (Nuxt 4) -->
<script setup lang="ts">
const { data } = await useFetch('/api/data')
</script>
```

### Navigation
```vue
<!-- Before (Nuxt 2) -->
<script>
export default {
  methods: {
    navigate() {
      this.$router.push('/page')
    }
  }
}
</script>

<!-- After (Nuxt 4) -->
<script setup lang="ts">
const navigate = () => navigateTo('/page')
</script>
```

## 📚 Resources

- [Nuxt 4 Documentation](https://nuxt.com/docs)
- [Nuxt UI Components](https://ui.nuxt.com/)
- [Vue 3 Migration Guide](https://vuejs.org/guide/migration/introduction.html)
- [Vee-validate Documentation](https://vee-validate.logaretm.com/v4/)

## ⚠️ Common Issues

1. **Component Auto-imports**: Nuxt 4 auto-imports components, no need for manual imports
2. **TypeScript Errors**: Run `npm run typecheck` to identify type issues
3. **Missing Dependencies**: Some packages may need Vue 3 compatible versions
4. **CSS Variables**: Ensure SCSS variables are properly imported
5. **Directory Structure**: All app files are now in the `app/` directory, `~` alias points to `app/`

## 🔧 Troubleshooting

If you encounter issues:

1. Check the browser console for errors
2. Run `npm run typecheck` for TypeScript issues
3. Check Nuxt 4 migration documentation
4. Ensure all components are properly converted to Vue 3 syntax
5. Verify file paths use the new `app/` directory structure

## 📁 New Directory Structure

```
bascc/
├── app/                    # Main application directory
│   ├── app.vue           # App entry point
│   ├── components/       # Vue components
│   ├── layouts/          # Layout components
│   ├── pages/            # Page components (routing)
│   ├── plugins/          # Nuxt plugins
│   ├── middleware/       # Route middleware
│   ├── assets/           # Uncompiled assets (SCSS, etc.)
│   └── store/            # State management
├── server/                # Server-side code (API, middleware)
├── public/                # Static assets (was static/)
├── nuxt.config.ts         # Nuxt configuration
└── package.json           # Dependencies
```
