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
        <WrapperLg>
            <h1>Hola, I'm Zoraida</h1>
            <h2>UX Designer/Researcher</h2>
            <p className={`hero-text wrapper-md`}>
            I work at Harvard University, conducting usability research for places like NASA, 
            as well as designig and theming department websites. 
            I’m passionate about ethical and inclusive design practices. 
            And I’m curious about the intersection of interaction design with voice and writing.
          </p>
          <ul>
            <li><a className={`text-btn`}>Read some thoughts</a></li>
            <li><a className={`text-btn`}>Listen to talks</a></li>
          </ul>
          </WrapperLg>
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

            <Link className={`text-btn`} to={`/blog`}>See All Blog Posts</Link>
      
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