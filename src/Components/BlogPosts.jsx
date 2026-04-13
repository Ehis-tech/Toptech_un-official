import Title from './Title'
import { Link } from 'react-router-dom'

const BlogPosts = ({ posts }) => {
  return (
    <div className='mt-17 px-4'>
      <Title text1={'Our'} text2={'Blog'} />

      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-7 mb-7'>
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
              <span className='text-[#BF9A33] font-semibold uppercase'>
                {post.category}
              </span>
              <span>{post.date}</span>
            </div>

            {/* Title */}
            <h2 className='font-bold text-lg mt-2'>{post.title}</h2>

            {/* Clamped Description */}
            <p
              className='text-gray-600 mt-2 text-sm line-clamp-2'
              dangerouslySetInnerHTML={{ __html: post.desc }}
            >
              {/* {post.desc} */}
            </p>

            {/* Read More */}
            <Link
              to={`/blog-details/${post.id}`}
              className='inline-block mt-3 text-[#BF9A33] underline hover:text-[#A57B0A]'
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogPosts