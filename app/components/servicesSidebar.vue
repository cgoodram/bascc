<template>
  <div class="sidebar-wrapper">
    <UCard>
      <template #header>
        <h3 class="text-lg font-semibold">Services</h3>
      </template>
      
      <UVerticalNavigation :links="serviceLinks" />
    </UCard>
  </div>
</template>

<script setup lang="ts">
interface Service {
  label: string
  page: string
}

// Fetch services data
const { data: services } = await useFetch('/api/services', {
  default: () => [
    { label: 'Cleanroom Validation', page: '/services/cleanroom-validation' },
    { label: 'DOP Filter Testing', page: '/services/dop-filter-testing' },
    { label: 'Air Balancing', page: '/services/air-balancing' },
    { label: 'HVAC Commissioning', page: '/services/hvac-commissioning' }
  ]
})

// Get current route
const route = useRoute()

// Convert services to navigation links format
const serviceLinks = computed(() => {
  if (!services.value) return []
  
  return services.value.map(service => ({
    label: service.label,
    to: service.page,
    active: route.path === service.page
  }))
})
</script>

<style lang="scss" scoped>
.sidebar-wrapper {
  .u-card {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  }
}
</style>
