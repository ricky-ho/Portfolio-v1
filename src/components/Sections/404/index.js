import React from "react"
import { Link } from "gatsby"

import "../../../styles/404.scss"

const NotFoundSection = () => {
  return (
    <section id="not-found-section">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to="/">Go Home</Link>
    </section>
  )
}

export default NotFoundSection
