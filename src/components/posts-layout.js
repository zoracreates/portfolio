import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PostSEO from "./posts-seo"
import Layout from "./layout"
import { Link } from "gatsby"


export default function PageTemplate({ data, pageContext }) {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;

  return (
    <>
      <PostSEO title={frontmatter.title} tags={frontmatter.tags} />

      <Layout active={`post`}>

        <main className={`wrapper-lg`}>
          <h1>{frontmatter.title}</h1>
          <p>Posted {frontmatter.date}</p>
          <MDXRenderer>{body}</MDXRenderer>
        </main>

        <aside className={`wrapper-lg post-nav`}>
        {previous === false ? null : (
          <>
            {pageContext.previous && (
              <div>
                <h2>Previous</h2>
                <Link to={previous.node.fields.slug}>
                  <p>{previous.node.frontmatter.title}</p>
                </Link>
              </div>
            )}
          </>
        )}
        {pageContext.next === false ? null : (
          <>
            {pageContext.next && (
              <div>
                <h2>Next</h2>
                <Link to={next.node.fields.slug}>
                  <p>{next.node.frontmatter.title}</p>
                </Link>
              </div>
            )}
          </>
        )}
        </aside>
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
        date (formatString: "MMMM DD, YYYY ")
      }
    }
  }
`