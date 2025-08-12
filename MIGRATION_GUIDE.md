# Nuxt 4 Migration Guide

## ✅ Completed Changes

### 1. Package Dependencies
- Updated to `nuxt@^4.0.0`
- Replaced Bootstrap Vue with `@nuxt/ui`
- Updated all packages to latest versions
- Added TypeScript support
- Replaced Vuelidate with Vee-validate + Yup
- **Added Pinia for state management**

### 2. Configuration Files
- Created `nuxt.config.ts` (replaced `nuxt.config.js`)
- Added `tsconfig.json` for TypeScript
- Updated `.eslintrc.js` for Nuxt 4 + TypeScript
- Created `app/app.vue` entry point
- **Added Pinia module to Nuxt config**

### 3. Directory Structure (Nuxt 4 Standard)
- ✅ **Restructured to Nuxt 4 standard**: All app files moved to `app/` directory
- ✅ **Static assets**: Renamed `static/` to `public/` (Nuxt 4 standard)
- ✅ **Server directory**: `server/` remains at root (correct for Nuxt 4)
- ✅ **App files**: `app.vue`, `components/`, `layouts/`, `pages/`, `plugins/`, `middleware/`, `assets/`, `store/` all moved to `app/`

### 4. Layout & Components
- Updated `app/layouts/default.vue` to use `<NuxtPage />`
- Converted `app/components/headAndNav.vue` to Nuxt UI + Composition API
- Converted `app/components/footer.vue` to Nuxt UI + Composition API
- **All components now use Pinia stores instead of Vuex**

### 5. State Management Migration
- ✅ **Vuex → Pinia**: Complete migration to modern state management
- ✅ **Services Store**: `app/stores/services.ts` with TypeScript interfaces
- ✅ **News Store**: `app/stores/news.ts` with TypeScript interfaces
- ✅ **Store Integration**: All components updated to use Pinia stores
- ✅ **Type Safety**: Full TypeScript support for store data

## 🔄 Still Need to Update

### 1. Page Components
All pages in the `app/pages/` directory need to be updated:
- Convert from Options API to Composition API
- Replace `asyncData`/`fetch` with `useAsyncData`/`useFetch`
- Update any remaining Bootstrap Vue components to Nuxt UI
- Replace `this.$router` with `navigateTo()`
- **Update any remaining `this.$store` references to use Pinia stores**

### 2. Plugin Updates
- Update `app/plugins/owl.js` for Vue 3 compatibility
- Remove `app/plugins/vuelidate` (replaced by Vee-validate)
- Update any other plugins for Vue 3

### 3. Dynamic Route Updates
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

### State Management
```vue
<!-- Before (Vuex) -->
<script>
export default {
  computed: {
    services() {
      return this.$store.state.services
    }
  }
}
</script>

<!-- After (Pinia) -->
<script setup lang="ts">
import { useServicesStore } from '~/stores'

const servicesStore = useServicesStore()
const services = computed(() => servicesStore.services)
</script>
```

## 📚 Resources

- [Nuxt 4 Documentation](https://nuxt.com/docs)
- [Nuxt UI Components](https://ui.nuxt.com/)
- [Vue 3 Migration Guide](https://vuejs.org/guide/migration/introduction.html)
- [Vee-validate Documentation](https://vee-validate.logaretm.com/v4/)
- [Pinia Documentation](https://pinia.vuejs.org/)

## ⚠️ Common Issues

1. **Component Auto-imports**: Nuxt 4 auto-imports components, no need for manual imports
2. **TypeScript Errors**: Run `npm run typecheck` to identify type issues
3. **Missing Dependencies**: Some packages may need Vue 3 compatible versions
4. **CSS Variables**: Ensure SCSS variables are properly imported
5. **Directory Structure**: All app files are now in the `app/` directory, `~` alias points to `app/`
6. **Store Usage**: Use `useServicesStore()` and `useNewsStore()` instead of `this.$store`

## 🔧 Troubleshooting

If you encounter issues:

1. Check the browser console for errors
2. Run `npm run typecheck` for TypeScript issues
3. Check Nuxt 4 migration documentation
4. Ensure all components are properly converted to Vue 3 syntax
5. Verify file paths use the new `app/` directory structure
6. **Check store imports**: Ensure you're importing from `~/stores` not `~/store`**

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
│   └── stores/           # Pinia stores (was store/)
├── server/                # Server-side code (API, middleware)
├── public/                # Static assets (was static/)
├── nuxt.config.ts         # Nuxt configuration
└── package.json           # Dependencies
```

## 🏪 Pinia Store Structure

```
app/stores/
├── index.ts              # Main store exports
├── services.ts           # Services store with TypeScript interfaces
└── news.ts              # News store with TypeScript interfaces
```
