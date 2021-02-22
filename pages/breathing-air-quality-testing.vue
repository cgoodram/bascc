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
                  Compressed air for air fed helmets and masks originates from a
                  compressor system and is filtered in a multistage breathing
                  air filter. As the air fed helmet or mask wearer’s life and
                  health depend on the air supplied by the compressor, you
                  should ensure that the air supplied meets the quality
                  requirements in British Standard BS EN 12021:2014. This states
                  that breathing air should not contain any contaminants at a
                  concentration which can cause toxic or harmful effects and in
                  any event contaminants should be as low as possible and no
                  greater than specified within the standard.
                </p>
                <p>
                  As an employer, there is a clear responsibility under the
                  requirements of the HSE and It is a legal requirement to
                  ensure that the quality of breathable air being supplied to an
                  operator is at a suitable standard providing fit for purpose
                  safety equipment for all employees that may work in an
                  environment or carry out a process, which may be hazardous to
                  the employee’s health. This applies to both abrasive blasting
                  and paint spraying activities.
                </p>
                <p>
                  <strong
                    >COSHH regulations state that ‘testing should be conducted
                    at least once every 3 months</strong
                  >
                </p>
                <p>
                  BASCC certified engineers can periodically test the air
                  quality of your respiratory device to ensure that the control
                  measures you have put in place are delivering the air quality
                  required by BS EN 12021:2014.
                </p>
                <p>
                  You should base the frequency of such tests on a risk
                  assessment, but they should take place at least every three
                  months, and more often when the quality of air cannot be
                  assured to these levels. As part of the risk assessment, if a
                  mobile compressor is being used consideration should be given
                  as to how often the air supply should be checked when the
                  compressor is moved.
                </p>
                <p>
                  On completion of all testing a detailed report for each
                  respiratory system will be prepared confirming whether the
                  equipment is ‘Fit for Purpose’ and complies to the
                  requirements stated in BS EN 12021:2014.
                </p>
              </b-col>

              <b-col class="main-images" md="12" order="1">
                <b-row>
                  <b-col md="12">
                    <img
                      src="/imgs/breathing-air-quality-testing/1.jpg"
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
