<template>
  <div class="page-wrapper">
    <pageHeader
      :title="getCurrentPageMeta.label"
      :breadcrumb="[
        { label: 'Services', url: '/services' },
        { label: 'Healthcare ventilation verification', url: null },
      ]"
    />
    <div class="page-content">
      <UContainer>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div class="lg:col-span-9">
            <div class="grid grid-cols-1 gap-6">
              <div class="text order-2">
                <p>
                  In healthcare premises, standard and critical ventilation
                  systems are used extensively in all types of facilities to
                  provide a safe, hygienic and comfortable environment for all
                  patients and staff.
                </p>
                <p>
                  Specialised ventilation must be provided in patient treatment
                  areas to ensure compliance with quality assurance standards.
                  These areas include:
                </p>

                <ul class="no-style chevrons">
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Sterile Service Departments.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Isolation Rooms.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />CL2/CL3 Labs.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Minor
                    Procedure Wards.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Hospital Wards.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Pharmacies.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Critical Care Units.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Operating Theatres.
                  </li>
                </ul>

                <p>
                  Our specialist engineers are all certified by the City &
                  Guilds (HTM-03) and can provide all your testing requirements
                  for both non-critical & critical environments.
                </p>
                <p>
                  Test we can perform:
                </p>

                <ul class="no-style chevrons">
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />HTM-03-01 AHU Inspection.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />HTM-03-01 Suite Inspection.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Air
                    Change rate Verification.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Room
                    pressure differential verification.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Duct
                    Traverse recording.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Light
                    Levels.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Sound
                    Levels.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />DOP
                    filter integrity testing (DOP+DPC method).
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Area
                    Non-Viable particle counts.
                  </li>
                </ul>

                <p>
                  All of the testing performed will be documented in a detailed
                  test report upon completion of the works in line with
                  HTM-03-01 guidelines. BASCC only use state of the art testing
                  equipment thus ensuring our clients receive the best possible
                  service giving them confidence in the results found and
                  documented.
                </p>
              </div>

              <div class="main-images order-1">
                <div class="grid grid-cols-1 gap-4">
                  <div>
                    <img
                      src="/imgs/healthcare-ventilation-verification/1.jpg"
                      class="img-fluid shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-3">
            <services-sidebar />
          </div>
        </div>
      </UContainer>
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
