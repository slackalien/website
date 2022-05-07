import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Masonry from "react-masonry-css"
import type { PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const VisokovanjePage = ({ location }: PageProps) => (
  <Layout>
    <Seo title="Visokovanje" pathname={location.pathname} />
    <div className="container py-5">
      <h1>Visokovanje</h1>
      <p>
        Visokovanje oziroma po angleško <i>highline</i>, je ena od oblik hoje po traku(slackline), 
        pri kateri je trak postavljen na veliki višini - od nekaj 10 metrov pa tudi do več sto. 
        Takšna postavitev omogoča povsem svojevrstno izkušnjo, a obenem zahteva posebno opremo, 
        znanje ter pristope, ki zagotavljajo, da je podvig tudi varen.
        
      </p>
      <Masonry
        breakpointCols={3}
        className="masonry mt-5"
        columnClassName="masonry-column"
      >
        <StaticImage
          src="../images/visokica/ajdna.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/visokica/dovska.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/visokica/krivulja.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/visokica/linije2.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/visokica/zeleno.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/visokica/sorca.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/visokica/letalo.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/visokica/linije.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/visokica/nocna.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/visokica/zahod.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
      </Masonry>
    </div>
  </Layout>
)

export default VisokovanjePage
