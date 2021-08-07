import * as React from "react"
import useScreenWidth from "../../hooks/useScreenWidth"
import { Link } from "gatsby"
import { BsPerson, BsListCheck, BsBriefcase } from "react-icons/bs"
import { FiPhone } from "react-icons/fi"

import "../../styles/header.scss"

const MOBILE_THRESHOLD_WIDTH = 700

const Header = () => {
  let width = useScreenWidth()

  return (
    <header className="header">
      <div className="header__inner container">
        <div>
          <a href="/">Logo </a>
        </div>
        <div className="menu-wrap">
          {width < MOBILE_THRESHOLD_WIDTH ? (
            <MobileNavMenu />
          ) : (
            <DefaultNavMenu />
          )}
        </div>
      </div>
    </header>
  )
}

const DefaultNavMenu = () => {
  return (
    <>
      <nav className="default-nav">
        <ul>
          <li>
            <Link to="/#projects">Projects</Link>
          </li>
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li>
            <Link to="/#skills">Skills</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
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
            <Link to="/#projects" onClick={() => closeNavMenu()}>
              <span>
                <BsBriefcase className="nav-item-icon" size={20} />
                Projects
              </span>
            </Link>
          </li>
          <li>
            <Link to="/#about" onClick={() => closeNavMenu()}>
              <span>
                <BsPerson className="nav-item-icon" size={20} />
                About
              </span>
            </Link>
          </li>
          <li>
            <Link to="/#skills" onClick={() => closeNavMenu()}>
              <span>
                <BsListCheck className="nav-item-icon" size={20} />
                Skills
              </span>
            </Link>
          </li>
          <li>
            <Link to="/#contact" onClick={() => closeNavMenu()}>
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
