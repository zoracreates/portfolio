import React from "react"
import { Link } from "gatsby"
import SocialIcons from "./socialIcons"

const Footer = ({ siteTitle }) => (
  <footer className={`${`dark-gray`}`}>
    <div className={`${`wrapper-lg`}`}>
    <p>© Zoraida Cabrera-Mieles 2020</p>
    <p><a  href={`mailto:zmcabrera@gmail.com`}>zmcabrera@gmail.com</a></p>
    <p><Link to="/blog">Read Blog</Link></p>
     
     
      <SocialIcons />
    

    </div>

  </footer>
)

export default Footer
