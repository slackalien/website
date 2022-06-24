import * as React from "react"

import Container from "react-bootstrap/Container"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Stran ne obstaja" />
    <Container className="px-0 py-5 text-center">
      <h1>404: Stran ne obstaja</h1>
      <p>Linija še ne obstaja, mogoče jo kmalu postavimo.</p>
    </Container>
  </Layout>
)

export default NotFoundPage
