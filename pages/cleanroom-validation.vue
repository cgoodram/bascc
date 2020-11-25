<template>
  <div class="page-wrapper">
    <pageHeader
      title="Cleanroom Validation"
      :breadcrumb="[
        { label: 'home', url: '/' },
        { label: 'services', url: '/services' },
        { label: 'cleanroom validation', url: null },
      ]"
    />
    <div class="page-content">
      <b-container>
        <b-row>
          <b-col md="9">
            <!-- <h1 class="title-header-bar">Cleanroom Validation</h1> -->

            <b-row>
              <b-col md="12" class="text" order="2">
                <p>
                  BASCC specialise in the testing, validation and certification
                  of cleanrooms to ensure this element of the pharmaceutical
                  process conforms with any MHRA or FDA inspection.
                </p>

                <p>
                  At BASCC we understand the importance of your cleanroom
                  facility should it be in the Pharma, Biotech or Semi-Conductor
                  industry. Our CTCB-I trained engineers with their wealth of
                  experience working within critical environments can fully
                  qualify your cleanroom suite/facility in line with all the
                  current regulatory standards (ISO14644/EuGMP)
                </p>

                <p>
                  It is essential for any cleanroom suite to be correctly tested
                  upon initial set up (OQ/PQ stages) and then routinely
                  qualified throughout its lifespan to ensure continual
                  compliance giving the end user assurance that their cleanroom
                  facility is continually complying to the current regulatory
                  standards.
                </p>

                <p>Tests we can perform:</p>

                <ul class="no-style chevrons">
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />HEPA
                    filter Installation.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Air
                    change rate verification.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Air
                    flow velocity verification.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />DOP
                    filter integrity testing (DOP + DPC method)
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Non-Viable particle count verification.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Room
                    recovery / decay rate testing.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Smoke
                    visualisation studies including editing service.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Containment leak testing.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Temperature &amp; humidity verification.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Temperature &amp; humidity mapping.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Magnehelic gauge calibration.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Noise
                    Level verification.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Light
                    level verification.
                  </li>
                </ul>

                <p>
                  All of the testing performed will be documented in a detailed
                  test report upon completion of the works in line with GMP
                  guidelines. BASCC only use state of the art testing equipment
                  thus ensuring our clients receive the best possible service
                  giving them confidence in the test results found
                </p>
                <p>
                  BASCC are independent from any cleanroom builder, equipment
                  manufacturer or designer giving assurances our testing reports
                  are completely unbiased
                </p>
              </b-col>

              <b-col class="main-images" md="12" order="1">
                <b-row>
                  <b-col md="6">
                    <img
                      src="/imgs/cleanroon-validation/1.jpg"
                      class="img-fluid shadow-sm"
                    />
                  </b-col>
                  <b-col md="6">
                    <img
                      src="/imgs/cleanroon-validation/2.jpg"
                      class="img-fluid shadow-sm"
                    />
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
          <b-col md="3"><services-sidebar /></b-col>
        </b-row>
      </b-container>
    </div>
    <cta cta-text="Get a cleanroom validation quote today" />
  </div>
</template>

<script>
import Vue from 'vue'
import {
  Swiper as SwiperClass,
  Pagination,
  Navigation,
  Mousewheel,
  Autoplay,
  EffectFade,
} from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import 'swiper/swiper-bundle.css'
import servicesSidebar from '@/components/servicesSidebar.vue'
import pageHeader from '@/components/pageHeader.vue'
import cta from '@/components/cta.vue'
SwiperClass.use([Pagination, Navigation, Mousewheel, Autoplay, EffectFade])
Vue.use(getAwesomeSwiper(SwiperClass))
// const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass)

export default {
  name: 'Services',
  components: {
    servicesSidebar,
    // Swiper,
    // SwiperSlide,
    pageHeader,
    cta,
  },
  data() {
    return {
      swiperOptions: {
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        initialSlide: 0,
        effect: 'fade',
        autoplay: {
          delay: 5000,
          disableOnInteraction: true,
        },
        speed: 800,
        grabCursor: false,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.main-images {
  margin-bottom: 20px;
}
</style>
