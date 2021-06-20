import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { WrapperLg } from "../components/wrappers"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Img from "gatsby-image"

const WorkIndex = ({ data }) => {
  const { edges: posts } = data.allMdx


  return (

    <Layout active={'work'}>
      <SEO title="Work" />
      <main>
        <div className={`hero-band`}>
          <WrapperLg>
            <h1>Work</h1>
            </WrapperLg>
        </div>
        <WrapperLg>
        <ul className={`post-list block-center`}>
        {posts.map(({ node: post }) => (
          <li className={`card cols-40-60`} key={post.id}>
            <div className={`col`}>
                <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} alt={post.frontmatter.featuredImageAlt} />
            </div>
            <div className={`col card-title`}>
                <h2>
                <Link to={post.fields.slug}>
                    {post.frontmatter.title}
                </Link>
                </h2>
                <p className={`u-small`}><span className={`label`}>Project Type:</span> {post.frontmatter.categories}</p>
            </div>
          </li>
          
        ))}
      </ul>
      <section>
            <h2>Want learn more?</h2>
            <p>If you want to see more of my work or talk about what I do, get in touch!</p>
            <a className={`btn`} href="mailto:zmcabrera@gmail.com">Email Me</a>
        </section>
        </WrapperLg>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query workIndex {
    allMdx (
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: {regex: "/posts/work/"} }
      ) {
      edges {
        node {
          fileAbsolutePath
          id
          frontmatter {
            title
            categories
            featuredImageAlt
            featuredImage {
                childImageSharp {
                    fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
          }
          fields {
            slug
          }
        }
      }
    }
  }`

export default WorkIndex

