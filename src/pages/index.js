import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Signup from "../components/Auth/signup"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Signup />
  </Layout>
)

export default IndexPage
