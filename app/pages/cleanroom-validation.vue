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
      <UContainer>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div class="lg:col-span-9">
            <div class="grid grid-cols-1 gap-6">
              <div class="text order-2">
                <p>
                  BASCC specialise in the testing, validation and certification
                  of cleanrooms to ensure this element of the pharmaceutical
                  process conforms with any MHRA or FDA inspection.
                </p>

                <p>
                  At BASCC we understand the importance of your cleanroom
                  facility should it be in the Pharma, Biotech or Semi-Conductor
                  industry. Our CTCB-I trained engineers with their wealth of
                  experience working within critical environments can fully
                  qualify your cleanroom suite/facility in line with all the
                  current regulatory standards (ISO14644/EuGMP)
                </p>

                <p>
                  It is essential for any cleanroom suite to be correctly tested
                  upon initial set up (OQ/PQ stages) and then routinely
                  qualified throughout its lifespan to ensure continual
                  compliance giving the end user assurance that their cleanroom
                  facility is continually complying to the current regulatory
                  standards.
                </p>

                <p>Tests we can perform:</p>

                <ul class="no-style chevrons">
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />HEPA
                    filter Installation.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Air
                    change rate verification.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Air
                    flow velocity verification.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />DOP
                    filter integrity testing (DOP + DPC method)
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Non-Viable particle count verification.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Room
                    recovery / decay rate testing.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Smoke
                    visualisation studies including editing service.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Containment leak testing.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Temperature &amp; humidity verification.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Temperature &amp; humidity mapping.
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                    />Magnehelic gauge calibration.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Noise
                    Level verification.
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />Light
                    level verification.
                  </li>
                </ul>

                <p>
                  All of the testing performed will be documented in a detailed
                  test report upon completion of the works in line with GMP
                  guidelines. BASCC only use state of the art testing equipment
                  thus ensuring our clients receive the best possible service
                  giving them confidence in the test results found
                </p>
                <p>
                  BASCC are independent from any cleanroom builder, equipment
                  manufacturer or designer giving assurances our testing reports
                  are completely unbiased
                </p>
              </div>

              <div class="main-images order-1">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <img
                      src="/imgs/cleanroon-validation/1.jpg"
                      class="img-fluid shadow-sm"
                    />
                  </div>
                  <div>
                    <img
                      src="/imgs/cleanroon-validation/2.jpg"
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
import pageHeader from '@/components/pageHeader.vue'
import cta from '@/components/cta.vue'

export default {
  name: 'Services',
  components: {
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
