import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import { formatDate } from "../helpers/formatData"
import { WrapperLg } from "../components/wrappers"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (

    <Layout active={'blog'}>
      <SEO title="Blog" />
      <main>
        <div className={`hero-band hero-band`}>
          <WrapperLg>
            <h1>Blog</h1>
          </WrapperLg>
        </div>
        <WrapperLg>
        <ul className={`wrapper-md post-list`}>
        {posts.map(({ node: post }) => (
          
          <li className={`raised-card`} key={post.id}>
            <h2><Link to={post.fields.slug}>
              {post.frontmatter.title}
            </Link>
            </h2>
            <p className={`u-small`}><span className={`label`}>Posted:</span><time dateTime={formatDate(post.frontmatter.date)}> {post.frontmatter.date}</time></p>
            <p>{post.excerpt}</p>
          </li>
          
        ))}
      </ul>
        </WrapperLg>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx (
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
      ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date (formatString: "MMMM DD, YYYY ")
          }
          fields {
            slug
          }
        }
      }
    }
  }`

export default BlogIndex

