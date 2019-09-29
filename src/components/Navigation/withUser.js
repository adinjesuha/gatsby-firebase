import React from "react"
import { Link } from "gatsby"
import firebase from "../../services/firebase"

const WithUser = () => {
  const handleSignOut = () => {
    firebase.auth().signOut()
  }
  return (
    <nav>
      <ul>
        <li>
          <Link to="/app/home">Home</Link>
        </li>
        <li>
          <Link to="/app/create-post">Add Post</Link>
        </li>
        <li>
          <Link to="/app/profile">Profile</Link>
        </li>
        <li>
          <button onClick={handleSignOut}>Sign Out</button>
        </li>
      </ul>
    </nav>
  )
}

export default WithUser
