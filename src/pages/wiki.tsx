import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const WikiPage = ({ location }: PageProps) => (
  <Layout>
    <Seo title="Visokica Wiki" pathname={location.pathname} />
    <div className="container py-5">
      <h1>Visokica Wiki</h1>
      <p>
        <a
          href="https://visokica.andrej.ad-vega.si/start"
          target="_blank"
          rel="noreferrer"
        >
          Visokica wiki
        </a>{" "}
        je slovenski visokovalski priročnik.
      </p>
      <StaticImage
        src="../images/razno/wiki.jpg"
        width={500}
        alt="SlackAlien"
        className="img-fluid mb-4"
      />
      <p>
        Poslanstvo te spletne strani je nudenje informacij, povezanih z
        visokicami (highline) in visokovanjem, v slovenskem jeziku in za
        slovenski prostor.
      </p>
      <p>Vsebino urejajo člani slovenske visokovalske skupnosti.</p>
      <p>
        <a
          className="btn btn-outline-light btn-lg px-4 d-block d-md-inline-block"
          href="https://visokica.andrej.ad-vega.si/start"
          target="_blank"
          rel="noreferrer"
        >
          Visokica Wiki
        </a>
      </p>
    </div>
  </Layout>
)

export default WikiPage
