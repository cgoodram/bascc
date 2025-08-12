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
import { useServicesStore } from '~/stores/services'

// Get current route
const route = useRoute()

// Use Pinia store
const servicesStore = useServicesStore()

// Convert services to navigation links format
const serviceLinks = computed(() => {
  return servicesStore.services.map(service => ({
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
