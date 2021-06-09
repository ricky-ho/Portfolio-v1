import * as React from "react"
import PropTypes from "prop-types"
import Header from "../Header"
import Footer from "../Footer"
import "./layout.scss"

/* 
  TO DO:
    - Add resume links in Header and Hero section
    - Add responsiveness
    - Add animation effects 
    - Create page loading effect
    - Create a Logo and Favicon for portfolio
    - Add light/dark mode feature

*/

const Layout = ({ children }) => {
  return (
    <>
      <div id="root">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
