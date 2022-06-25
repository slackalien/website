import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PageProps } from "gatsby"
import Masonry from "react-masonry-css"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ExternalLink from "../components/external-link"

const DelavnicePage = ({ location }: PageProps) => (
  <Layout>
    <Seo
      title="Delavnice"
      description="Highline delavnice"
      pathname={location.pathname}
    />
    <h1>Delavnice</h1>
    <p>SlackAlien društvo izvaja različne delavnice.</p>

    <Row>
      <Col md={6} lg={4}>
        <h4>Highline delavnice</h4>
        <StaticImage
          src="../images/delavnice/slajdanje2.jpg"
          className="img-fluid mb-2"
          width={600}
          alt=""
        />
        <p className="mb-3 mb-md-0">
          <ExternalLink href="https://forms.gle/FVpLkgLi3bT7habk9">
            Highline delavnice
          </ExternalLink>
          so namenjene začetnikom oziroma vsakomur, ki si želi visokovati.
        </p>
      </Col>
      <Col md={6} lg={4}>
        <h4>Slackline treningi</h4>
        <StaticImage
          src="../images/delavnice/tivoli-slackline-treningi.jpg"
          className="img-fluid mb-2"
          width={600}
          alt=""
        />
        <p className="mb-3 mb-md-0">
          <ExternalLink href="https://www.facebook.com/events/1396049607533320/1396049610866653/">
            Slackline treningi
          </ExternalLink>
          so namenjeni vsem, ki si želijo izboljšati sposobnosti hoje po traku.
        </p>
      </Col>
      <Col md={6} lg={4}>
        <h4>Društvene delavnice</h4>
        <StaticImage
          src="../images/delavnice/sidrisce1.jpg"
          className="img-fluid mb-2"
          width={600}
          alt=""
        />
        <p className="mb-0">
          Društvene delavnice za člane: reševanje iz highlina, vrtanje sidrišč,
          postavljanje zahtevnejših linij.
        </p>
      </Col>
    </Row>

    {/*
      <ul>
        <li>
          <ExternalLink href="https://forms.gle/FVpLkgLi3bT7habk9">
            Highline delavnice
          </ExternalLink>
          : namenjene highline začetnikom oziroma vsakomur, ki si želi
          visokovati.
        </li>
        <li>
          <ExternalLink href="https://www.facebook.com/events/1396049607533320/1396049610866653/">
            Slackline treningi
          </ExternalLink>
          : namenjeni vsem, ki si želijo izboljšati sposobnosti hoje po traku.
        </li>
        <li>
          Društvene delavnice za člane: reševanje iz highlina, vrtanje sidrišč,
          postavljanje zahtevnejših linij.
        </li>
      </ul>
      */}

    <hr className="my-5" />

    <Masonry
      breakpointCols={3}
      className="masonry"
      columnClassName="masonry-column"
    >
      <StaticImage
        src="../images/delavnice/plakat2.jpg"
        alt=""
        width={360}
        className="img-fluid"
      />
      <StaticImage
        src="../images/delavnice/plakat1.jpg"
        alt=""
        width={360}
        className="img-fluid"
      />
      <StaticImage
        src="../images/delavnice/uvod.jpg"
        alt=""
        width={360}
        className="img-fluid"
      />
      <StaticImage
        src="../images/delavnice/ogrevanje.jpg"
        alt=""
        width={360}
        className="img-fluid"
      />
      <StaticImage
        src="../images/delavnice/vstajanje.jpg"
        alt=""
        width={360}
        className="img-fluid"
      />
      <StaticImage
        src="../images/delavnice/vzpenjanje.jpg"
        alt=""
        width={360}
        className="img-fluid"
      />
      <StaticImage
        src="../images/delavnice/nalaganje.jpg"
        alt=""
        width={360}
        className="img-fluid"
      />
      <StaticImage
        src="../images/delavnice/slajdanje1.jpg"
        alt=""
        width={360}
        className="img-fluid"
      />
      <StaticImage
        src="../images/delavnice/slajdanje2.jpg"
        alt=""
        width={360}
        className="img-fluid"
      />
      <StaticImage
        src="../images/delavnice/oprema2.jpg"
        alt=""
        width={360}
        className="img-fluid"
      />
      <StaticImage
        src="../images/delavnice/oprema1.jpg"
        alt=""
        width={360}
        className="img-fluid"
      />
      <StaticImage
        src="../images/delavnice/sidrisce1.jpg"
        alt=""
        width={360}
        className="img-fluid"
      />
      <StaticImage
        src="../images/delavnice/sidrisce2.jpg"
        alt=""
        width={360}
        className="img-fluid"
      />
      <StaticImage
        src="../images/delavnice/sidrisce3.jpg"
        alt=""
        width={360}
        className="img-fluid"
      />
      <StaticImage
        src="../images/delavnice/sidrisce4.jpg"
        alt=""
        width={360}
        className="img-fluid"
      />
    </Masonry>
  </Layout>
)

export default DelavnicePage
