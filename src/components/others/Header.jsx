import React, { useState } from 'react'


const Header = ({data}) => {
    const [Username, setUsername] = useState('')
    // if (!data) {
    //     setUsername("Admin")
    // }
    // else{
    //     setUsername(data.firstName)
    // }

    function logoutUser (){
        localStorage.setItem('loggedInUser', '')
        window.location.reload()
    }

  return (
    <div className='flex justify-between items-end ' >                                                  { /*data.firstName*/} 
        <h1 className='text-2xl font-semibold '> Hello, <br />  <span className='text-3xl font-bold' > Admin👋 </span> </h1>
  { /* onclick functionality */ } <button onClick={logoutUser} className=' bg-red-600 px-3 py-1 rounded font-medium text-lg'> Log Out </button>
    </div>
  )
}

export default Header