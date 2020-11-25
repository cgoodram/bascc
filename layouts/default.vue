<template>
  <div>
    <headAndNav />
    <Nuxt />
    <foot />
  </div>
</template>

<script>
import headAndNav from '@/components/headAndNav.vue'
import foot from '@/components/footer.vue'

export default {
  components: {
    headAndNav,
    foot,
  },
}
</script>

<style></style>
