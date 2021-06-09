import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./header.scss"

const Header = () => (
  <header className="header">
    <div className="header__inner">
      <div>
        <a href="/">Logo </a>
      </div>
      <nav className="nav">
        <Link className="navlink" to="/#projects">
          Projects
        </Link>
        <Link className="navlink" to="/#about">
          About
        </Link>
        <Link className="navlink" to="/#contact">
          Contact
        </Link>
        <a
          href="/resume.pdf"
          className="navlink "
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
