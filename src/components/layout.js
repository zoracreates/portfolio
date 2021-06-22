/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./content/header"
import Footer from "./content/footer"
import "./styles/main.scss"

const Layout = ({ children, active }) => {
  return (
    <div id={active}>
      <Header active={active}  />
        {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.string.isRequired
}

export default Layout
