<template>
  <div class="page-wrapper">
    <pageHeader
      title="About Balanced Air Specialists"
      :breadcrumb="[{ label: 'About', url: null }]"
    />
    <div class="page-content">
      <b-container>
        <b-row>
          <b-col md="9">
            <!-- <h1 class="title-header-bar">Cleanroom Validation</h1> -->

            <b-row>
              <b-col md="12" class="text" order="0">
                <p>
                  BAS Cleanroom Commissioning LTD are an independent cleanroom
                  and clean air device qualification provider for sectors such
                  as the Pharmaceutical, Semi-Conductor, Aerospace and
                  Healthcare.
                </p>
                <p>
                  We offer a National, European and Worldwide service and can
                  validate your cleanroom facilities and localised clean air
                  devices to confirm that your cleanroom or clean air device is
                  operating in compliance with all the current regulatory
                  cleanroom standards (ISO/BS/EN/NSF). This gives our clients
                  not only the assurances required for their products being
                  manufactured within the areas, but also for their operators
                  using the clean air device equipment.
                </p>
                <p>
                  Our experienced and accredited CTCB-I/HTM-03 trained
                  qualification engineers will use state-of-the-art calibrated
                  testing equipment, then upon completion of testing all the
                  test results will be recorded in an auditable written test
                  report. This service can be provided for the initial build
                  phase of the facility and then to ensure your cleanroom always
                  meets the required industry standards we can also provide a
                  periodic qualification service which can be tailored to suit
                  each individual clients requirements.
                </p>

                <p>
                  BASCC have been part of some major projects in the recent
                  years and have worked in collaboration with such companies as:
                </p>
              </b-col>

              <b-col class="main-images" md="12" order="1">
                <b-row>
                  <b-col
                    v-for="company in companiesList"
                    :key="company.name"
                    md="3"
                  >
                    <img
                      :src="`/imgs/logos/${company.logo}`"
                      class="img-fluid shadow-sm logo"
                      :title="company.name"
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
    <!-- <cta cta-text="Get a Compressed Air Test quote" /> -->
  </div>
</template>

<script>
import servicesSidebar from '@/components/servicesSidebar.vue'
import pageHeader from '@/components/pageHeader.vue'
// import cta from '@/components/cta.vue'
// import contactForm from '@/components/contactForm.vue'

export default {
  name: 'About',
  components: {
    servicesSidebar,
    pageHeader,
    // cta,
  },
  data() {
    return {
      companiesList: [
        {
          logo: 'astrazeneca-logo.png',
          name: 'Astra Zeneca (UK & EU)',
        },
        {
          logo: 'sanofi-logo.png',
          name: 'Sanofi',
        },
        {
          logo: 'baxter-logo.png',
          name: 'Baxter Healthcare LTD',
        },
        {
          logo: 'seqirus-logo.png',
          name: 'Seqirus Vaccines',
        },
        {
          logo: 'gsk-logo.png',
          name: 'GSK',
        },
        {
          logo: 'teva-logo.png',
          name: 'TEVA',
        },
        {
          logo: 'wockhardt-logo.png',
          name: 'Wockhardt UK',
        },
        {
          logo: 'catapult-logo.png',
          name: 'Catapult',
        },
        {
          logo: 'reckitt-benckiser-logo.png',
          name: 'Reckitt Benckiser',
        },
        {
          logo: 'rolls-royce-logo.png',
          name: 'Rolls-Royce',
        },
        {
          logo: 'airbus-logo.png',
          name: 'Airbus',
        },
        {
          logo: 'nhs-logo.png',
          name: 'NHS',
        },
      ],
    }
  },
  computed: {},
  head() {
    return {
      title:
        'Balanced Air Specialists - Cleanroom Validation and DOP Filter Testing',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'BAS Cleanroom Commissioning LTD are an independent cleanroom and clean air device qualification provider for sectors such as the Pharmaceutical, Semi-Conductor, Aerospace and Healthcare. ',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'BAS Cleanroom Commissioning LTD are an independent cleanroom and clean air device qualification provider for sectors such as the Pharmaceutical, Semi-Conductor, Aerospace and Healthcare. ',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.logo {
  margin-bottom: 1rem;
}
</style>
