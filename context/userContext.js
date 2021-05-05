
import { createContext, useContext } from 'react'

export const UserContext = createContext()

export default function UserContextComp({ children }) {
  return (
    <UserContext.Provider value={{}}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
