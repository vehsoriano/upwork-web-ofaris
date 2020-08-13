import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import ChooseUs from "../components/choose"
import Services from "../components/services"
import Clients from "../components/clients"
import Outsourcing from "../components/outsourcing"
import ContactUs from "../components/contact"
import 'swiper/dist/css/swiper.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <ChooseUs />
    <Services />
    <Clients />
    <Outsourcing />
    <ContactUs />
  </Layout>
)

export default IndexPage
