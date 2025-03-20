import React, { useState } from 'react'

export const UserDataContext = createContext()

const UserContext = ({ children }) => {

  useState[user, setUser] = useState({
    email: '',
    fullName: {
      firstName: '',
      lastName: ''
    }
  })
  return (
    <div>
      <UserDataContext.provide value={[user, setUser]}>
        {children}
      </UserDataContext.provide>
    </div>
  )
}

export default UserContext