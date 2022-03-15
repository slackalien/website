import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import type { PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SlacklinePage = ({ location }: PageProps) => (
  <Layout>
    <Seo title="Slackline" pathname={location.pathname} />
    <div className="container py-5">
      <h1>Slackline</h1>
      <p>Slackline je hoja po napetem traku.</p>
      <StaticImage
        src="../images/razno/slackline.jpg"
        alt="Slackline"
        width={1024}
        className="img-fluid"
      />
    </div>
  </Layout>
)

export default SlacklinePage
