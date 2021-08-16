import React, { useState, useEffect } from "react"
import useScreenWidth from "../../hooks/useScreenWidth"
import { Link } from "react-scroll"
import { Logo } from "../../assets"
import { navLinks } from "../../config"

import "../../styles/header.scss"

const MOBILE_THRESHOLD_WIDTH = 700

const Header = () => {
  const width = useScreenWidth()
  const useMobileNav = width < MOBILE_THRESHOLD_WIDTH
  const [scrolledToTop, setScrolledToTop] = useState(true)
  const headerStyle = !scrolledToTop ? "header__shadow" : ""

  useEffect(() => {
    const handleScroll = () => setScrolledToTop(window.pageYOffset < 50)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
  const handleSetActive = to => {
    const section = document.querySelector(`#${to}`)
    section.classList.add("section__active")
  }

  const handleRemoveActive = to => {
    const section = document.querySelector(`#${to}`)
    section.classList.remove("section__active")
  }

  return (
    <>
      <nav className="default-nav">
        <ul>
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link to={link.url} smooth={true} offset={-50} duration={750}>
                  {link.name}
                </Link>
              </li>
            )
          })}
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
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  to={link.url}
                  smooth={true}
                  offset={-50}
                  duration={750}
                  onClick={() => toggleMenu()}
                >
                  {link.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default Header
