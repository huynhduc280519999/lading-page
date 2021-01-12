import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Organizer from "../components/organizer"
import Training from "../components/training"

const IndexPage = () => (
  <Layout>
    <SEO title="CME" />
    <Header />
    <Organizer />
    <Training />
  </Layout>
)

export default IndexPage
