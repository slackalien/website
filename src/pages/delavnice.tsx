import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, PageProps } from "gatsby"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Gallery from "../components/gallery"
import ExternalLink from "../components/external-link"

const DelavnicePage = ({
  data,
  location,
}: PageProps<Queries.DelavniceQuery>) => (
  <Layout>
    <Seo
      title="Delavnice"
      description="Highline delavnice"
      pathname={location.pathname}
    />
    <h1>Delavnice</h1>
    <p>SlackAlien društvo izvaja različne delavnice.</p>
    <Row>
      <Col md={4}>
        <h4>Highline delavnice</h4>
        <StaticImage
          src="../images/delavnice/slajdanje2.jpg"
          className="img-fluid mb-2"
          width={600}
          alt=""
        />
        <p className="mb-3 mb-md-0">
          Highline delavnice so namenjene začetnikom oziroma vsakomur, ki si
          želi visokovati.
        </p>
      </Col>
      <Col md={4}>
        <h4>Slackline treningi</h4>
        <StaticImage
          src="../images/delavnice/tivoli-slackline-treningi.jpg"
          className="img-fluid mb-2"
          width={600}
          alt=""
        />
        <p className="mb-3 mb-md-0">
          <ExternalLink href="https://fb.me/e/1DWW7yH0u">
            Slackline treningi
          </ExternalLink>
          so namenjeni vsem, ki si želijo izboljšati sposobnosti hoje po traku.
        </p>
      </Col>
      <Col md={4}>
        <h4>Društvene delavnice</h4>
        <StaticImage
          src="../images/delavnice/sidrisce1.jpg"
          className="img-fluid mb-2"
          width={600}
          alt=""
        />
        <p className="mb-0">
          Društvene delavnice za člane: reševanje z visokic, vrtanje sidrišč,
          postavljanje zahtevnejših linij.
        </p>
      </Col>
    </Row>
    <Gallery files={data.allFile.nodes} />
  </Layout>
)

export default DelavnicePage

export const pageQuery = graphql`
  query Delavnice {
    allFile(filter: { relativeDirectory: { eq: "delavnice" } }) {
      nodes {
        id
        childImageSharp {
          gatsbyImageData(
            width: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`
