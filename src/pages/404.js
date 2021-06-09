import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="Page not found" />
    <h1>404: Page Not Found</h1>
    <Link to="/">Go back home</Link>
  </Layout>
)

export default NotFoundPage
