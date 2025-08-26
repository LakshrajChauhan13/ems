import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'


const Tasklist = ({data}) => {
  return (
    <div id='tasklist' className='h-80 mt-7 flex flex-nowrap overflow-x- gap-3'>
    {data.tasks.map((e,idx)=>{
        
        if (e.active){
           return <AcceptTask key={idx} data={e} />
        }
        if (e.newTask){
           return <NewTask key={idx} data={e} />
        }
        if (e.completed){
           return <CompleteTask key={idx} data={e}/>
        }
        if (e.failed){
           return <FailedTask key={idx} data={e}/>
        }
        
    })}        
        
{/* 
        <AcceptTask />

        <CompleteTask />
        
        <NewTask />

        <FailedTask /> */}
    </div>
  )
}

export default Tasklist