import assets from '../assets/assets'
import { Link } from 'react-router-dom'

const BlogPosts = ({ posts }) => {
  return (
    <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      {posts.map((post) => (
        <div key={post.id}>
          {/* Image */}
          <img
            src={post.image}
            alt={post.title}
            className='w-full h-52 object-cover rounded-lg'
          />

          {/* Category + Date */}
          <div className='flex gap-3 mt-3 text-sm text-gray-500'>
            <span className='text-blue-600 font-semibold uppercase'>
              {post.category}
            </span>
            <span>{post.date}</span>
          </div>

          {/* Title */}
          <h2 className='font-bold text-lg mt-2'>{post.title}</h2>

          {/* Clamped Description */}
          <p className='text-gray-600 mt-2 text-sm line-clamp-2'>{post.desc}</p>

          {/* Read More */}
          <Link
            to={`/blog/${post.id}`}
            className='inline-block mt-3 text-blue-600 underline'
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BlogPosts