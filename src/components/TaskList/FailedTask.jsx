import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='h-full w-100 bg-teal-300 flex-shrink-0 px-7 py-5 rounded-xl'>
            <div className=' flex justify-between items-center'>
                <h1 className='bg-red-500 px-3 py-1 text-sm font-medium rounded'> {data.category}</h1>
                <h2 className='font-bold  '> {data.taskDate} </h2>
            </div>
            <h2 className='text-3xl mt-6 font-bold'> {data.taskTitle} </h2>
            <p className='font-normal mt-2'> {data.taskDescription} </p>
            <div className='bg-red-500 flex items-center justify-center w-full mt-3 rounded px-3 py-1 text-sm'>
            <h1>Failed</h1>
            </div>
        </div>
  )
}

export default FailedTask