<template>
  <div class="news-item" :class="{ small: condensed }">
    <h2>
      <NuxtLink :to="`/latest-news/${newsPost.slug}`">
        {{ newsPost.title }}
      </NuxtLink>
    </h2>
    <NuxtLink :to="`/latest-news/${newsPost.slug}`">
      <UCard>
        <template #header>
          <img :src="newsPost.imageUrl" class="img-fluid shadow" />
        </template>
        <div class="snippet">{{ newsPost.snippet }}</div>
      </UCard>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
interface NewsPost {
  slug: string
  title: string
  imageUrl: string
  snippet: string
}

interface Props {
  newsPost: NewsPost
  condensed?: boolean
}

defineProps<Props>()

// Example utility function (can be moved to composables if needed)
const truncate = (str: string, max: number, suffix: string) => {
  return str.length < max
    ? str
    : `${str.substr(
        0,
        str.substr(0, max - suffix.length).lastIndexOf(' ')
      )}${suffix}`
}
</script>

<style lang="scss" scoped>
.news-item {
  margin-bottom: 3rem;
  
  h2 {
    a {
      color: $dblue;
      text-decoration: none;
      
      &:hover {
        color: $lblue;
      }
    }
  }
  
  img {
    margin: 1rem 0 2rem;
    width: 100%;
    height: auto;
  }
  
  .snippet {
    margin-top: 1rem;
  }
}
</style>
