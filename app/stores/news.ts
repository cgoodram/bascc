import { defineStore } from 'pinia'

export interface NewsItem {
  title: string
  description: string
  snippet: string
  imageUrl: string
  posted: string
  live: boolean
  slug: string
}

export const useNewsStore = defineStore('news', () => {
  // State
  const news = ref<NewsItem[]>([
    {
      title: 'A word from AZ on the fight against COVID 19',
      description:
        '<blockquote><p>Dear All,<br/>Thank you so much for jumping on this so quickly. Your intervention will directly support our combined efforts to deliver 30M doses to the UK population by September as announced in the 10 Downing Street press conference on Sunday.<br/>It is acts like this that make the impossible possible.</p><footer class="blockquote-footer">A word from AstraZeneca</footer></blockquote>',
      snippet:
        'Thank you so much for jumping on this so quickly. Your intervention will directly support our combined efforts to deliver 30M doses to the UK population by September as announced in the 10 Downing Street press conference on Sunday.',
      imageUrl: '/imgs/news/vaccine.jpg',
      posted: '16th January 2021',
      live: true,
      slug: 'az-fight-against-covid-19',
    },
  ])

  // Getters
  const getLiveNews = computed(() => {
    return news.value.filter(item => item.live)
  })

  const getNewsBySlug = (slug: string) => {
    return news.value.find(item => item.slug === slug)
  }

  const getLatestNews = (limit: number = 5) => {
    return news.value
      .filter(item => item.live)
      .slice(0, limit)
  }

  // Actions
  const addNews = (newsItem: NewsItem) => {
    news.value.push(newsItem)
  }

  const updateNews = (slug: string, updates: Partial<NewsItem>) => {
    const index = news.value.findIndex(item => item.slug === slug)
    if (index !== -1) {
      const currentItem = news.value[index]
      news.value[index] = { ...currentItem, ...updates } as NewsItem
    }
  }

  const removeNews = (slug: string) => {
    const index = news.value.findIndex(item => item.slug === slug)
    if (index !== -1) {
      news.value.splice(index, 1)
    }
  }

  const toggleNewsStatus = (slug: string) => {
    const index = news.value.findIndex(item => item.slug === slug)
    if (index !== -1) {
      const currentItem = news.value[index]
      if (currentItem) {
        currentItem.live = !currentItem.live
      }
    }
  }

  return {
    // State
    news: readonly(news),
    
    // Getters
    getLiveNews,
    getNewsBySlug,
    getLatestNews,
    
    // Actions
    addNews,
    updateNews,
    removeNews,
    toggleNewsStatus
  }
})
