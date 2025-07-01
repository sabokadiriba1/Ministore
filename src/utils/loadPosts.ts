import matter from 'gray-matter'
import type { BlogPost } from '../components/blog/BlogList'

const postFiles = import.meta.glob('../content/blog/*.md', { as: 'raw', eager: true })

export const getAllPosts = (): BlogPost[] => {
  const posts: BlogPost[] = Object.entries(postFiles).map(([filePath, raw]) => {
    const { data } = matter(raw as string)

    // Optional: derive slug from filename if needed
    const filename = filePath.split('/').pop() ?? ''
    const slug = filename.replace('.md', '')

    return {
      title: data.title,
      description: data.description,
      url: data.url,
      slug: data.slug ?? slug,
      publishedAt: data.publishedAt,
      estimatedTimeToRead: data.estimatedTimeToRead,
    }
  })

  return posts
}
