<template>
  <div class="home">
    <div class="welcome">
      <div class="bannerIntro">
        <h1>Balanced Air Specialists - Experts in Cleanroom Validation</h1>
      </div>
      <homeSlider />
    </div>
    <b-container>
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
        <!-- <div class="serviceTitle">
          <h3 class="title-header">Services</h3>
        </div> -->
        <services-carousel />
      </div>
    </b-container>
  </div>
</template>

<script>
import homeSlider from '@/components/homeSlider.vue'
import servicesCarousel from '@/components/servicesCarousel.vue'

export default {
  components: {
    homeSlider,
    servicesCarousel,
  },
  data() {
    return {}
  },
  head: {
    title:
      'Balanced Air Specialists - Cleanroom Validation and DOP Filter Testing',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Our comprehensive cleanroom validation report describes in detail the raw data acquired from our test results and measurements taken on site.',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Our comprehensive cleanroom validation report describes in detail the raw data acquired from our test results and measurements taken on site.',
      },
    ],
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';
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
