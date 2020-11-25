<template>
  <div class="page-wrapper">
    <b-container>
      <b-row>
        <b-col order="2" md="8">Main content for seo</b-col>
        <b-col order="1" md="4"><services-sidebar /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import servicesSidebar from '@/components/servicesSidebar.vue'

export default {
  name: 'Services',
  components: {
    servicesSidebar,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.page-wrapper {
  padding: 20px;
}
</style>
