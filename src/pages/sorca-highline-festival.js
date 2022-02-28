import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SorcaHighlineFestivalPage = () => (
  <Layout>
    <Seo title="Sorca highline festival" />
    <div className="container py-5">
      <h1>Sorca highline festival</h1>
      <p>
        SlackAlien vsako leto po Drill'n'Chill-u organizira festival Hodil'n'Pil
        na Sorški planini.
      </p>
      <StaticImage
        src="../images/razno/sorca-highline-festival.jpg"
        layout="fullWidth"
        alt="Sorca Highline Festival"
        width={1024}
        className="img-fluid"
      />
    </div>
  </Layout>
)

export default SorcaHighlineFestivalPage
