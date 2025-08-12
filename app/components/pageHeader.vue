<template>
  <div class="pageTitle">
    <UContainer>
      <div class="flex justify-between items-center">
        <div>
          <h1>{{ title }}</h1>
        </div>
        <div v-if="breadcrumb" class="breadcrumb-wrapper">
          <UBreadcrumb :links="breadcrumbLinks" />
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
interface BreadcrumbItem {
  label: string
  url?: string
}

interface Props {
  title: string
  breadcrumb?: BreadcrumbItem[]
}

const props = defineProps<Props>()

// Convert breadcrumb to Nuxt UI format
const breadcrumbLinks = computed(() => {
  if (!props.breadcrumb) return []
  
  const links = [
    { label: 'Home', to: '/' }
  ]
  
  props.breadcrumb.forEach(item => {
    if (item.url) {
      links.push({ label: item.label, to: item.url })
    } else {
      links.push({ label: item.label })
    }
  })
  
  return links
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';

.pageTitle {
  background: #f5f5f5;
  color: black;
  padding: 30px 0;
  border-bottom: 5px solid $dblue;

  h1 {
    font-size: 24px;
  }
  
  .breadcrumb-wrapper {
    @include responsive('md') {
      display: none;
    }
  }
}
</style>
