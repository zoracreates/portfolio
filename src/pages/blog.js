import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import { WrapperLg } from "../components/wrappers"


const BlogIndex = () => (
  <Layout active={'blog'}>
    <SEO title="Blog" />
    <main>
      <div className={`hero-band hero-band`}>
        <WrapperLg>
          <h1>Blog</h1>
        </WrapperLg>
      </div>
    </main>
  </Layout>
)

export default BlogIndex