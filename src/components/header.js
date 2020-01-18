import React from "react"
import { Link } from "gatsby"
import SocialIcons from "./socialIcons"
import Logo from "../images/z-logo.png"

const Header = ({ siteTitle }) => (
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
      <p><Link className={`text-btn`} to="/blog">Read Blog</Link></p>
    </div>
  </header>
)

export default Header