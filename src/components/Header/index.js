import * as React from "react"
import { Link } from "gatsby"

import "./header.scss"

const Header = () => {
  const closeMenu = () => {
    const input = document.querySelector(".toggler")
    if (input.checked) {
      input.checked = false
    }
  }

  return (
    <header className="header">
      <div className="header__inner">
        <div>
          <a href="/">Logo </a>
        </div>
        <div className="menu-wrap">
          <input type="checkbox" className="toggler" aria-label="Toggle Menu" />
          <div className="hamburger-icon">
            <div></div>
          </div>
          <nav className="menu">
            <div>
              <ul>
                <li>
                  <Link to="#projects" onClick={() => closeMenu()}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="#about" onClick={() => closeMenu()}>
                    About Me
                  </Link>
                </li>
                <li>
                  <Link to="#contact" onClick={() => closeMenu()}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* <nav className="nav">
        <Link className="navlink" to="#projects">
          Projects
        </Link>
        <Link className="navlink" to="#about">
          About
        </Link>
        <Link className="navlink" to="#contact">
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
      </nav> */}
      </div>
    </header>
  )
}

export default Header
