import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import type { PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SorcaHighlineFestivalPage = ({ location }: PageProps) => (
  <Layout>
    <Seo title="Sorca highline festival" pathname={location.pathname} />
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
        className="img-fluid"
      />
    </div>
  </Layout>
)

export default SorcaHighlineFestivalPage
