import * as React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ZaZacetnikePage = ({ location }: PageProps) => (
  <Layout>
    <Seo title="Za Začetnike" pathname={location.pathname} />
    <div className="container py-5">
      <h1>Za Začetnike</h1>
      <p>Tako torej. Mika te visokovanje. Kaj pa zdaj?</p>
    </div>
  </Layout>
)

export default ZaZacetnikePage
