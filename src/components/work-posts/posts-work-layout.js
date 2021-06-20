import React from "react"
import Img from "gatsby-image"
import { MDXProvider } from "@mdx-js/react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PostSEO from "../posts-seo"
import Layout from "../layout"
import { Link } from "gatsby"
import { WorkPostWrapper, WrapperSmCenter } from "../wrappers"


export default function ProjectTemplate({ data, pageContext, children}) {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  const shortcodes = { WrapperSmCenter }

  const navExists = () => {
    if (previous != null || next != null) {
      return true
    }
    return false
  }

  return (
    <>
      <PostSEO title={frontmatter.title} tags={frontmatter.categories} description={frontmatter.description} />
       
      <Layout active={`post`}>
        <MDXProvider components={shortcodes}>
          <WorkPostWrapper>
            <main>
             <WrapperSmCenter>

              <Img className="featured-image" fluid={frontmatter.featuredImage.childImageSharp.fluid} alt={frontmatter.featuredImageAlt} />
              
              <h1>{frontmatter.title}</h1>

              </WrapperSmCenter>
              <MDXRenderer>
                {body}
              </MDXRenderer>
            </main>
          </WorkPostWrapper> 
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
          </MDXProvider>
      </Layout>
    </>
  )
}
export const pageQuery = graphql`
  query ProjectQuery($id: String) {
    mdx(
    id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        categories
        description
        featuredImageAlt
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`