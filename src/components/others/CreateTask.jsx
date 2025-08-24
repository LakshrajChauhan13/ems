import React, { useState } from 'react'



const CreateTask = () => {

  const [Tasktitle, setTasktitle] = useState("")
  const [Date, setDate] = useState("")
  const [AssignTo, setAssignTo] = useState("")
  const [Category, setCategory] = useState("")
  const [TaskDescription, setTaskDescription] = useState("")

  function submitHandler(e){
    e.preventDefault()
    console.log(TaskDescription , Tasktitle , Date , AssignTo , Category);
    setTasktitle("")
    setDate("")
    setAssignTo("")
    setCategory("")
    setTaskDescription("")
  }

  return (
    <div>
        <form className='mt-10 flex justify-between items-start p-5 bg-[#1C1C1C] rounded' onSubmit={(e)=>{submitHandler(e)}} >
            <div className=' w-[45%]'>
                <h1 className='text-xl'>Task Title</h1>
                <input
                value={Tasktitle}
                onChange={(e)=>{setTasktitle(e.target.value)}} 
                type="text" 
                placeholder='Make A UI Design' 
                className=' border-2 mt-1 mb-4 rounded w-full p-1  text-gray-400'/>
                
                <h1 className='text-xl'>Date</h1>
                <input
                value={Date}
                onChange={(e)=>{setDate(e.target.value)}}  
                type="date" 
                placeholder='dd/mm/yyyy' 
                className=' border-2 mt-1 mb-4 rounded w-full p-1  text-gray-400' />

                <h1 className='text-xl'>Assign To</h1>
                <input
                value={AssignTo}
                onChange={(e)=>{setAssignTo(e.target.value)}}  
                type="text" 
                placeholder='employee name' 
                className=' border-2 mt-1 mb-4 rounded w-full p-1  text-gray-400' />

                <h1 className='text-xl'>Category</h1>
                <input
                value={Category}
                onChange={(e)=>{setCategory(e.target.value)}}  
                type="text" 
                placeholder='Design, Dev, etc..' 
                className=' border-2 mt-1 mb-4 rounded w-full p-1 text-gray-400' />
            </div>
            <div className='h-80 w-[40%] flex flex-col'>
                <h1 className='text-xl'>Description</h1>
                <textarea
                value={TaskDescription}
                onChange={(e)=>{setTaskDescription(e.target.value)}} 
                name="" id="" className='border-2 w-full h-55 mt-1 p-1 rounded'></textarea>

                <button className='w-full text-xl py-3 font-semibold mt-4 bg-emerald-500 outline-none rounded'> Create Task</button>
            </div>
           
        </form>
    </div>
  )
}

export default CreateTask