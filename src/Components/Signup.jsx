import React from 'react'
import SUImg from '../assets/Signup.png'

export default function Signup() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-0.9 h-0.9 object-cover align-middle' src={SUImg} alt=''/>
        </div> 

        <div className='bg-[#ffffff] flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-[#390DA0] px-8 py-10 rounded-lg'>
                <h2 className='text-4xl text-white font-bold text-center my-2 mb-4'>Sign Up</h2>
                <div className='flex flex-col text-white py-2'>
                    <label>Enter User Name</label>
                    <input className='rounded-lg bg-gray-300 mt-2 p-2 text-black focus:border-blue-500 focus:bg-gray-300 focus:text-black focus:outline-none' type="text" placeholder='Enter user name'/>
                </div>
                <div className='flex flex-col text-white py-2'>
                    <label>Enter Email</label>
                    <input className='rounded-lg bg-gray-300 mt-2 p-2 text-black focus:border-blue-500 focus:bg-gray-300 focus:text-black focus:outline-none' type="email" placeholder='Enter email'/>
                </div>
                <div className='flex flex-col text-white py-2'>
                    <label>Enter Password</label>
                    <input className='rounded-lg bg-gray-300 mt-2 p-2 text-black focus:border-blue-500 focus:bg-gray-300 focus:text-black focus:outline-none' type="password" placeholder='Enter password'/>
                </div>
                <button className='w-full my-5 py-2 bg-[#415FEB] shadow-lg shadow-[#415FEB]/50 hover:shadow-[#415FEB]/40 text-white font-semibold rounded-lg'>Create Account</button>
            </form>
        </div>   
    </div>
  )
}
