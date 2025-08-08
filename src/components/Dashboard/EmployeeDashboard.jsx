import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashboard = ({data}) => {
    console.log({data})
  return (
    <div className='bg-[#1C1C1C] h-screen w-screen p-10'>
        <h1> {data.id} </h1>
        <Header data = {data} />  
        <TaskListNumbers data = {data} />
        <Tasklist data = {data} />
    </div>
  )
}

export default EmployeeDashboard
