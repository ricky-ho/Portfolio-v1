import * as React from "react"
import useScreenWidth from "../../hooks/useScreenWidth"
import useScrollDirection from "../../hooks/useScrollDirection"
import { Link } from "gatsby"
import { BsPerson, BsListCheck, BsBriefcase } from "react-icons/bs"
import { FiPhone, FiMail } from "react-icons/fi"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Logo } from "../../assets"

import "../../styles/header.scss"

const MOBILE_THRESHOLD_WIDTH = 700

const Header = () => {
  const width = useScreenWidth()
  const scrollDirection = useScrollDirection()
  const [scrolledToTop, setScrolledToTop] = React.useState(true)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolledToTop(window.pageYOffset < 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerStyle =
    !scrolledToTop && scrollDirection === "up"
      ? "header__show"
      : !scrolledToTop && scrollDirection === "down"
      ? "header__hide"
      : ""

  return (
    <header className={`header ${headerStyle}`}>
      <div className="header__inner container">
        <div className="header__logo-wrap">
          <a href="/">
            <Logo className="logo" />
          </a>
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
        <div>
          <a
            href="https://github.com/ricky-ho"
            target="_blank"
            rel="noopener noreferrer"
            title="https://github.com/ricky-ho"
          >
            <FaGithub size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/ricky-ho-01/"
            target="_blank"
            rel="noopener noreferrer"
            title="https://www.linkedin.com/in/ricky-ho-01"
          >
            <FaLinkedin size={15} />
          </a>
          <a
            href="mailto:horicky.cs@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="mailto:horicky.cs@gmail.com"
          >
            <FiMail size={15} />
          </a>
        </div>
      </nav>
    </>
  )
}

export default Header
