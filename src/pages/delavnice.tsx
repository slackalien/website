import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Masonry from "react-masonry-css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const DelavnicePage = () => (
  <Layout>
    <Seo title="Delavnice" />
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
          layout="fullWidth"
          alt=""
          width={360}
          className="img-fluid"
        />
        <StaticImage
          src="../images/delavnice/plakat1.jpg"
          layout="fullWidth"
          alt=""
          width={360}
          className="img-fluid"
        />
        <StaticImage
          src="../images/delavnice/uvod.jpg"
          layout="fullWidth"
          alt=""
          width={360}
          className="img-fluid"
        />
        <StaticImage
          src="../images/delavnice/ogrevanje.jpg"
          layout="fullWidth"
          alt=""
          width={360}
          className="img-fluid"
        />
        <StaticImage
          src="../images/delavnice/vstajanje.jpg"
          layout="fullWidth"
          alt=""
          width={360}
          className="img-fluid"
        />
        <StaticImage
          src="../images/delavnice/vzpenjanje.jpg"
          layout="fullWidth"
          alt=""
          width={360}
          className="img-fluid"
        />
        <StaticImage
          src="../images/delavnice/nalaganje.jpg"
          layout="fullWidth"
          alt=""
          width={360}
          className="img-fluid"
        />
        <StaticImage
          src="../images/delavnice/slajdanje1.jpg"
          layout="fullWidth"
          alt=""
          width={360}
          className="img-fluid"
        />
        <StaticImage
          src="../images/delavnice/slajdanje2.jpg"
          layout="fullWidth"
          alt=""
          width={360}
          className="img-fluid"
        />
        <StaticImage
          src="../images/delavnice/oprema2.jpg"
          layout="fullWidth"
          alt=""
          width={360}
          className="img-fluid"
        />
        <StaticImage
          src="../images/delavnice/oprema1.jpg"
          layout="fullWidth"
          alt=""
          width={360}
          className="img-fluid"
        />
        <StaticImage
          src="../images/delavnice/sidrisce1.jpg"
          layout="fullWidth"
          alt=""
          width={360}
          className="img-fluid"
        />
        <StaticImage
          src="../images/delavnice/sidrisce2.jpg"
          layout="fullWidth"
          alt=""
          width={360}
          className="img-fluid"
        />
        <StaticImage
          src="../images/delavnice/sidrisce3.jpg"
          layout="fullWidth"
          alt=""
          width={360}
          className="img-fluid"
        />
        <StaticImage
          src="../images/delavnice/sidrisce4.jpg"
          layout="fullWidth"
          alt=""
          width={360}
          className="img-fluid"
        />
      </Masonry>
    </div>
  </Layout>
)

export default DelavnicePage
