import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
   const [UserData , setUserData] = useContext(AuthContext)

  return (
    <div id='AllTask' className=' bg-[#1c1c1c] text-xl p-5 mt-4 rounded'>
    <div className='flex justify-between bg-black text-white font-semibold border p-2 rounded mb-1.5 '> 
            <h1 className='w-1/5'> Employee Name </h1>
            <h2 className='w-1/5'> New Task </h2>
            <h3 className='w-1/5'> Active </h3>
            <h3 className='w-1/5'> Completed </h3>
            <h3 className='w-1/5'> Failed </h3>
        </div>   

    <div> 
        {UserData.map(function(e,idx){
        return <div className='flex justify-between border-2 border-blue-400 px-2 py-2 rounded mb-1.5' key={idx}> 
            <h1 className='w-1/5 text-white'> {e.firstName} </h1>
            <h2 className='w-1/5 text-blue-500'> {e.taskCount.newTask} </h2>
            <h3 className='w-1/5 text-yellow-500'> {e.taskCount.active} </h3>
            <h3 className='w-1/5 text-green-500'> {e.taskCount.completed} </h3>
            <h3 className='w-1/5 text-red-500'> {e.taskCount.failed} </h3>
        </div>
    })}
    </div> 
    </div>
  )
}

export default AllTask