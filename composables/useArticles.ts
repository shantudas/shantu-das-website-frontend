export interface Article {
  id: string
  slug: string
  title: string
  description: string
  author: string
  category: string
  tags: string[]
  publishedAt: string
  readingTime: string
  body: string
  _path: string
}

export const useArticles = () => {
  const articles = ref<Article[]>([])

  const loadArticles = async () => {
    try {
      const { data } = await queryContent('articles').find()
      articles.value = data.value as Article[]
    } catch (error) {
      console.error('Failed to load articles:', error)
    }
  }

  const getArticleBySlug = (slug: string): Article | undefined => {
    return articles.value.find(article => article.slug === slug)
  }

  return {
    articles: readonly(articles),
    loadArticles,
    getArticleBySlug
  }
}