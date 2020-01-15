import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className={`wrapper-lg`}>
    <div>
      <a href={`mailto:zmcabrera@gmail.com`}>zmcabrera@gmail.com</a>
      <ul>
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
    </div>
  </header>
)

export default Header