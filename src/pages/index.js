import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import { WrapperLg } from "../components/wrappers"
import Writing from "../components/content/writing"
import Speaking from "../components/content/speaking"
import { formatDate } from "../helpers/formatData"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMdx;

  return (
    <Layout active={'home'}>
      <SEO title="Home" />
      <main>
        <div className={`hero-band background-img-band`}>
        <div className={`wrapper-md block-center`}>
            <h1>I'm Zoraida</h1>
            <h2>Product Designer and Design Researcher</h2>
            <p className={`hero-text`}>
            I work at Harvard University, conducting usability research for places like NASA, 
            as well as designig and theming department websites. 
            I’m passionate about ethical and inclusive design practices. 
            And I’m curious about the connection of  written or spoken words and interaction design.
          </p>
          </div>
        </div>

        <Writing styleName={`wrapper-lg`}>

         
            <h3>From My Blog</h3>

            <ul className={`post-list cols-50-50`}>
              {posts.map(({ node: post }) => (

                <li key={post.id} className={`col card`}>
                  <h4>
                    <Link to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                  </h4>
                  <p className={`u-small`}><span className={`label`}>Posted:</span> <time dateTime={formatDate(post.frontmatter.date)}>{post.frontmatter.date}</time></p>
                  <p className={`u-med`}>{post.excerpt}</p>
                </li>

              ))}
            </ul>

            <Link className={`text-btn-fwd`} to={`/blog`}>See All Blog Posts</Link>
      
        </Writing>

        <Speaking styleName="wrapper-lg" />


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