import React from "react"
import { Link } from "gatsby"
import SocialIcons from "./content/socialIcons"
import Logo from "../images/z-logo-blue.png"
import PropTypes from "prop-types"

class Header extends React.Component {
  state = { 
    activeHome: this.props.active === 'home' ? 'active' : '',
    activeBlog: this.props.active === 'blog' ? 'active' : '',
  }


  render() {
    console.log(this.state.activeHome);

    return (
      <header>
        <div className={`wrapper-lg`}>
        <Link className={`logo`} to="/">Zoraida</Link>
            <ul>
            <li className={`${this.state.activeHome}`}><Link to="/">Home</Link></li>
            <li className={`${this.state.activeBlog}`}><Link to="/blog">Blog</Link></li>
            <li><a className={`btn`} href="mailto:zmcabrera@gmail.com">zmcabrera@gmail.com</a></li>
          </ul>
          
        </div>
        
      </header>

    )
  }

}

Header.prototypes = {
  active: PropTypes.string.isRequired
}

export default Header