import React, { useEffect, useState } from 'react'


const Header = (props) => {
    const [Username, setUsername] = useState('')

    useEffect(() => {
         if (!props.data) {
        setUsername("Admin")
    }
    else{
        setUsername(props.data.firstName)
    }
    }, [props.data])
    

 
    function logoutUser (){
        localStorage.setItem('loggedInUser', '')
        props.changeUser("") // no need to do that window.location.reload(), coz it will reload our page so whats the use of using the react if we had to reload it. So, did this
    }

  return (
    <div className='flex justify-between items-end ' >                                                  { /*data.firstName*/} 
        <h1 className='text-2xl font-semibold '> Hello, <br />  <span className='text-3xl font-bold' > {Username}👋 </span> </h1>
        <button onClick={logoutUser} className=' bg-red-600 px-3 py-1 rounded font-medium text-lg'> Log Out </button>
    </div>
  )
}

export default Header