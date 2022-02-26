import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const VesoljskaMrezaPage = () => (
  <Layout>
    <Seo title="Vesoljska mreža" />
    <div className="container py-5">
      <h1>Vesoljska mreža</h1>
      <p>
        Vesoljska mreža ali po angleško "space net", je vesoljska ladja spletena
        iz tankih vrvic. Namenjena je levitaciji, meditaciji in ostalim, bolj
        ali manj norim vragolijam na nebu.
      </p>
      <StaticImage
        src="../images/space-net.jpg"
        alt="Vesoljska mreža ali space net"
        title="Vesoljska mreža ali space net"
        className="img-fluid"
        width={1280}
      />
    </div>
  </Layout>
)

export default VesoljskaMrezaPage
