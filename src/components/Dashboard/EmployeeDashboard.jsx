import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashboard = (props) => {
    console.log(props)
  return (
    <div className='bg-[#1C1C1C] h-screen w-screen p-10'>
        <h1> {props.data.id} </h1>
        <Header changeUser={props.changeUser} data = {props.data} />  
        <TaskListNumbers data = {props.data} />
        <Tasklist data = {props.data} />
    </div>
  )
}

export default EmployeeDashboard
