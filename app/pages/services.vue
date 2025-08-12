<template>
  <div class="page-wrapper">
    <UContainer>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div class="lg:col-span-8 order-2">
          Main content for seo
        </div>
        <div class="lg:col-span-4 order-1">
          <services-sidebar />
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script>
import servicesSidebar from '@/components/servicesSidebar.vue'

export default {
  name: 'Services',
  components: {
    servicesSidebar,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.page-wrapper {
  padding: 20px;
}
</style>
