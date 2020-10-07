<template>
  <client-only>
    <swiper ref="swiper" :options="swiperOptions">
      <swiper-slide><img src="https://picsum.photos/900/500" /></swiper-slide>
      <swiper-slide><img src="https://picsum.photos/900/501" /></swiper-slide>
      <swiper-slide><img src="https://picsum.photos/900/502" /></swiper-slide>
      <div slot="pagination" class="swiper-pagination"></div>
    </swiper>
  </client-only>
</template>

<script>
import Vue from 'vue'
import {
  Swiper as SwiperClass,
  Pagination,
  Mousewheel,
  Autoplay,
} from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import 'swiper/swiper-bundle.css'
SwiperClass.use([Pagination, Mousewheel, Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass))
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass)

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        initialSlide: 0,
        effect: 'fade',
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        speed: 800,
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets',
        },
      },
    }
  },
  mounted() {
    // console.log(this.$refs.swiper.$swiper)
    // this.$refs.swiper.$swiper.autoplay.start()
  },
}
</script>
<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
