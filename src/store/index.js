import React from "react"
import firebase from "../services/firebase"

export const userContext = React.createContext({
  user: null,
})

export const StoreProvider = ({ children }) => {
  const { initializing, user } = useAuth()
  if (initializing) {
    return <div>Loading</div>
  }
  return (
    <userContext.Provider value={{ user }}>{children}</userContext.Provider>
  )
}

// HOOKS

export const useUser = () => {
  const { user } = React.useContext(userContext)
  return user
}

export const useAuth = () => {
  const [state, setState] = React.useState(() => {
    const user = firebase.auth().currentUser
    return {
      initializing: !user,
      user,
    }
  })
  function onChange(user) {
    setState({ initializing: false, user })
  }
  React.useEffect(() => {
    // listen for auth state changes
    const unsubscribe = firebase.auth().onIdTokenChanged(onChange)
    // unsubscribe to the listener when unmounting
    return () => unsubscribe()
  }, [])
  return state
}
