import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { NotFoundSection } from "../components/Sections"

const NotFoundPage = () => (
  <Layout>
    <Seo title="Page Not Found - Ricky Ho" />
    <NotFoundSection />
  </Layout>
)

export default NotFoundPage
