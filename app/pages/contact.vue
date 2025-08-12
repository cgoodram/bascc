<template>
  <div class="page-wrapper">
    <pageHeader
      title="Contact - Balanced Air Solutions"
      :breadcrumb="[{ label: 'get in touch', url: null }]"
    />
    <div class="page-content">
      <UContainer>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div class="lg:col-span-9">
            <contactForm />
          </div>
          <div class="lg:col-span-3 contact">
            <div class="contact-item">
              <h3 class="title">Address:</h3>
              <p>
                Unit 4, Art Business Park,<br />
                Newton-Le-Willows,<br />
                Merseyside,<br />
                WA12 8AT
              </p>
            </div>

            <div class="contact-item">
              <h3 class="title">Email:</h3>
              <p>
                <a href="mailto:info@bascc.co.uk" target="_blank"
                  >info@bascc.co.uk</a
                >
              </p>
            </div>
            <div class="contact-item">
              <h3 class="title">Phone:</h3>
              <p>
                <a href="tel:+44194270584" target="_blank">(01942) 870 584</a>
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </div>
    <!-- <cta cta-text="Get in touch today" /> -->
  </div>
</template>

<script>
// import servicesSidebar from '@/components/servicesSidebar.vue'
import pageHeader from '@/components/pageHeader.vue'
// import cta from '@/components/cta.vue'
import contactForm from '@/components/contactForm.vue'

export default {
  name: 'Contact',
  components: {
    // servicesSidebar,
    pageHeader,
    // cta,
    contactForm,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.main-images {
  margin-bottom: 20px;
}
.contact {
  .contact-item {
    .title {
      font-size: 16px;
      font-weight: bold;
    }
  }
}
.header {
  margin-bottom: 20px;
  display: block;
  &:after {
    width: 5rem;
    border-top-width: 1px;
    content: '';
    display: inline-block;
    border-top-style: solid;
    border-color: inherit;
    margin-top: 0;
  }
  h2 {
    display: block;
    font-size: 18px;
    margin-bottom: 0;
    width: 100%;
  }
}
</style>
