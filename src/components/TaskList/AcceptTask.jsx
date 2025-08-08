import React from 'react'

const AcceptTask = ({data}) => {
    console.log()
  return (
     <div className='h-full w-100 bg-amber-200 flex-shrink-0 px-7 py-5 rounded-xl'>
            <div className=' flex justify-between items-center'>
                <h1 className='bg-red-500 px-3 py-1 text-sm font-medium rounded'> {data.category} </h1>
                <h2 className='font-bold  '> {data.taskDate} </h2>
            </div>
            <h2 className='text-3xl mt-6 font-bold'> {data.taskTitle} </h2>
            <p className='font-normal mt-2'> {data.taskDescription} </p>
            <div className='flex justify-between items-center mt-3'>
                <button className='bg-green-500 px-3 py-1 rounded text-sm '> Mark as Completed</button>
                <button className='bg-red-500 px-3 py-1 rounded text-sm '> Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask