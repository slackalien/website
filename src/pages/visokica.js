import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const VisokicaPage = () => (
  <Layout>
    <Seo title="Visokica" />
    <div className="container py-5">
      <h1>Visokica</h1>
      <p>
        Visokica oziroma po angleško <i>highline</i>, je oblika hoje po vrvi na
        višini.
      </p>
      <StaticImage
        src="../images/visokica/visokica-1.jpg"
        alt="Visokica ali highline"
        title="Visokica ali highline"
        className="img-fluid"
        width={1280}
      />
    </div>
  </Layout>
)

export default VisokicaPage
