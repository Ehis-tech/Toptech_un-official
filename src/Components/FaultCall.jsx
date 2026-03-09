import Title from './Title'

function FaultCall() {
  const onSubmitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <div className='text-center mt-10 px-4'>
      <Title
        text1={'Have a'}
        text2={'Fault Call?'}
        text3={'Send us a mail describing your current machine fault...'}
      />

      <form
        onSubmit={onSubmitHandler}
        className='mx-auto my-6 flex flex-col gap-4 w-full max-w-[660px]'
      >
        {/* Email input */}
        <input
          className='dark:text-white w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-[#BF9A33]'
          type='email'
          placeholder='Enter your email'
          required
        />

        {/* Textarea */}
        <textarea
          className='dark:text-white w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-[#BF9A33] resize-none'
          rows={5}
          placeholder='Describe your machine fault'
        />
      </form>

      <button className='rounded-md bg-[#BF9A33] px-6 py-3 font-semibold text-white hover:bg-[#A57B0A] transition cursor-pointer'>
        Submit
      </button>
    </div>
  )
}

export default FaultCall
