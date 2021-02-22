<template>
  <div class="swiper-div">
    <transition name="fade" mode="out-in">
      <div v-show="swiperLoading" key="swiperLoader" class="swiper-loading">
        <div class="loader">
          <svg
            id="L9"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enable-background="new 0 0 0 0"
            xml:space="preserve"
          >
            <path
              fill="#fff"
              d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      </div>
    </transition>
    <client-only>
      <swiper
        v-show="!swiperLoading"
        ref="swiper"
        :options="swiperOptions"
        @ready="handleSwiperReadied"
      >
        <swiper-slide>
          <div class="banner-text">
            <h2>Unbiased Qualification Testing</h2>
            <a href="services" class="cta btn-default btn-default--padded"
              >View our services</a
            >
          </div>
          <img src="/imgs/slider/unbiased-testing.jpg" class="swiper-lazy" />
        </swiper-slide>
        <swiper-slide>
          <div class="banner-text">
            <h2>Tailored Service packages</h2>
            <a href="services" class="cta btn-default btn-default--padded"
              >View our services</a
            >
          </div>
          <img
            src="/imgs/slider/tailored-service-packages-washed.jpg"
            class="swiper-lazy"
          />
        </swiper-slide>
        <swiper-slide>
          <div class="banner-text">
            <h2>Qualified Testing Engineers</h2>
            <a href="services" class="cta btn-default btn-default--padded"
              >View our services</a
            >
          </div>
          <img
            src="/imgs/slider/qualified-testing-engineers.jpg"
            class="swiper-lazy"
          />
        </swiper-slide>
        <swiper-slide>
          <div class="banner-text">
            <h2>State Of The Art Testing Equipment</h2>
            <a href="services" class="cta btn-default btn-default--padded"
              >View our services</a
            >
          </div>
          <img
            src="/imgs/slider/state-of-art-testing.jpg"
            class="swiper-lazy"
          />
        </swiper-slide>
        <swiper-slide>
          <div class="banner-text">
            <h2>UK, Europe &amp; Worldwide Service</h2>
            <a href="services" class="cta btn-default btn-default--padded"
              >View our services</a
            >
          </div>
          <img
            src="/imgs/slider/uk-europe-worldwide-service.jpg"
            class="swiper-lazy"
          />
        </swiper-slide>

        <div slot="pagination" class="swiper-pagination"></div>
        <div slot="button-prev" class="swiper-button-prev"></div>
        <div slot="button-next" class="swiper-button-next"></div>
      </swiper>
    </client-only>
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
SwiperClass.use([Pagination, Navigation, Mousewheel, Autoplay, EffectFade])
Vue.use(getAwesomeSwiper(SwiperClass))
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass)

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperLoading: true,
      swiperOptions: {
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        initialSlide: 0,
        lazy: true,
        effect: 'fade',
        // autoplay: {
        //   delay: 5000,
        //   disableOnInteraction: true,
        // },
        speed: 800,
        grabCursor: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  mounted() {
    // console.log(this.$refs.swiper.$swiper)
    // this.$refs.swiper.$swiper.autoplay.start()
    // console.log(this.$refs.swiper.allowTouchMove(false))
  },
  methods: {
    handleSwiperReadied() {
      this.swiperLoading = false
    },
  },
}
</script>
<style lang="scss" scoped>
.swiper-div {
  min-height: 460px;
}
.swiper-loading {
  min-height: 460px;
  background: $blue;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  .loader {
    height: 100px;
    width: 100px;
    opacity: 0.5;
  }
}
.swiper-container {
  max-height: 460px;
  width: 100%;
}
.swiper-slide {
  max-height: 540px;
  .banner-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    h2 {
      color: white;
      font-size: 3rem;
      margin-bottom: 40px;
      background: rgba(0, 0, 0, 0.4);
      padding: 10px;
      border-radius: 6px;
    }
  }
  img {
    width: 100%;
  }
}
</style>
