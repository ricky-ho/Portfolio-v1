import * as React from "react"
import { Link } from "gatsby"
import { BsPerson, BsListCheck, BsBriefcase } from "react-icons/bs"
import { FiPhone } from "react-icons/fi"

import "./header.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div>
          <a href="/">Logo </a>
        </div>
        <div className="menu-wrap">
          <MobileNavMenu />
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

const MobileNavMenu = () => {
  const closeNavMenu = () => {
    const menuToggler = document.querySelector(".toggler")
    if (menuToggler.checked) {
      menuToggler.checked = false
    }
  }

  return (
    <>
      <input type="checkbox" className="toggler" aria-label="Toggle Menu" />
      <div className="hamburger-icon">
        <div></div>
      </div>
      <nav className="menu">
        <ul>
          <li>
            <Link to="#projects" onClick={() => closeNavMenu()}>
              <span>
                <BsBriefcase className="nav-item-icon" size={20} />
                Projects
              </span>
            </Link>
          </li>
          <li>
            <Link to="#about" onClick={() => closeNavMenu()}>
              <span>
                <BsPerson className="nav-item-icon" size={20} />
                About
              </span>
            </Link>
          </li>
          <li>
            <Link to="#skills" onClick={() => closeNavMenu()}>
              <span>
                <BsListCheck className="nav-item-icon" size={20} />
                Skills
              </span>
            </Link>
          </li>
          <li>
            <Link to="#contact" onClick={() => closeNavMenu()}>
              <span>
                <FiPhone className="nav-item-icon" size={20} />
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
