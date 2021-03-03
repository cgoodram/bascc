<template>
  <div class="page-wrapper">
    <pageHeader
      :title="newsPost.title"
      :breadcrumb="[{ label: 'latest news', url: null }]"
    />
    <div class="page-content">
      <b-container>
        <b-row>
          <b-col md="9">
            <img :src="`${newsPost.imageUrl}`" class="img-fluid" />
            <div v-html="newsPost.description" />
          </b-col>
          <b-col md="3" class="contact">
            <!-- <div class="header">
              <h2>Contact us</h2>
            </div> -->
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
          </b-col>
        </b-row>
      </b-container>
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
