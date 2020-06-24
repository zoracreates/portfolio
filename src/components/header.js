import React from "react"
import { Link } from "gatsby"
import SocialIcons from "./content/socialIcons"
import Logo from "../images/z-logo-blue.png"
import PropTypes from "prop-types"

class Header extends React.Component {
  state = { 
    activeHome: this.props.active === 'home' ? 'active' : '',
    activeBlog: this.props.active === 'blog' ? 'active' : '',
    activeContact: this.props.active === 'contact' ? 'active' : '',
  }


  render() {
    console.log(this.state.activeHome);

    return (
      <header className={`wrapper-lg`}>
        <div className={`logo`}>
          <Link to="/">
            <img src={Logo} alt="logo" />
            <span className={`sr-only`}>Home</span>
          </Link>
        </div>
        <div>
            <ul>
            <li className={`${this.state.activeHome}`}><Link to="/">Portfolio</Link></li>
            <li className={`${this.state.activeBlog}`}><Link to="/blog">Blog</Link></li>
            <li className={`${this.state.activeContact}`}><Link to="/blog">Contact</Link></li>
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