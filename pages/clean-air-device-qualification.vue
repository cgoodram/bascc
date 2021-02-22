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
                  BASCC validation engineers can perform all the required
                  routine qualification tests on all types of clean air device
                  equipment. It’s vital for all clean air devices to be
                  routinely tested in line with regulatory standards such as BS
                  5726:2005, BS EN 12469:2000, ISO 14644, to ensure continual
                  compliance, protection of the product &amp; protection of the
                  operator.
                </p>

                <p>
                  Our specialist engineers can perform various performance and
                  safety tests as part of a routine service agreement or ad-hoc
                  service visit. Available tests include:
                </p>

                <p>
                  Our specialist engineers can service &amp; maintain the
                  following clean air devices:
                </p>

                <ul class="no-style chevrons">
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Microbiological Safety Cabinets (Class I/II/III).
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />VLAF
                    laminar flow units.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />HLAF
                    laminar flow units.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Isolator Units.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Downflow benches.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Downflow booths.
                  </li>
                </ul>

                <p>
                  <strong
                    >Please contact us should you have any other type of clean
                    air device that’s not listed above.</strong
                  >
                </p>
                <p>
                  Tests include:
                </p>

                <ul class="no-style chevrons">
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Check
                    operation of all switches, alarms & pressure gauges.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Inspection & replacement of all air filters (If required.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Airflow velocity verification.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Light
                    level verification.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Noise
                    level verification.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />HEPA
                    DOP filter integrity test.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Non-Viable particle count verification.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Smoke
                    visualisation studies including editing service (Option of
                    professional camera crew service – Grade A).
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    /><router-link to="ki-discus-operator-protection-test"
                      >KI-Discus – Operator protection test (BS EN
                      12469:2000)</router-link
                    >
                  </li>
                </ul>
              </b-col>

              <b-col class="main-images" md="12" order="1">
                <b-row>
                  <b-col md="6">
                    <img
                      src="/imgs/clean-air-device-qualification/1.jpg"
                      class="img-fluid shadow-sm"
                    />
                  </b-col>
                  <b-col md="6">
                    <img
                      src="/imgs/clean-air-device-qualification/2.jpg"
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
      title: this.getCurrentPageMeta.seo.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.getCurrentPageMeta.seo.description,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.getCurrentPageMeta.seo.description,
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
