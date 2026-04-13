import { useState } from 'react'
import Title from '../Components/Title'
import toast from 'react-hot-toast'


function RequestQuote() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    state: '',
    address: '',
    email: '',
    project: '',
  })

  const [errors, setErrors] = useState({})

  // Regex patterns
  const regex = {
    name: /^[A-Za-z\s]{3,}$/,
    company: /^[A-Za-z0-9\s.&'-]{3,}$/,
    phone: /^(\+234|0)[789][01]\d{8}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    state: /^[A-Za-z\s]{3,}$/,
    address: /^.{5,}$/,
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

    if (!regex.phone.test(formData.phone)) {
      newErrors.phone =
        '*Please enter a valid phone number e.g +234 8028450324/08028450324*'
    }

    if (!regex.email.test(formData.email)) {
      newErrors.email =
        "*Please enter a valid email e.g 'toptechengineering@gmail.com*"
    }

    if (!regex.state.test(formData.state)) {
      newErrors.state = "*Please enter your state e.g Lagos*"
    }

    if (!regex.address.test(formData.address)) {
      newErrors.address =
        "*Please enter a valid address e.g 9, Oguntona Crescent...*"
    }

    if (!formData.project.trim()) {
      newErrors.project = '*This field can not be left empty*'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()

    if (validate()) {
     toast.success("Quote submitted you'll recieve a response mail", {
       duration: 4000,
     })
      console.log('Form submitted:', formData)
      // Send to backend here

      // Optional: clear form after submit
      setFormData({
        name: '',
        company: '',
        phone: '',
        state: '',
        address: '',
        email: '',
        project: '',
      })
    }
  }

  return (
    <div className='text-center mt-10 px-4 mb-10'>
      <Title
        text1={'Request'}
        text2={'A Quote'}
        text3={'Send us a quote of any of your engineering projects...'}
      />

      <form
        onSubmit={onSubmitHandler}
        className='mx-auto my-6 flex flex-col gap-4 w-full max-w-[660px]'
      >
        {/* Name */}
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

        {/* Phone */}
        <div>
          <input
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            className={`w-full rounded-md px-4 py-2 outline-none border ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            } focus:border-[#BF9A33]`}
            type='tel'
            placeholder='Enter your tel'
          />
          {errors.phone && (
            <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>
          )}
        </div>

        {/* State */}
        <div>
          <input
            name='state'
            value={formData.state}
            onChange={handleChange}
            className={`w-full rounded-md px-4 py-2 outline-none border ${
              errors.state ? 'border-red-500' : 'border-gray-300'
            } focus:border-[#BF9A33]`}
            type='text'
            placeholder='Enter your state'
          />
          {errors.state && (
            <p className='text-red-500 text-sm mt-1'>{errors.state}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <input
            name='address'
            value={formData.address}
            onChange={handleChange}
            className={`w-full rounded-md px-4 py-2 outline-none border ${
              errors.address ? 'border-red-500' : 'border-gray-300'
            } focus:border-[#BF9A33]`}
            type='text'
            placeholder='Enter your address'
          />
          {errors.address && (
            <p className='text-red-500 text-sm mt-1'>{errors.address}</p>
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

        {/* Project */}
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
          Submit Quote
        </button>
      </form>
    </div>
  )
}

export default RequestQuote
