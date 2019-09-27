import React from "react"
import firebase from "../../services/firebase"

const WithUser = () => {
  const handleSignOut = () => {
    firebase.auth().signOut()
  }
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Profile</li>
        <li>
          <button onClick={handleSignOut}>Sign Out</button>
        </li>
      </ul>
    </nav>
  )
}

export default WithUser
