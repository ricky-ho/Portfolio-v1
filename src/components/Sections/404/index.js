import React from "react"
import { useInView } from "react-intersection-observer"
import { Link } from "gatsby"
import { srConfig } from "../../../config"

import "../../../styles/404.scss"

const NotFoundSection = () => {
  const [ref, inView] = useInView(srConfig.initialOnScreenOptions)

  return (
    <section
      ref={ref}
      id="not-found-section"
      className={`animate ${inView ? "fadeIn" : "initialFadeIn"}`}
    >
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to="/">Go Home</Link>
    </section>
  )
}

export default NotFoundSection
