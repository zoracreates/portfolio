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
        <div className={`hero-band`}>
          <WrapperLg>
            <h1>I'm Zoraida,<span> UX Designer/Researcher </span></h1>
            <p className={`hero-text wrapper-md`}>
              With a background in digital media design, web programming, and design research,
              I create and improve digital products and experiences for <a href="https://hwp.harvard.edu/people/zoraida-cabrera-mieles" target="_blank" rel="noopener noreferrer">Harvard University</a>.
              On a more personal note, I’m learning to become a better advocate for ethical and inclusive design.
          </p>
          </WrapperLg>
        </div>

        <Writing styleName={`wrapper-lg`}>


          <h3 className={`u-header`}>Recent Blog Posts</h3>

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

        <Speaking styleName={`wrapper-lg`} />

        <section className={`cols-20-80 wrapper-lg`}>

          <h2 className={`col`}>Get In Touch</h2>




          <div className={`col no-hover-effect cta`}>
            <h4>Want to work together?</h4>
            <p>If you're looking for a speaker, writer, or
              are new to the field and would like to chat, send me a note! </p>

            <a className={`btn`} href="mailto:zmcabrera@gmail.com">Email Me</a>

          </div>



        </section>


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