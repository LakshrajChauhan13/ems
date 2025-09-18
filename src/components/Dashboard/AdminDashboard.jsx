import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'
import { Route, Routes } from 'react-router-dom'

const AdminDashboard = (props) => {
  return (
    <div className='w-full h-screen p-10 '>
        <Header changeUser = {props.changeUser} />
        <CreateTask />
        <AllTask />
        <Routes>
          <Route path='/admin' ></Route>
        </Routes>
    </div>
  )
}

export default AdminDashboard