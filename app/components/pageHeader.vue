<template>
  <div class="page-header bg-[var(--color-dblue)] text-white py-8">
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
      to: props.parentPage,
      icon: ''
    })
  }
  
  links.push({
    label: props.title,
    to: '#',
    icon: ''
  })
  
  return links
})
</script>

<style lang="scss" scoped>
.page-header {
  .header-content {
    h1 {
      margin: 0;
      font-size: 2rem;
      
      @media (max-width: 640px) {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
