import { useState } from 'react'
import Title from './Title'

function FaultCall() {

  const onSubmitHandler = (event) => {
    event.preventDefault()

     if (validate()) {
         toast.success("Fault Call submitted you'll recieve a response mail", {
           duration: 4000,
         })
          console.log('Form submitted:', formData)
          // Send to backend here
    
        
          setFormData({
            name: '',
            company: '',
            email: '',
            fault: '',
          })
        }
  }

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    fault:''

  })

  const [errors, setErrors] = useState({})

  const regex = {
    name: /^[A-Za-z\s]{3,}$/,
    company: /^[A-Za-z0-9\s.&'-]{3,}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    fault: /^[A-Za-z\s]{3,}$/,
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const validate = () => {
    let newErrors = {}

    if (!regex.name.test(formData.name)) {
      newErrors.name = "*Please enter a name e.g Paul Adejoke*"
    }

    if (!regex.company.test(formData.company)) {
      newErrors.company =
        "*Please enter your company name e.g Toptech Engineering ltd*"
    }

    if (!regex.email.test(formData.email)) {
      newErrors.email =
        "*Please enter a valid email e.g 'toptechengineering@gmail.com*"
    }


    if (!formData.fault.trim()) {
      newErrors.project = '*This field can not be left empty*'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
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
        {/* Name input */}
        <div>
          <input
            name='name'
            value={formData.name}
            onChange={handleChange}
            className={`w-full rounded-md px-4 py-2 outline-none border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } focus:border-[#BF9A33]`}
            type='text'
            placeholder='Enter your name'
          />
          {errors.name && (
            <p className='text-red-500 text-sm mt-1'>{errors.name}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <input
            name='company'
            value={formData.company}
            onChange={handleChange}
            className={`w-full rounded-md px-4 py-2 outline-none border ${
              errors.company ? 'border-red-500' : 'border-gray-300'
            } focus:border-[#BF9A33]`}
            type='text'
            placeholder='Enter your company name'
          />
          {errors.company && (
            <p className='text-red-500 text-sm mt-1'>{errors.company}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            name='email'
            value={formData.email}
            onChange={handleChange}
            className={`w-full rounded-md px-4 py-2 outline-none border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } focus:border-[#BF9A33]`}
            type='email'
            placeholder='Enter your email'
          />
          {errors.email && (
            <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
          )}
        </div>

        {/* Fault */}
        <div>
          <textarea
            name='project'
            value={formData.project}
            onChange={handleChange}
            className={`w-full rounded-md px-4 py-3 outline-none border ${
              errors.project ? 'border-red-500' : 'border-gray-300'
            } focus:border-[#BF9A33] resize-none`}
            rows={5}
            placeholder='Describe the type of project'
          />
          {errors.project && (
            <p className='text-red-500 text-sm mt-1'>{errors.project}</p>
          )}
        </div>

        <button className='rounded-md bg-[#BF9A33] px-6 py-3 w-fit mx-auto font-semibold text-white hover:bg-[#A57B0A] transition cursor-pointer'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default FaultCall
