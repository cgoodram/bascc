<template>
  <div class="page-wrapper">
    <HomeCarousel />
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
            <ServicesSidebar />
          </div>
        </div>
      </UContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
// Using Composition API with <script setup> for better TypeScript support
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
