import React from "react"
import { Link } from "gatsby"
import SocialIcons from "./content/socialIcons"
import Logo from "../images/z-logo-blue.png"
import PropTypes from "prop-types"

const Header = ({active}) => (
  <header className={`wrapper-lg`}>
    <div className={`logo`}>
      <Link to="/">
      <img src={Logo} alt="logo"/>
      <span className={`sr-only`}>Home</span>
      </Link>
    </div>
    <div>
      <a  href={`mailto:zmcabrera@gmail.com`}>zmcabrera@gmail.com</a>
      <SocialIcons />
      {active === 'home' &&  <p><Link className={`text-btn-fwd`} to="/blog">Read Blog</Link></p>}
      {active === 'blog' &&  <p><Link className={`text-btn-back`} to="/">Back Home</Link></p>}
      {active === 'post' &&  <p><Link className={`text-btn-back`} to="/blog">All Blog Posts</Link></p>}
    </div>
  </header>
)

Header.prototypes = {
  active: PropTypes.string.isRequired
}

export default Header