import React, { useState, useContext } from "react"
import firebase from "../../services/firebase"

const INITIAL_USER = {
  name: "",
  email: "",
  password: "",
}

const Signup = () => {
  const [user, setUser] = useState(INITIAL_USER)

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
      console.log(res.user)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
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

export default Signup
