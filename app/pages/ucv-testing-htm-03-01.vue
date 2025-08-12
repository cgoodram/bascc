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
                  Post-operative infection is strongly influenced by the
                  suitability and level of airborne contaminates within an
                  operating room. To minimise infection risk, many procedures
                  are carried out under an ultra-clean ventilated canopy (UCV)
                  and these need to be inspected quarterly and their performance
                  measured and verified annually.
                </p>
                <p>
                  Our specialist engineers have a vast amount of experience in
                  the qualification of UCV systems and are all certified by the
                  City &amp; Guilds (HTM-03) We can perform your regular
                  verification testing and servicing to ensure the safe and
                  efficient operation of your UCV system. Our system inspection
                  assesses and verifies compliance to existing guidance (HTM
                  03-01).
                </p>

                <p><strong>Test we can perform:</strong></p>

                <h2 class="h2">
                  Operating Theatre Service.
                </h2>

                <p><strong>Recommended for Annual Verification:</strong></p>
                <h2 class="h2">
                  Ultra-Clean Ventilated Canopy (UCV) Theatres
                </h2>
                <ul class="no-style chevrons">
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />HTM-03-01 AHU Inspection.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Air
                    Change Rate Verification.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Non-Viable particle counts.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />HEPA
                    filter integrity test (DOP or DPC scan method).
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Confirmation of UCV critical area velocities (1/2m).
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Room
                    pressure differential verification.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Temperature &amp; Humidity logging.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Noise
                    levels.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Light
                    Levels.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />UCV
                    function checks.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Re-entrainment test (optional).
                  </li>
                </ul>

                <p><strong>Recommended for Bi-Annual Verification:</strong></p>

                <h2 class="h2">Ultra-Clean Ventilated Canopy (UCV) Theatres</h2>
                <ul class="no-style chevrons">
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />HTM-03-01 AHU Inspection.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Replacement of pre-filters.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Confirmation of UCV critical area velocities (1/2m).
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Noise
                    levels.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Light
                    Levels.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Temperature &amp; Humidity logging.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />UCV
                    function checks.
                  </li>
                </ul>

                <h2 class="h2">Conventional Theatres</h2>

                <ul class="no-style chevrons">
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />HTM-03-01 AHU Inspection.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Air
                    Change Rate Verification.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Non-Viable particle counts.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />HEPA
                    filter integrity test (DOP + DPC method).
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Room
                    pressure differential verification.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Temperature &amp; Humidity logging.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Noise
                    levels.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Light
                    Levels.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />UCV
                    function checks.
                  </li>
                </ul>

                <p>
                  All of the testing performed will be documented in a detailed
                  report upon completion of the works in line with HTM-03-01
                  guidelines. BASCC only use state of the art testing equipment
                  thus ensuring our clients receive the best possible service
                  giving them confidence in the results found and documented.
                </p>
              </b-col>

              <b-col class="main-images" md="12" order="1">
                <b-row>
                  <b-col md="12">
                    <img
                      src="/imgs/ucv-testing/1.jpg"
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
