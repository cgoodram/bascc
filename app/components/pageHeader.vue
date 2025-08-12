<template>
  <div class="page-header">
    <UContainer>
      <div class="header-content">
        <UBreadcrumb :links="breadcrumbLinks" />
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  parentPage?: string
  parentTitle?: string
}

const props = defineProps<Props>()

// Build breadcrumb links
const breadcrumbLinks = computed(() => {
  const links = [
    {
      label: 'Home',
      to: '/',
      icon: 'i-heroicons-home'
    }
  ]
  
  if (props.parentPage && props.parentTitle) {
    links.push({
      label: props.parentTitle,
      to: props.parentPage
    })
  }
  
  links.push({
    label: props.title
  })
  
  return links
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.page-header {
  background: $dblue;
  color: white;
  padding: 2rem 0;
  
  .header-content {
    h1 {
      margin: 0;
      font-size: 2rem;
      
      @include responsive('sm') {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
