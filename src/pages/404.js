import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { NotFoundSection } from "../components/Sections"

const NotFoundPage = () => (
  <Layout>
    <Seo title="Page not found" />
    <NotFoundSection />
  </Layout>
)

export default NotFoundPage
