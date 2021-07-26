import * as React from "react"
import Header from "../Header"
import Footer from "../Footer"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <div id="root">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
