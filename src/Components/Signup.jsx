import React, {useState} from 'react'
import SUImg from '../assets/Signup.png'
import google_icon from "../assets/google_icon.svg"
import { Link } from 'react-router-dom';

import validator from 'validator'

function Signup() {

    const [errorMessage, setErrorMessage] = useState('') 
  
    const validate = (value) => {
        const options = {
          minLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
        };

        if (value.trim() === '') {
            setErrorMessage('');
        } else if (validator.isStrongPassword(value, options)) { 
            setErrorMessage('Strong Password') ;
        } else { 
            let errorMsg = '';
            if (value.length < options.minLength) {
                errorMsg += 'Length cannot be less than 8 characters. ';
            }
            if (!/[a-z]/.test(value)) {
                errorMsg += 'Password must have at least 1 lowercase letter. ';
            }
            if (!/[A-Z]/.test(value)) {
                errorMsg += 'Password must have at least 1 uppercase letter. ';
            }
            if (!/\d/.test(value)) {
                errorMsg += 'Password must have at least 1 digit. ';
            }
            if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
                errorMsg += 'Password must have at least 1 special character. ';
            }

            setErrorMessage(errorMsg.trim());
        } 
    }; 

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
                    
                    {/* //initial passport section
                    <div className='flex flex-col text-white py-2'>
                        <label>Enter Password</label>
                        {/*<input className='rounded-lg bg-gray-300 mt-2 p-2 text-black focus:border-blue-500 focus:bg-gray-300 focus:text-black focus:outline-none' type="password" placeholder='Enter password'/>
                    </div> */}

                    <div className='flex flex-col text-white py-2'>
                        <label>Enter Password</label>
                        <input className='rounded-lg bg-gray-300 mt-2 p-2 text-black focus:border-blue-500 focus:bg-gray-300 focus:text-black focus:outline-none' type="text" placeholder='Enter password' onChange={(e) => validate(e.target.value)}></input>
                        {errorMessage === '' ? null : 
                            <span className={`mt-1 text-xs ${errorMessage === 'Strong Password' ? 'text-green-500' : 'text-white-500'}`}>{errorMessage}</span>} 
                    </div> 

                    <Link to="/Login"><button className='w-full my-5 py-2 bg-[#415FEB] shadow-lg shadow-[#415FEB]/50 hover:shadow-[#415FEB]/40 text-white font-semibold rounded-lg'>Create Account</button></Link>
                    <div className='text-white py-2 text-center'>
                        <p>or</p>
                        <button className='flex items-center w-full my-5 py-2 bg-[#390DA0] border-2 border-white text-white font-semibold rounded-lg justify-center'><img src={google_icon} className='pr-2'/>Sign Up with Google</button>
                    </div>
                </form>
            </div>   
        </div>
  )
}

export default Signup
