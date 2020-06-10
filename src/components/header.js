import React from "react"
import { Link } from "gatsby"
import SocialIcons from "./content/socialIcons"
import Logo from "../images/z-logo-blue.png"
import PropTypes from "prop-types"

class Header extends React.Component {
  state = { 
    menuParentOpen: false,
    activeLink: this.props.active
  }

  toggleMenu = () => {
    this.setState({
      menuParentOpen: !this.state.menuParentOpen
    })
  }

  render() {
    let toggleClass;
    let portfolioMenuText;
    /*use this to create active status probably with a switch statement*/
    let activeLink = this.state.activeLink;
    console.log(activeLink);
    

    if (this.state.menuParentOpen === false) {
      toggleClass = 'closed'
      portfolioMenuText = 'Open Portfolio Menu';
    }
    else {
      toggleClass = 'open'
      portfolioMenuText = 'Close Portfolio Menu';
    }

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
            <li className={`menu-parent ${toggleClass}`}>
            <Link to="/">Portfolio</Link>  <button onClick={() => this.toggleMenu()}>{portfolioMenuText}</button> 
              <ul>
                <li><Link to="/#work">Work</Link></li>
                <li><Link to="/#writing">Writing</Link></li>
                <li><Link to="/#speaking">Speaking</Link></li>
              </ul>
            </li>
            <li><Link to="/blog">Blog</Link></li>
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