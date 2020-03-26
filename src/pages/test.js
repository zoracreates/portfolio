import React from "react"


import Layout from "../components/layout"
import { WrapperLg } from "../components/wrappers"
import { graphql } from 'gatsby'


const QueryTest = ({ data }) => {
  const { edges: posts } = data.postPages;
  console.log(posts)

  return (

    <Layout active={'blog'}>
      
      <main>
        <div className={`hero-band hero-band`}>
          <WrapperLg>
            <h1>Query Test</h1>
            {/* <ul className={`wrapper-md blog-list`}>
        {posts.map(({ node: post }) => (
          
          <li className={`raised-card`} key={post.id}>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <p className={`u-small`}><span className={`label`}>Posted</span> {post.frontmatter.date}</p>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul> */}
          </WrapperLg>
        </div>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query  testQuery {
   postPages: allMdx (
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

export default QueryTest
// in theory this filter should work once multiple page sources are set for the plugin
//filter: { frontmatter: { published: { eq: true } }, sourceInstanceName: { eq: "posts" } }
//https://github.com/gatsbyjs/gatsby/issues/1634
//https://github.com/gatsbyjs/gatsby/issues/12762
/* TO DO:
  - create a posts/test-project.mdx file with dummy contentt and front-mattter
  - Add a projects folder that will be new source for mdx, and configure it on gatsby-config.js
  - see if you can filter posts only on blog.js
  - expand query on gatsby-node.js to have a "posts" key (with post query), and a "projects" key (with projects query; 
    use the query on this page as a basis
  - configre projects.createPages similar to the posts.createPages on gatsby-node.js
  - create a projects-layout.js file for a template for projects
  - see if a posts/test-project renders on local server
  - see if you can filter for projects only on this test page, to creatte an index of projects here going just like you have on blog.js
  - convert this test.js to projects.js
*/