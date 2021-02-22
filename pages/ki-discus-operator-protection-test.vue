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
                  BAS engineers have been fully trained &amp; are certified to
                  carry out KI Discus operator protection tests in line with BS
                  EN12469. The KI-Discus test is required to be carried out to
                  enable operator protection factors (and, where appropriate,
                  product protection and cross contamination factors) to be
                  measured for:
                </p>

                <ul class="no-style chevrons">
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Class
                    I and Class II open-fronted microbiological safety cabinets.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Special hybrid facilities such as carcinogen and
                    radio-pharmaceutical cabinets.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />General purpose laboratory fume cupboards.
                  </li>
                </ul>

                <p>
                  The K I Discus test is required to be carried out on a 12
                  monthly routine basis to maintain acceptable performance.
                </p>
                <p>
                  A Full BAS comprehensive validation report will be compiled to
                  provide a valuable record of performance for each safety
                  cabinet within ten working days of each visit.
                </p>
                <p>
                  Tests are only reliable when carried out using the correct
                  instruments which have calibration traceable to National
                  Standards. All of our test equipment meets the latest
                  standards and is calibrated by an external qualified
                  calibration house or equipment manufacturer.
                </p>
              </b-col>

              <b-col class="main-images" md="12" order="1">
                <b-row>
                  <b-col md="6">
                    <img
                      src="/imgs/ki-discus-operator-protection-test/1.jpg"
                      class="img-fluid shadow-sm"
                    />
                  </b-col>
                  <b-col md="6">
                    <img
                      src="/imgs/ki-discus-operator-protection-test/2.jpg"
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
    <cta cta-text="Get in touch today" />
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
