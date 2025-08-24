import React, { use, useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [User, setUser] = useState(null)
  const [LoggedinUserData, setLoggedinUserData] = useState(null)
  const AuthData = useContext(AuthContext)
  console.log(AuthData)

  const handleLogin = (email,password) => {
      if (email == "admin@me.com" && password == 123) {
        console.log("hi admin")
        setUser("admin")
        localStorage.setItem('loggedInUser', JSON.stringify({role:"admin"})) 
      }

      else if (AuthData) {
        const employe = AuthData.employees.find((e)=> email == e.email && password == e.password)
        if(employe){
          setUser("employee")
          setLoggedinUserData(employe)
          localStorage.setItem('loggedInUser', JSON.stringify({role:"employee", data: employe}))
        }
       // console.log("hi employee")
        
      }
      else{
        alert("Invalid credentials")
      }
  }

   useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedinUserData(userData.data)
    }
   }, [])
   


   useEffect(() => {
    setLocalStorage()
  }, )


  return (
    <>
    {!User ? <Login HandleLogin ={handleLogin} /> : ''}
    {User == "admin" && <AdminDashboard changeUser={setUser} /> } {/* if user is admin then will only render the AdminDashboard component , yeah in general && operator checks both the condition to let the control flow enter inside it,  but here it behaves in a special way when used for conditional rendering in React.*/}
    {User == "employee" && <EmployeeDashboard data={LoggedinUserData} changeUser={setUser}/> } {/* if user is employee then will only render the EmployeeDashboard component
   

    {/* {
      if(!User) {
        <Login />
      }
    } */}
    
    {/* <Login /> */}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
}

export default App
 
