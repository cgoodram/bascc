<template>
  <div class="news-item" :class="{ small: condensed }">
    <h2>
      <router-link :to="`/latest-news/${newsPost.slug}`">{{
        newsPost.title
      }}</router-link>
    </h2>
    <img :src="`${newsPost.imageUrl}`" class="img-fluid shadow" />
    <div v-html="newsDescription" />
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

  computed: {
    newsDescription() {
      const description = this.newsPost.description
      // if (this.condensed) {
      //   description = this.truncate(description, 20, '...')
      // }
      return description
    },
  },
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

<style lang="scss" scoped></style>
