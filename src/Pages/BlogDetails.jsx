import { useParams } from 'react-router-dom'
import { posts } from '../assets/assets'
import BlogPosts from '../Components/BlogPosts'

const BlogDetails = () => {
  const { id } = useParams()

  const post = posts.find((p) => p.id === id)

  // get remaining posts
  const otherPosts = posts.filter((p) => p.id !== id)

  if (!post) return <p>Post not found</p>

  return (
    <div>
      {/* HERO IMAGE */}
      <div className='w-full h-[600px]'>
        <img
          src={post.image}
          alt={post.title}
          className='w-full h-full object-cover'
        />
      </div>

      {/* CONTENT */}
      <div className='px-4 md:px-10 lg:px-20 py-10'>
        {/* Category + Date */}
        <div className='flex gap-3 text-gray-500 text-sm'>
          <span className='text-blue-600 font-semibold uppercase'>
            {post.category}
          </span>
          <span>{post.date}</span>
        </div>

        {/* Title */}
        <h1 className='text-3xl font-bold mt-3'>{post.title}</h1>

        {/* Full Description */}
        <p className='mt-4 text-gray-700 leading-relaxed'>{post.desc}</p>
      </div>

      {/* OTHER POSTS */}
      <div className='bg-gray-100 px-4 md:px-10 lg:px-20 py-10'>
        <h2 className='text-xl font-bold mb-6'>More Posts</h2>

        <div className='flex flex-col md:flex-row gap-6'>
          <BlogPosts posts={otherPosts.slice(0, 2)} />
        </div>
      </div>
    </div>
  )
}

export default BlogDetails
