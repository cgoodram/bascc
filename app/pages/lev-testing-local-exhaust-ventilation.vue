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
                  Our BOHS P601 certified testing engineers can perform a
                  thorough examination and test your critical LEV system in line
                  with the HSE requirements of Regulation 9 of the Control of
                  Substances Hazardous to Health (COSHH) regulations. The
                  measurements taken are compared with the criteria for
                  performance for ventilation systems given in HSG258
                  <em
                    >“Controlling airborne contaminants at work: A guide to LEV
                    local exhaust ventilation”</em
                  >.
                </p>
                <p>
                  <strong
                    >As stated in HSG258 competence is a legal requirement and
                    must only be serviced by qualified engineers</strong
                  >
                </p>
                <p>
                  There are many different processes across a variety of
                  industries which create dust, mist, fumes, vapours and other
                  contaminants. Human exposure to these harmful airborne
                  contaminants is controlled using Local Exhaust Ventilation
                  (LEV) systems. This is why it is essential to continually test
                  your LEV system annually.
                </p>
                <p>
                  Our specialist engineers can perform the following checks as
                  per the current regulatory standards:
                </p>

                <ol class="chevrons">
                  <li>
                    Thorough visual and structural examination, checking for
                    damage, wear and tear,
                  </li>
                  <li>
                    Review of technical performance, including an assessment of
                    capture zone, measuring face velocities and fan checks,
                  </li>
                  <li>
                    Assessment of control effectiveness to ensure the system is
                    adequately controlling the contaminants from the process.
                  </li>
                </ol>

                <p>
                  On completion of all testing a detailed test report for each
                  LEV system will be prepared confirming whether the LEV is ‘Fit
                  for Purpose’ or if remedial works are required.
                </p>
              </b-col>

              <b-col class="main-images" md="12" order="1">
                <b-row>
                  <b-col md="12">
                    <img
                      src="/imgs/lev-testing/1.jpg"
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
    <cta cta-text="Request an LEV testing quote" />
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
