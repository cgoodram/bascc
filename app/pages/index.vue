<template>
  <div class="home">
    <div class="welcome">
      <div class="bannerIntro">
        <h1>Balanced Air Specialists - Experts in Cleanroom Validation</h1>
      </div>
      <HomeCarousel />
    </div>
    
    <UContainer>
      <div class="intro">
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
.home {
  padding-bottom: 50px;
  
  .intro {
    margin: 40px 0;
  }
  
  .welcome {
    display: flex;
    flex-direction: column-reverse;
    overflow: hidden;
    
    .bannerIntro {
      background: $dblue;
      color: white;
      padding: 40px 0;
      text-align: center;
      
      h1 {
        font-size: 2.4rem;
      }
      
      @include responsive('sm') {
        padding: 20px 20px;
        
        h1 {
          font-size: 1.8rem;
        }
      }
    }
  }
}
</style>
