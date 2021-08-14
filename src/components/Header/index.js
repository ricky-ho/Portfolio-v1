import React, { useState, useEffect } from "react"
import useScreenWidth from "../../hooks/useScreenWidth"
import { Link } from "gatsby"
import { Logo } from "../../assets"
import { navLinks } from "../../config"

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
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link to={link.url}>{link.name}</Link>
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
                <Link to={link.url} onClick={() => toggleMenu()}>
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
