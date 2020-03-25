import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import { WrapperLg } from "../components/wrappers"
import { Link } from "gatsby"


const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (

    <Layout active={'blog'}>
      
      <SEO title="Blog" />
      <main>
        <div className={`hero-band hero-band`}>
          <WrapperLg>
            <h1>Blog</h1>
            <ul className={`wrapper-md blog-list`}>
        {posts.map(({ node: post }) => (
          
          <li className={`raised-card`} key={post.id}>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <p className={`u-small`}><span className={`label`}>Posted</span> {post.frontmatter.date}</p>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
          </WrapperLg>
        </div>
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

