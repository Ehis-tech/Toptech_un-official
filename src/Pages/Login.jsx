import { useState } from "react"


function Login() {

   const [currentState, setCurrentState] =  useState('Sign Up')

   const onSubmitHandler = async (event) => {
    event.preventDefault()
   }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
         <p className='prata-regular text-3xl'>{currentState}</p>
         <hr className="border-none h-[1.5px] w-8 bg-[#BF9A33]" />
      </div>
      {currentState === 'Login' ? '' : <input type='text' className='w-full px-3 py-2 border border-gray-800 dark:border-white dark:text-white' placeholder='Name' required/>}
      <input type='email' className='dark:border-white dark:text-white w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
      <input type='password' className='dark:border-white dark:text-white w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>
      <div className="w-full flex justify-between text-sm mt-[8px]">
        <p className="cursor-pointer hover:text-[#BF9A33] dark:text-white">Forgot your password?</p>
        {
         currentState === 'Login' 
         ? <p onClick={()=>setCurrentState('Sign Up')} className="dark:text-white cursor-pointer hover:text-[#BF9A33]">Create Account</p>
         : <p onClick={()=>setCurrentState('Login')}  className="dark:text-white cursor-pointer hover:text-[#BF9A33]">Login Here</p>
        }
      </div>
      <button className="cursor-pointer hover:bg-[#A57B0A] bg-[#BF9A33] text-white font-light px-8 py-2 mt--4">{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
