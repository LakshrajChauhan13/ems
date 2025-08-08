import React, { useState } from 'react'

const Login = (props) => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    function submitHandler(e){
        // console.log("submitted" )
        e.preventDefault() ;
        props.HandleLogin(Email,Password)
        setPassword('')
        setEmail('')
        // console.log("user's email id " , Email)
        // console.log(" user's password", Password)
    }

  return (
    <div className='flex items-center justify-center h-screen w-screen' >
        <div className='border-2 border-yellow-200 p-15 rounded-2xl'>
            <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col items-center justify-center'>
                <input 
                value={Email} 
                onChange={(e)=>{setEmail(e.target.value)}}
                required  
                type="Email" placeholder='Enter your email' className='border-2 border-amber-200 rounded-full text-2xl px-5 py-3 mb-4 outline-none bg-transparent' />
               
                <input 
                value={Password}
                onChange={(e)=>{setPassword(e.target.value)}} 
                required 
                type="Password"  placeholder='Enter password' className='border-2 border-amber-200 rounded-full text-2xl px-5 py-3 mb-8 outline-none bg-transparent' />
                <button className='border-2 border-amber-200 rounded-full text-2xl px-2 w-full py-2 mb-2 bg-yellow-400 font-semibold outline-none' > Log In </button>
            </form>
        </div>

    </div>
  )
}

export default Login