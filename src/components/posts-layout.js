import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PostSEO from "./posts-seo"
import Layout from "./layout"

export default function PageTemplate({ data: { mdx } }) {
  return (
    <>
       <PostSEO title={mdx.frontmatter.title} tags={mdx.frontmatter.tags}/>
    <Layout active={`post`}>
      <main className={`wrapper-lg`}>
      <h1>{mdx.frontmatter.title}</h1>
      {console.log(mdx.frontmatter.date)}
      <p>Posted {mdx.frontmatter.date && new Date(mdx.frontmatter.date).toLocaleDateString()}</p>
      <MDXRenderer>{mdx.body}</MDXRenderer>
      </main>
    </Layout>
    </>
  )
}
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        tags
        date
      }
    }
  }
`