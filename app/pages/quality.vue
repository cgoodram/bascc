<template>
  <div class="page-wrapper">
    <pageHeader
      title="Quality of service"
      :breadcrumb="[{ label: 'Quality', url: null }]"
    />
    <div class="page-content">
      <b-container>
        <b-row>
          <b-col md="9">
            <!-- <h1 class="title-header-bar">Cleanroom Validation</h1> -->

            <b-row>
              <b-col md="12" class="text">
                <h2>Quality</h2>
                <p>
                  At BASCC we are always looking at ways to continually improve
                  the service we provide to our clients and to ensure this BASCC
                  have become Corporate members of all of the recognized
                  cleanroom contamination society’s within the UK and Ireland.
                  Being part of these society’s ensures we’re always kept up to
                  date with all the revisions and changes to the relevant
                  standards meaning we can give all of our clients the correct
                  advice regarding the qualification and routine qualification
                  testing required at their cleanroom facility’s.
                </p>
                <p>
                  BASCC are certified and operate to a BS EN ISO 9001:2015
                  compliant quality management system to ensure continual
                  compliance and an external audit is performed on an annual
                  basis
                </p>
              </b-col>
              <b-col class="main-images" md="12">
                <b-row>
                  <b-col v-for="company in quality" :key="company.name" md="3">
                    <img
                      :src="`/imgs/logos/${company.logo}`"
                      class="img-fluid shadow-sm logo"
                      :title="company.name"
                    />
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="12" class="text">
                <h2>Health &amp; Safety</h2>
                <p>
                  Health &amp; Safety is taken very seriously at BASCC and to
                  ensure all of our staff are safe and working in the correct
                  manner whilst on site they are all trained to CSCS and have
                  all received the Emergency First Aid at work qualification.
                </p>

                <p>
                  BASCC are also accredited members of CHAS &amp;
                  Constructionline ensuring all our regulations are robust and
                  working efficiently for both our staff and clients.
                </p>
              </b-col>
              <b-col class="main-images" md="12">
                <b-row>
                  <b-col v-for="company in safety" :key="company.name" md="3">
                    <img
                      :src="`/imgs/logos/${company.logo}`"
                      class="img-fluid shadow-sm logo"
                      :title="company.name"
                    />
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="12" class="text">
                <h2>Training</h2>
                <p>
                  BASCC continually train all of our employees and see training
                  as a vital part of our business. All of engineers are trained
                  by the CTCB-I &amp; The City of Guilds organization to ensure
                  all of our engineers are performing all of the cleanroom
                  qualification tests as per the correct methods and guidelines.
                </p>

                <p>
                  Having all of our engineers trained in these specialist
                  industry related training courses ensures our clients that
                  they are receiving a competent on site team giving them
                  assurances for the test results provided from our specialist
                  calibrated equipment.
                </p>
              </b-col>
              <b-col class="main-images" md="12">
                <b-row>
                  <b-col v-for="company in training" :key="company.name" md="3">
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
      quality: [
        {
          logo: 'irish-cleanroom-logo.png',
          name: 'Irish Cleanroom Society',
        },
        {
          logo: 'ccn-logo.png',
          name: 'CCN',
        },
        {
          logo: 's2c2-logo.png',
          name: 'Scottish contamination',
        },
        {
          logo: 'iso-9001.png',
          name: 'BS EN ISO 9001:2015 compliant',
        },
      ],
      safety: [
        {
          logo: 'chas-logo.png',
          name: 'CHAS',
        },
        {
          logo: 'constructionline-gold-logo.png',
          name: 'Construction Line',
        },
        {
          logo: 'ipaf-logo.png',
          name: 'IPAF',
        },
        {
          logo: 'cscs-logo.png',
          name: 'CSCS',
        },
      ],
      training: [
        {
          logo: 'bohs-logo.png',
          name: 'BOHS',
        },
        {
          logo: 'ctcbi-logo.png',
          name: 'CTCB-I',
        },
        {
          logo: 'cityguilds-logo.png',
          name: 'City & Guilds',
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
.main-images {
  margin-bottom: 2rem;
  .logo {
    margin-bottom: 1rem;
  }
}
h2 {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
