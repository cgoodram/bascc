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

    <UNavigationBar>
      <UContainer>
        <template #left>
          <UNavigationBarItem to="/">Home</UNavigationBarItem>
          <UNavigationBarItem to="/about">About</UNavigationBarItem>
          <UNavigationBarItem to="/quality">Quality</UNavigationBarItem>
          
          <UDropdown :items="services">
            <UNavigationBarItem>
              Services
              <template #trailing>
                <UIcon name="i-heroicons-chevron-down" />
              </template>
            </UNavigationBarItem>
          </UDropdown>
          
          <UNavigationBarItem to="/latest-news">Latest News</UNavigationBarItem>
          <UNavigationBarItem to="/contact">Contact Us</UNavigationBarItem>
        </template>
        
        <template #right>
          <UNavigationBarItem
            href="https://www.facebook.com/balancedairspecialists"
            target="_blank"
          >
            <img src="/imgs/facebook.svg" />
          </UNavigationBarItem>
          <UNavigationBarItem 
            href="https://twitter.com/balanced_air" 
            target="_blank"
          >
            <img src="/imgs/twitter.svg" />
          </UNavigationBarItem>
          <UNavigationBarItem
            href="https://www.linkedin.com/company/bascc"
            target="_blank"
          >
            <img src="/imgs/linkedin.svg" />
          </UNavigationBarItem>
        </template>
      </UContainer>
    </UNavigationBar>
  </div>
</template>

<script setup lang="ts">
import { useServicesStore } from '~/stores/services'

// Use Pinia store
const servicesStore = useServicesStore()

// Get services from store and convert to dropdown format
const services = computed(() => 
  servicesStore.services.map(service => ({
    label: service.label,
    to: service.page
  }))
)
</script>

<style lang="scss" scoped>
.top-bar {
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
      color: $dblue;
      
      &:hover {
        color: $lblue;
      }
    }
  }
}
</style>
