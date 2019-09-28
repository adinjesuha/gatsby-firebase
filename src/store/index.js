import React from "react"
import firebase from "../services/firebase"
import { db } from "../services/firebase"

export const userContext = React.createContext({
  user: null,
  posts: null,
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

// Hook to use user within context

export const useUser = () => {
  const { user } = React.useContext(userContext)
  return user
}

// Hook to update state with firebase auth

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

// Hook to fetch data from firebase

export const useData = id => {
  // initialize our default state
  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    const unsubscribe = db()
      .collection("posts")
      .doc(id)
      .onSnapshot(
        doc => {
          setLoading(false)
          setData(doc)
        },
        err => {
          setError(err)
        }
      )
    // returning the unsubscribe function will ensure that
    // we unsubscribe from document changes when our id
    // changes to a different value.
    return () => unsubscribe()
  }, [id])

  return {
    error,
    loading,
    data,
  }
}
