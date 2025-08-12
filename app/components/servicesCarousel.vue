<template>
  <div class="servicesList">
    <UCarousel
      v-model="currentSlide"
      :items="services"
      :ui="{ item: 'flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4' }"
      class="w-full"
    >
      <template #item="{ item: service }">
        <div class="carousel-inner">
          <UCard>
            <template #header>
              <img :src="`/imgs/${service.image}`" class="w-full h-32 object-cover" />
            </template>
            
            <NuxtLink class="carousel-link" :to="service.page">
              {{ service.label }}
            </NuxtLink>
            
            <p class="snippet">{{ service.snippet }}</p>
          </UCard>
        </div>
      </template>
      
      <template #prev="{ onClick }">
        <UButton
          color="white"
          variant="solid"
          icon="i-heroicons-chevron-left"
          class="absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
          @click="onClick"
        />
      </template>
      
      <template #next="{ onClick }">
        <UButton
          color="white"
          variant="solid"
          icon="i-heroicons-chevron-right"
          class="absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
          @click="onClick"
        />
      </template>
    </UCarousel>
  </div>
</template>

<script setup lang="ts">
interface Service {
  label: string
  page: string
  image: string
  snippet: string
}

// Current slide state
const currentSlide = ref(0)

// Fetch services data
const { data: services } = await useFetch('/api/services', {
  default: () => [
    { 
      label: 'Cleanroom Validation', 
      page: '/services/cleanroom-validation',
      image: 'cleanroom-validation.jpg',
      snippet: 'Professional cleanroom validation services'
    },
    { 
      label: 'DOP Filter Testing', 
      page: '/services/dop-filter-testing',
      image: 'dop-filter-testing.jpg',
      snippet: 'Comprehensive DOP filter testing solutions'
    },
    { 
      label: 'Air Balancing', 
      page: '/services/air-balancing',
      image: 'air-balancing.jpg',
      snippet: 'Precise air balancing for optimal performance'
    },
    { 
      label: 'HVAC Commissioning', 
      page: '/services/hvac-commissioning',
      image: 'hvac-commissioning.jpg',
      snippet: 'Expert HVAC commissioning services'
    }
  ]
})
</script>

<style lang="scss" scoped>
.servicesList {
  position: relative;
  
  .carousel-inner {
    padding: 7.5px;
    
    .carousel-link {
      font-size: 18px;
      color: $blue;
      padding-bottom: 10px;
      padding-top: 5px;
      display: block;
      text-decoration: none;
      
      &:hover {
        color: $lblue;
      }
    }
    
    .snippet {
      font-size: 14px;
      margin-top: 0.5rem;
    }
  }
}
</style>
