<template>
  <div>
    <div class="top-bar">
      <UContainer class="d-flex justify-content-between">
        <div class="top-brand">
          <img src="/imgs/bas-logo-dark.svg" class="img-fluid" />
        </div>
        <div class="top-contact">
          <a href="tel:+441942870584">(01942) 870 584</a>
        </div>
      </UContainer>
    </div>

    <nav class="main-navigation">
      <UContainer>
        <UHorizontalNavigation :links="navigationLinks" />
        
        <div class="social-links">
          <UButton
            href="https://www.facebook.com/balancedairspecialists"
            target="_blank"
            aria-label="Visit our Facebook page"
            variant="ghost"
            color="gray"
            icon="i-simple-icons-facebook"
          />
          <UButton 
            href="https://twitter.com/balanced_air" 
            target="_blank"
            aria-label="Visit our Twitter page"
            variant="ghost"
            color="gray"
            icon="i-simple-icons-twitter"
          />
          <UButton
            href="https://www.linkedin.com/company/bascc"
            target="_blank"
            aria-label="Visit our LinkedIn page"
            variant="ghost"
            color="gray"
            icon="i-simple-icons-linkedin"
          />
        </div>
      </UContainer>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useServicesStore } from '~/stores/services'

// Use Pinia store
const servicesStore = useServicesStore()

// Create navigation links with services dropdown
const navigationLinks = computed(() => [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Quality', to: '/quality' },
  {
    label: 'Services',
    children: servicesStore.services.map(service => ({
      label: service.label,
      to: service.page
    }))
  },
  { label: 'Latest News', to: '/latest-news' },
  { label: 'Contact Us', to: '/contact' }
])
</script>

<style lang="scss" scoped>
.top-bar {
  display: flex;
  align-items: center;
  
  .top-brand {
    img {
      max-height: 80px;
      height: 80px;
      padding: 0.5rem 0;
    }
  }
  
  .top-contact {
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    
    a {
      text-decoration: none;
      color: var(--color-dblue);
      
      &:hover {
        color: var(--color-lblue);
      }
    }
  }
}

.main-navigation {
  border-top: 1px solid var(--color-gray-200);
  border-bottom: 1px solid var(--color-gray-200);
  padding: 1rem 0;
  
  .social-links {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
  }
}
</style>
