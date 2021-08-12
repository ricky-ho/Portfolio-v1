import React, { useState, useEffect } from "react"
import useScreenWidth from "../../hooks/useScreenWidth"
import { Link } from "gatsby"
import { BsPerson, BsListCheck, BsBriefcase } from "react-icons/bs"
import { FiPhone } from "react-icons/fi"
import { Logo } from "../../assets"

import "../../styles/header.scss"

const MOBILE_THRESHOLD_WIDTH = 700

const Header = () => {
  const width = useScreenWidth()
  const useMobileNav = width < MOBILE_THRESHOLD_WIDTH
  const [scrolledToTop, setScrolledToTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => setScrolledToTop(window.pageYOffset < 50)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerStyle = !scrolledToTop ? "header__shadow" : ""

  return (
    <header className={`header ${headerStyle}`}>
      <div className="header__inner">
        <div className="header__logo-wrap">
          <a href="/">
            <Logo className="logo" />
          </a>
        </div>
        <div className="menu-wrap">
          {useMobileNav ? <MobileNavMenu /> : <DefaultNavMenu />}
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
            <Link to="#hero">Home</Link>
          </li>
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
  const [isActive, setIsActive] = useState(false)

  const toggleMenu = () => setIsActive(!isActive)

  return (
    <>
      <button
        type="button"
        className="toggler"
        onClick={() => toggleMenu()}
        aria-label="Toggle Menu"
      />
      <div className="hamburger-icon">
        <div></div>
      </div>
      <nav className={`menu ${isActive ? "menu__active" : ""}`}>
        <ul>
          <li>
            <Link to="/#projects" onClick={() => toggleMenu()}>
              <span>
                <BsBriefcase className="nav-item-icon" size={20} />
                Projects
              </span>
            </Link>
          </li>
          <li>
            <Link to="/#about" onClick={() => toggleMenu()}>
              <span>
                <BsPerson className="nav-item-icon" size={20} />
                About
              </span>
            </Link>
          </li>
          <li>
            <Link to="/#skills" onClick={() => toggleMenu()}>
              <span>
                <BsListCheck className="nav-item-icon" size={20} />
                Skills
              </span>
            </Link>
          </li>
          <li>
            <Link to="/#contact" onClick={() => toggleMenu()}>
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
