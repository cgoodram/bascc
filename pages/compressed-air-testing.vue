<template>
  <div class="page-wrapper">
    <pageHeader
      :title="getCurrentPageMeta.label"
      :breadcrumb="[
        { label: 'Services', url: '/services' },
        { label: getCurrentPageMeta.label, url: null },
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
                  Compressed air is a critical utility used widely throughout
                  the pharmaceutical, Food, or electronics production
                  environments and it is vitally important for quality, health
                  and safety.
                </p>
                <p>
                  The most stringent hygiene standards are required during the
                  production of pharmaceutical products where compressed air is
                  used in the processes both directly and indirectly. This air
                  must be 100% free of oil and particulates to avoid any form of
                  contamination to the sensitive products.This is why it is
                  critical to ensure the regular testing of all compressed air
                  systems that are used in the manufacturer of the
                  pharmaceutical products to ensure the quality and integrity of
                  the product.
                </p>
                <p>
                  For applications where the quality of compressed air is
                  classed as critical and requires validation to the ISO8573
                  standard, then BASCC can provide regular air quality testing
                  to ensure that you are, and remain, compliant with current
                  regulations and advisory standards for Compressed Air Quality.
                </p>
                <p>
                  Our certified testing engineers can attend your site with our
                  calibrated air quality test kit allowing us to measure the
                  quality of the compressed air line and validate quality
                  parameters of the following:
                </p>

                <ul class="no-style chevrons">
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Particle Purity.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Dew
                    Point.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Oil
                    vapour content.
                  </li>
                </ul>

                <p>
                  On completion of all testing a detailed test report for each
                  compressed air system will be prepared confirming whether each
                  system is ‘Fit for Purpose’ or has met the required class as
                  per the ISO 8573-1 2010
                </p>
              </b-col>

              <b-col class="main-images" md="12" order="1">
                <b-row>
                  <b-col md="12">
                    <img
                      src="/imgs/compressed-air-testing/1.jpg"
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
    <cta cta-text="Get a Compressed Air Test quote" />
  </div>
</template>

<script>
import servicesSidebar from '@/components/servicesSidebar.vue'
import pageHeader from '@/components/pageHeader.vue'
import cta from '@/components/cta.vue'

export default {
  name: 'Services',
  components: {
    servicesSidebar,
    pageHeader,
    cta,
  },
  data() {
    return {}
  },
  computed: {
    getCurrentPageMeta() {
      return this.$store.state.services.find(
        (obj) => obj.page === this.$route.path
      )
    },
  },
  head() {
    return {
      title: this.getCurrentPageMeta.seo
        ? this.getCurrentPageMeta.seo.title
        : '',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.getCurrentPageMeta.seo
            ? this.getCurrentPageMeta.seo.description
            : '',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.getCurrentPageMeta.seo
            ? this.getCurrentPageMeta.seo.description
            : '',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.main-images {
  margin-bottom: 20px;
}
</style>
