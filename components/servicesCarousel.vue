<template>
  <div class="servicesList">
    <client-only>
      <carousel
        ref="servicesCarousel"
        :loop="true"
        :items="4"
        :dots="false"
        :nav="true"
        :margin="10"
        :lazyload="true"
        :autoplay="false"
        :responsive="{
          0: { items: 1, nav: false },
          600: { items: 3, nav: true },
          800: { items: 4, nav: true },
        }"
      >
        <div
          v-for="service in services"
          :key="service.page"
          class="carousel-inner"
        >
          <img :src="`/imgs/${service.image}`" />
          <router-link class="carousel-link" :to="service.page">{{
            service.label
          }}</router-link>
          <p class="snippet">{{ service.snippet }}</p>
        </div>
      </carousel>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'ServicesCarousel',
  data() {
    return {
      options: {},
    }
  },
  computed: {
    services() {
      return this.$store.state.services
    },
  },
}
</script>

<style lang="scss" scoped>
.carousel-inner {
  padding: 7.5px;
  .carousel-link {
    font-size: 18px;
    color: $blue;
    padding-bottom: 10px;
    padding-top: 5px;
    display: block;
  }
  .snippet {
    font-size: 14px;
  }
}
/deep/ .owl-carousel {
  &:hover {
    .owl-nav {
      & button.owl-next,
      button.owl-prev {
        // transform: translateX(0);
        opacity: 1;
      }
    }
  }
  .owl-nav {
    position: absolute;
    top: 10%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    & button.owl-next,
    button.owl-prev {
      background: white;
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
      width: 40px;
      height: 40px;
      opacity: 0.8;
      transform: translateX(-20px);
      opacity: 1;
      transition: 0.3s all ease-in-out;
      span {
        color: $blue;
        font-weight: bold;
        font-size: 30px;
        line-height: 30px;
      }
    }
    & button.owl-next {
      transform: translateX(20px);
    }
  }
}
</style>
