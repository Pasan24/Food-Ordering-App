import React from 'react'
import Image from 'next/image'
export default function RegisterPage() {
  return (
   <section className='mt-8'>
    <h1 className=' text-center text-red-500 text-4xl mb-4 font-semibold '>
        Register
    </h1>

    <form className='block max-w-xs mx-auto'>
     
      <input type='email' placeholder='email'></input>
      <input type='password' placeholder='password'></input>
      <button type='submit'> Register</button>
      <div className='my-4 text-center text-gray-500'>
        or login with provider
      </div>

      <button 
        className='flex w-full items-center justify-center gap-8 p-2 border rounded-md hover:bg-gray-100'
      >
        <Image 
          src={'/google.png'} 
          alt="Google logo" 
          width={24} 
          height={24} 
          className='inline-block'
        />
        <span>  With Google</span>
      </button>

      
    </form>
   </section>
  )
}
