import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Masonry from "react-masonry-css"
import type { PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const DelavnicePage = ({ location }: PageProps) => (
  <Layout>
    <Seo
      title="Delavnice"
      description="Highline delavnice"
      pathname={location.pathname}
    />
    <div className="container py-5">
      <h1>Delavnice</h1>
      <p>
        SlackAlien je poleti leta 2019 izvedel prve highline delavnice v
        Sloveniji. Tečaja se je udeležilo 9 tečajnikov.
      </p>

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
