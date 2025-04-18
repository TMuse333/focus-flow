import { client } from '@/lib/sanity'
import { allPostsQuery, singlePostQuery } from '@/lib/queries'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
console.log('[client]', client)
console.log('[allPostsQuery]', allPostsQuery)
console.log('[singlePostQuery]', singlePostQuery)

export default async function BlogPage() {
  const query = allPostsQuery // if it's a function, call it like allPostsQuery()
  console.log('[query used for fetching]', query)

  const posts = await client.fetch(query)

  const meme = singlePostQuery('slug')
  console.log('[meme]', meme)

  if (!posts || posts.length === 0) {
    return <div>No posts available</div>
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="space-y-4">
        {posts.map((post: any) => (
          <div key={post._id}>
            <Link href={`/blog/${post.slug.current}`}>
              <h2 className="text-xl font-semibold text-blue-600 hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-white">
              {new Date(post.publishedAt).toLocaleDateString()}
             
            </p>
            <PortableText value={post.body} />
            {post.mainImage?.asset?.url && (
  <img
    src={post.mainImage.asset.url}
    alt="Main post image"
    className="w-full max-w-md rounded-lg mb-4"
  />
)}
          </div>
        ))}
      </div>
    </main>
  )
}
