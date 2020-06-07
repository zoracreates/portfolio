import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import { WrapperLg } from "../components/wrappers"
import Writing from "../components/content/writing"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMdx;

  return (
    <Layout active={'home'}>
      <SEO title="Home" />
      <main>
        <div className={`hero-band hero-band`}>
          <WrapperLg>
            <h1>I'm Zoraida, <br /> UX Designer &amp; Researcher</h1>
            <p className={`hero-text`}>
              I conduct usability research for web apps, facilitate design workshops, establish visual guidelines for websites,
              and theme with CSS and a sprinkle of JavaScript.
          </p>
          </WrapperLg>
        </div>

        <Writing styleName="wrapper-lg">

          <h3>Recent Blog Posts</h3>

          <ul className={`blog-list`}>
            {posts.map(({ node: post }) => (

              <li key={post.id}>
                <Link to={post.fields.slug}>
                  <h4>{post.frontmatter.title}</h4>
                </Link>
                <p className={`u-small`}><span className={`label`}>Posted</span> {post.frontmatter.date}</p>
                <p className={`u-med`}>{post.excerpt}</p>
              </li>

            ))}
          </ul>

          <Link className={`text-btn`} to={`/blog`}>See All Posts</Link>

        </Writing>

      </main>
    </Layout>
  )
}


export const pageQuery = graphql`
  query recentPosts {
    allMdx (
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
      limit: 2
      ) {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
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

export default IndexPage