import React from 'react'
import fp from '../assets/Forget_password.png'
import { Link } from 'react-router-dom'

export default function Forget_Password() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-0.9 h-0.9 object-cover align-middle' src={fp} alt=''/>
        </div> 

        <div className='bg-[#ffffff] flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-[#390DA0] px-8 py-10 rounded-lg'>
                <h2 className='text-4xl text-white font-bold text-center my-2 mb-4'>Forget Password</h2>
                <div className='flex flex-col text-white py-2'>
                    <label>Enter Email</label>
                    <input className='rounded-lg bg-gray-300 mt-2 p-2 text-black focus:border-blue-500 focus:bg-gray-300 focus:text-black focus:outline-none' type="email" placeholder='Enter email'/>
                </div>
                <Link to="/Reset_Password"><button className='w-full my-5 py-2 bg-[#415FEB] shadow-lg shadow-[#415FEB]/50 hover:shadow-[#415FEB]/40 text-white font-semibold rounded-lg'>Forget Password</button></Link>
            </form>
        </div>   
    </div>
  )
}
