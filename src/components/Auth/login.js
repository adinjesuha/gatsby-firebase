import React, { useState } from "react"
import { navigate } from "gatsby"
import firebase from "../../services/firebase"

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        console.log("login")
        navigate(`/app/home`, { replace: true })
      })
      .catch(err => {
        console.error(err)
      })
  }
  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <button>Add Time Entry</button>
      </form>
    </>
  )
}

export default Login
