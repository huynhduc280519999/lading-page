import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Rapporteur from "../components/rapporteur"
import SEO from "../components/seo"
import Organizer from '../components/organizer'
import Donor from '../components/donor'

const IndexPage = () => (
  <Layout>
    <SEO title="CME" />
    <Header />
    <Organizer />
    <Rapporteur/>
    <Donor />
  </Layout>
)

export default IndexPage
