<template>
  <div class="page-wrapper">
    <pageHeader :title="newsPost.title" />
    <div class="page-content">
      <UContainer>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div class="lg:col-span-9 news-item">
            <img
              :src="`${newsPost.imageUrl}`"
              class="img-fluid news-image shadow"
            />

            <div v-html="newsPost.description" />
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

export default {
  name: 'NewsPost',
  validate({ params, store }) {
    return store.state.news.find((element) => element.slug === params.newspage)
  },
  components: {
    pageHeader,
  },
  data() {
    return {}
  },
  computed: {
    newsPost() {
      return this.$store.state.news.find(
        (element) => element.slug === this.$route.params.newspage
      )
    },
  },
  head() {
    return {
      title: this.newsPost.title,
    }
  },
}
</script>

<style lang="scss" scoped>
.news-item {
  margin-bottom: 2rem;
  .news-image {
    margin-bottom: 2rem;
  }
}
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
