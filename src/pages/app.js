import React from "react"
import { Router } from "@reach/router"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useUser } from "../store/"
import Home from "../components/DynamicRoutes/Home"
import AddPost from "../components/DynamicRoutes/AddPost"
import Profile from "../components/DynamicRoutes/Profile"
import LogIn from "../components/Auth/login"

const PrivateRoute = ({ component: Component, location, user, ...rest }) => {
  if (!user) {
    navigate(`/app/login`, { replace: true })
    return null
  }
  return <Component user={user} {...rest} />
}

const App = () => {
  const user = useUser()
  return (
    <Layout>
      <SEO title="App" />
      <h1>Protected routes</h1>
      <Router>
        <LogIn path="/app/login" />
        <PrivateRoute user={user} path="/app/home" component={Home} />
        <PrivateRoute user={user} path="/app/create-post" component={AddPost} />
        <PrivateRoute user={user} path="/app/profile" component={Profile} />
      </Router>
    </Layout>
  )
}

export default App
