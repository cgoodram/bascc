<template>
  <div class="page-wrapper">
    <homeCarousel />
    <div class="page-content">
      <UContainer>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div class="lg:col-span-9">
            <div class="grid grid-cols-1 gap-6">
              <div class="text">
                <h1>Welcome to BAS Cleanroom Commissioning</h1>
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
                  cleanroom standards (ISO/BS/EN/NSF).
                </p>
              </div>
            </div>
          </div>
          <div class="lg:col-span-3">
            <services-sidebar />
          </div>
        </div>
      </UContainer>
    </div>
  </div>
</template>

<script>
import homeCarousel from '@/components/homeCarousel.vue'
import servicesSidebar from '@/components/servicesSidebar.vue'

export default {
  name: 'Home',
  components: {
    homeCarousel,
    servicesSidebar,
  },
  data() {
    return {}
  },
  head() {
    return {
      title: 'BAS Cleanroom Commissioning - Cleanroom Validation and DOP Filter Testing',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'BAS Cleanroom Commissioning LTD are an independent cleanroom and clean air device qualification provider for sectors such as the Pharmaceutical, Semi-Conductor, Aerospace and Healthcare.',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'BAS Cleanroom Commissioning LTD are an independent cleanroom and clean air device qualification provider for sectors such as the Pharmaceutical, Semi-Conductor, Aerospace and Healthcare.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.page-wrapper {
  min-height: 100vh;
}

.page-content {
  padding: 2rem 0;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--color-dblue);
}

.text {
  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
}
</style>
