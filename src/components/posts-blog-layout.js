import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PostSEO from "./posts-seo"
import Layout from "./layout"
import { Link } from "gatsby"
import { formatDate } from "../helpers/formatData"
import { BlogPostWrapper } from "./wrappers"


export default function BlogPostTemplate({ data, pageContext }) {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  const navExists = () => {
    if (previous != null || next != null) {
      return true
    }
    return false
  }

  return (
    <>
      <PostSEO title={frontmatter.title} tags={frontmatter.tags} description={frontmatter.description} />

      <Layout active={`post`}>
        <BlogPostWrapper>
          <h1>{frontmatter.title}</h1>
          <main>
            <p className={`u-small`}><span className={`label`}>Posted</span><time dateTime={formatDate(frontmatter.date)}> {frontmatter.date}</time></p>
            <MDXRenderer>{body}</MDXRenderer>
          </main>
        </BlogPostWrapper> 
 {navExists() &&
        <nav>
          <div className={`wrapper-lg post-nav`}>
            {previous === false ? null : (
              <>
                {pageContext.previous && (
                  <h2>
                    <Link to={previous.node.fields.slug}>
                      <span>Previous</span>
                      {previous.node.frontmatter.title}
                    </Link>
                  </h2>
                )}
              </>
            )}
            {pageContext.next === false ? null : (
              <>
                {pageContext.next && (
                  <h2 className={'block-right'}>
                    <Link to={next.node.fields.slug}>
                      <span>Next</span>
                      {next.node.frontmatter.title}
                    </Link>
                  </h2>
                )}
              </>
            )}
          </div>
        </nav>}
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
        description
      }
    }
  }
`