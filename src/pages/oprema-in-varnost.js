import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const OpremaInVarnostPage = () => (
  <Layout>
    <Seo title="Oprema in varnost" />
    <div className="container py-5">
      <h1>Oprema in varnost</h1>
      <p>
        Varnost je naša prva prioriteta. Na trak vedno stopamo navezani. Oprema
        je profesionalna in namenjena zgolj vesoljcem.
      </p>
      <StaticImage
        src="../images/oprema-in-varnost/oprema-in-varnost-1.jpg"
        alt="Oprema in varnost pri visokovanju"
        title="Oprema in varnost pri visokovanju"
        className="img-fluid"
        width={1280}
      />
    </div>
  </Layout>
)

export default OpremaInVarnostPage
