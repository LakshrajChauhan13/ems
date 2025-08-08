import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div  className='mt-7 h-50 flex justify-between items-center gap-4' >
        <div className='bg-yellow-400 h-35 w-[45%] rounded-xl px-7 py-5 '>
        <h1 className='text-4xl font-bold'> {data.taskCount.newTask} </h1>
        <h2 className='text-3xl font-medium'> New Task </h2>
        </div>
        <div className='bg-blue-400 h-35 w-[45%] rounded-xl px-7 py-5'>
        <h1 className='text-4xl font-semibold'>{data.taskCount.active}</h1>
        <h2 className='text-3xl font-medium'> Active </h2>
        </div>
        <div className='bg-green-400 h-35 w-[45%] rounded-xl px-7 py-5'>
        <h1 className='text-4xl font-semibold'>{data.taskCount.completed} </h1>
        <h2 className='text-3xl font-medium'> Completed </h2>
        </div>
        <div className='bg-red-400 h-35 w-[45%] rounded-xl px-7 py-5'>
        <h1 className='text-4xl font-semibold'>{data.taskCount.failed} </h1>
        <h2 className='text-3xl font-medium'> Failed </h2>
        </div>
    </div>
  )
}

export default TaskListNumbers