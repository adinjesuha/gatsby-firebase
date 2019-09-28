import React from "react"
import { Link } from "gatsby"

const WithNonUser = () => {
  return (
    <nav>
      <ul>
        <li>Login</li>
        <li>Sign up</li>
        <Link to="/app/home">Home</Link>
      </ul>
    </nav>
  )
}

export default WithNonUser
