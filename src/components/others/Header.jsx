import React, { useState } from 'react'


const Header = (props) => {
    const [Username, setUsername] = useState('')
    // if (!data) {
    //     setUsername("Admin")
    // }
    // else{
    //     setUsername(data.firstName)
    // }

    function logoutUser (){
        localStorage.setItem('loggedInUser', '')
        props.changeUser(" ") // no need to do that window.location.reload(), coz it will reload our page so whats the use of using the react if we had to reload it. So, did this
    }

  return (
    <div className='flex justify-between items-end ' >                                                  { /*data.firstName*/} 
        <h1 className='text-2xl font-semibold '> Hello, <br />  <span className='text-3xl font-bold' > Admin👋 </span> </h1>
        <button onClick={logoutUser} className=' bg-red-600 px-3 py-1 rounded font-medium text-lg'> Log Out </button>
    </div>
  )
}

export default Header