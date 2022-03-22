/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const postPath = createFilePath({ node, getNode })
    
    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `${postPath}`,
    })
  }


}

const path = require("path")

//create blog pages
exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  const blogResult = await graphql(`
    query PostQuery {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } , fileAbsolutePath: {regex: "/posts/blog/"} }
      ){
        edges {
          node {
            fileAbsolutePath
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  if (blogResult.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query for blog')
  }

  // Create blog post pages.
  const blogPosts = blogResult.data.allMdx.edges

  // you'll call `createPage` for each result
  blogPosts.forEach(({ node }, index) => {

    const previous = index === blogPosts.length - 1 ? null : blogPosts[index + 1];
    const next = index === 0 ? null : blogPosts[index - 1];

    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/posts-blog-layout.js`),
      // You can use the values in this context in
      //  our page layout component
      context: {
        id: node.id,
        previous: previous,
        next: next,
      },
    })
  })

  //create work pages
  const workResult = await graphql(`
    query WorkQuery {
      allMdx(
        sort: { fields: [frontmatter___importance], order: ASC }
        filter: { frontmatter: { published: { eq: true } } , fileAbsolutePath: {regex: "/posts/work/"} }
      ){
        edges {
          node {
            fileAbsolutePath
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  if (workResult.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query for work')
  }

  // Create work post pages.
  const workPosts = workResult.data.allMdx.edges



  // you'll call `createPage` for each result
  workPosts.forEach(({ node }, index) => {

    const previous = index === workPosts.length - 1 ? null : workPosts[index + 1];
    const next = index === 0 ? null : workPosts[index - 1];

    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/work-posts/posts-work-layout.js`),
      // You can use the values in this context in
      // our page layout component
      context: {
        id: node.id,
        previous: previous,
        next: next,
      },
    })
  })


}





