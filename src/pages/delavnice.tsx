import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PageProps } from "gatsby"
import Masonry from "react-masonry-css"

import Button from "react-bootstrap/Button"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ExternalLink from "../components/external-link"
import ExternalIcon from "../icons/external-icon"

const DelavnicePage = ({ location }: PageProps) => (
  <Layout>
    <Seo
      title="Delavnice"
      description="Highline delavnice"
      pathname={location.pathname}
    />
    <div className="container py-5">
      <h1>Delavnice</h1>
      <p>SlackAlien društvo izvaja različne delavnice.</p>
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

      <Masonry
        breakpointCols={3}
        className="masonry mt-5"
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
    </div>
  </Layout>
)

export default DelavnicePage
