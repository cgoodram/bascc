<template>
  <div class="news-snippet">
    <UCard>
      <template #header>
        <div class="news-header">
          <h3>{{ title }}</h3>
          <span class="date">{{ posted }}</span>
        </div>
      </template>
      
      <div class="news-content">
        <div v-if="imageUrl" class="news-image">
          <img :src="imageUrl" :alt="title" />
        </div>
        <div class="news-text">
          <p v-html="snippet"></p>
        </div>
      </div>
      
      <template #footer>
        <NuxtLink :to="`/latest-news/${slug}`" class="read-more">
          Read More
        </NuxtLink>
      </template>
    </UCard>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  snippet: string
  imageUrl?: string
  posted: string
  slug: string
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.news-snippet {
  .news-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    h3 {
      margin: 0;
      font-size: 1.25rem;
      color: var(--color-dblue);
    }
    
    .date {
      font-size: 0.875rem;
      color: var(--color-lblue);
      font-style: italic;
    }
  }
  
  .news-content {
    margin: 1rem 0;
    
    .news-image {
      margin-bottom: 1rem;
      
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 4px;
      }
    }
    
    .news-text {
      p {
        margin: 0;
        line-height: 1.6;
      }
    }
  }
  
  .read-more {
    display: inline-block;
    color: var(--color-blue);
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      color: var(--color-lblue);
    }
  }
}
</style>
