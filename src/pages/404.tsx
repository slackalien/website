import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Stran ne obstaja" />
    <div className="container text-center py-5">
      <h1>404: Stran ne obstaja</h1>
      <p>Linija še ne obstaja, mogoče jo kmalu postavimo.</p>
    </div>
  </Layout>
)

export default NotFoundPage
