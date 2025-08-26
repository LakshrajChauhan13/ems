import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

  const [UserData, setUserData] = useState(null)
  // localStorage.clear()

  useEffect(() => {
    const {employees} = getLocalStorage()
    setUserData(employees) 
  }, [])

  return (
    <div>
      <AuthContext.Provider value={[UserData , setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
 