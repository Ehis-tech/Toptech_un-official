
function NewsletterBox() {

 const onSubmitHandler = (event) => {
     event.preventDefault();
 }


  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-[#BF9A33]'>Subscribe to our newsletter</p>
      <p className='text-gray-400 mt-3'>We offer appealing discount prices when you buy more than three products.</p>

      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 '>
         <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email' required/>
         <button className='bg-[#A57B0A] text-white text-xs px-10 py-4' type='submit'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox