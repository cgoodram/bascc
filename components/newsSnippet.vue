<template>
  <div class="news-item" :class="{ small: condensed }">
    <h2>
      <router-link :to="`/latest-news/${newsPost.slug}`">{{
        newsPost.title
      }}</router-link>
    </h2>
    <router-link :to="`/latest-news/${newsPost.slug}`"
      ><img :src="`${newsPost.imageUrl}`" class="img-fluid shadow"
    /></router-link>
    <div class="snippet">{{ newsPost.snippet }}</div>
  </div>
</template>

<script>
export default {
  name: 'NewsSnippet',
  props: {
    newsPost: {
      type: Object,
      required: true,
    },
    condensed: {
      type: Boolean,
    },
  },
  data() {
    return {}
  },

  // Example

  methods: {
    // cant use because of html tags :?
    truncate(str, max, suffix) {
      return str.length < max
        ? str
        : `${str.substr(
            0,
            str.substr(0, max - suffix.length).lastIndexOf(' ')
          )}${suffix}`
    },
  },
}
</script>

<style lang="scss" scoped>
.news-item {
  margin-bottom: 3rem;
  h2 {
    a {
      color: $dblue;
    }
  }
  img {
    margin: 1rem 0 2rem;
  }
}
</style>
