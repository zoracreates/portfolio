import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <main className={`wrapper-lg`}>
    <h1>NOT FOUND</h1>
    <p>Oops that page doesn't exist <Link to="/">let's go back home</Link>.</p>
    </main>
  </Layout>
)

export default NotFoundPage
