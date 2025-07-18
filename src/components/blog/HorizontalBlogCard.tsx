import { FC } from 'react'
import { formatDate } from '../../utils'

interface BlogPost {
  title: string
  description: string
  url: string
  slug: string
  publishedAt: string
  estimatedTimeToRead: string
}

interface BlogCardProps {
  post: BlogPost
}

const BlogCard: FC<BlogCardProps> = ({ post }) => {
  const { title, description, url, slug, publishedAt, estimatedTimeToRead } = post

  return (
    <div key={slug} className="flex flex-col gap-3 rounded-lg border bg-light p-3 lg:flex-row">
      <figure className="relative mt-1 h-24 min-w-40 overflow-hidden bg-gray-200">
        <img
          className="absolute inset-0 h-full w-full rounded-md object-cover transition-transform duration-300 hover:scale-125"
          src={url}
          alt="demo"
        />
      </figure>

      <a href={`/${slug}`}>
        <h3 className="mb-2 text-xl font-bold text-primary transition-colors duration-200 hover:text-theme">
          {title}
        </h3>
        <p className="text-gray-700">{description}</p>
        <p className="mt-4 text-sm font-semibold text-primary">
          {formatDate(publishedAt)} | {estimatedTimeToRead}
        </p>
      </a>
    </div>
  )
}

export default BlogCard
