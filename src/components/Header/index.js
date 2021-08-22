import React, { useState, useEffect } from "react"
import useScreenWidth from "../../hooks/useScreenWidth"
import { Link } from "react-scroll"
import { useInView } from "react-intersection-observer"
import { Logo } from "../Icons"
import {
  mobileThresholdWidth,
  navLinks,
  srConfig,
  ssConfig,
} from "../../config"

import "../../styles/header.scss"

const Header = () => {
  const [scrolledToTop, setScrolledToTop] = useState(true)
  const [ref, inView] = useInView(srConfig.initialOnScreenOptions)
  const width = useScreenWidth()

  const useMobileNav = width <= mobileThresholdWidth
  const headerStyle = !scrolledToTop ? "header__shadow" : ""

  useEffect(() => {
    const handleScroll = () => setScrolledToTop(window.pageYOffset < 30)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      ref={ref}
      className={`header ${headerStyle} animate ${
        inView ? "fadeInDown" : "initialFadeInDown"
      }`}
    >
      <div className="header__inner">
        <div className="header__logo-wrap">
          <a href="/">
            <Logo className="logo" />
          </a>
        </div>
        <div className="menu-wrap">
          {useMobileNav ? (
            <MobileNavMenu />
          ) : (
            <DefaultNavMenu inView={inView} />
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
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  to={link.url}
                  smooth={ssConfig.smooth}
                  offset={ssConfig.offset}
                  duration={ssConfig.duration}
                >
                  {link.name}
                </Link>
              </li>
            )
          })}
          <li>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
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
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  to={link.url}
                  smooth={ssConfig.smooth}
                  offset={ssConfig.offset}
                  duration={ssConfig.duration}
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
