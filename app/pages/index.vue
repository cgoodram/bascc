<template>
  <div class="home pb-12">
    <div class="welcome flex flex-col-reverse overflow-hidden">
      <div class="bannerIntro bg-[var(--color-dblue)] text-white py-10 text-center sm:py-5 sm:px-5">
        <h1 class="text-4xl sm:text-2xl">Balanced Air Specialists - Experts in Cleanroom Validation</h1>
      </div>
      <HomeCarousel />
    </div>
    
    <UContainer>
      <div class="intro my-10">
        <p>
          HVAC systems are the lifeblood of any clean room, crucial to the
          operation and production of any pharmaceutical company. Products and
          processes that benefit from the control of airborne contamination
          include those in such industries as aerospace, microelectronics,
          pharmaceuticals, medical devices, healthcare, and food. We offer a
          vital maintenance service to such facilities which includes Air
          Handling Unit filters, AHU or terminal HEPA filters, AHU cleaning and
          sterilization, as well as other aspects covering all parts of HVAC
          systems.
        </p>
      </div>
      
      <div class="services">
        <ServicesCarousel />
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
// Components are auto-imported in Nuxt 4
// No need to manually import or register components
// SEO will be added back after package installation
</script>

<style lang="scss" scoped>
// Minimal custom styles - most styling now handled by Tailwind classes
</style>
