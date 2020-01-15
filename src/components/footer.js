import React from "react"
import { Link } from "gatsby"

const Footer = ({ siteTitle }) => (
  <footer className={`${`dark-gray`}`}>
     <p className={`${`wrapper-lg`}`}>© Zoraida Cabrera-Mieles 2020</p>
      <ul className={`${`wrapper-lg`}`}>
        <li><a href={`mailto:zmcabrera@gmail.com`}>zmcabrera@gmail.com</a></li>
        <li>
          <a href={`https://github.com/zoracreates`}>Github</a>
        </li>
        <li>
          <a href={`https://twitter.com/zoracreates/`}>Twitter</a>
        </li>
       <li>
          <a href={`https://www.linkedin.com/in/zoracabrera/`}>LinkedIn</a>
       </li>
       <li>
          <a href={`https://medium.com/@zoracreates`}>Medium</a>
       </li>
       <li>
          <Link to="/blog">Blog</Link>
       </li>
      </ul>

  </footer>
)

export default Footer
