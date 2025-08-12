<template>
  <div class="swiper-div min-h-[460px] sm:min-h-0">
    <UCarousel
      v-model="currentSlide"
      :items="slides"
      :ui="{ 
        item: 'flex-shrink-0 w-full',
        container: 'w-full h-[460px] sm:h-auto'
      }"
      class="w-full"
      :autoplay="5000"
      :loop="true"
      effect="fade"
    >
      <template #item="{ item: slide }">
        <div class="swiper-slide relative max-h-[540px]">
          <div class="banner-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full sm:w-4/5">
            <h2 class="text-white text-5xl mb-10 bg-black bg-opacity-40 p-2.5 rounded-md sm:text-3xl sm:mb-8">
              {{ slide.title }}
            </h2>
            <UButton 
              :to="slide.link" 
              color="white" 
              variant="solid"
              class="cta text-xl px-6 py-3"
            >
              {{ slide.buttonText }}
            </UButton>
          </div>
          <img :src="slide.image" class="w-full h-full object-cover" />
        </div>
      </template>
      
      <template #prev="{ onClick }">
        <UButton
          color="white"
          variant="solid"
          icon="i-heroicons-chevron-left"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
          @click="onClick"
        />
      </template>
      
      <template #next="{ onClick }">
        <UButton
          color="white"
          variant="solid"
          icon="i-heroicons-chevron-right"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 z-10"
          @click="onClick"
        />
      </template>
      
      <template #indicators="{ total, current, goTo }">
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
          <UButton
            v-for="index in total"
            :key="index"
            :color="current === index - 1 ? 'white' : 'gray'"
            variant="solid"
            size="xs"
            class="w-3 h-3 rounded-full"
            @click="goTo(index - 1)"
          />
        </div>
      </template>
    </UCarousel>
  </div>
</template>

<script setup lang="ts">
interface Slide {
  title: string
  image: string
  link: string
  buttonText: string
}

// Current slide state
const currentSlide = ref(0)

// Define slides data
const slides: Slide[] = [
  {
    title: 'Unbiased Qualification Testing',
    image: '/imgs/slider/unbiased-testing.jpg',
    link: '/services',
    buttonText: 'View our services'
  },
  {
    title: 'Tailored Service packages',
    image: '/imgs/slider/tailored-service-packages-washed.jpg',
    link: '/services',
    buttonText: 'View our services'
  },
  {
    title: 'Qualified Testing Engineers',
    image: '/imgs/slider/qualified-testing-engineers.jpg',
    link: '/services',
    buttonText: 'View our services'
  },
  {
    title: 'State Of The Art Testing Equipment',
    image: '/imgs/slider/state-of-art-testing.jpg',
    link: '/services',
    buttonText: 'View our services'
  },
  {
    title: 'UK, Europe & Worldwide Service',
    image: '/imgs/slider/uk-europe-worldwide-service.jpg',
    link: '/services',
    buttonText: 'View our services'
  }
]
</script>

<style lang="scss" scoped>
// Minimal custom styles - most styling now handled by Tailwind classes
.cta {
  font-size: 1.2rem;
  padding: 0.75rem 1.5rem;
}
</style>
