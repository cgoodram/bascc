<template>
  <div class="page-wrapper">
    <pageHeader
      title="Cleanroom Validation"
      :breadcrumb="[
        { label: 'home', url: '/' },
        { label: 'get in touch', url: null },
      ]"
    />
    <div class="page-content">
      <b-container>
        <b-row>
          <b-col md="9">
            <contactForm />
          </b-col>
          <b-col md="3"><services-sidebar /></b-col>
        </b-row>
      </b-container>
    </div>
    <cta cta-text="Get a cleanroom validation quote today" />
  </div>
</template>

<script>
import servicesSidebar from '@/components/servicesSidebar.vue'
import pageHeader from '@/components/pageHeader.vue'
import cta from '@/components/cta.vue'
import contactForm from '@/components/contactForm.vue'

export default {
  name: 'Services',
  components: {
    servicesSidebar,
    pageHeader,
    cta,
    contactForm,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.main-images {
  margin-bottom: 20px;
}
</style>
