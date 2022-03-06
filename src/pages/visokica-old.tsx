import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Masonry from "react-masonry-css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const VisokicaPage = () => (
  <Layout>
    <Seo title="Visokica" />
    <div className="container py-5">
      <h1>Visokica</h1>
      <p>
        Visokica oziroma po angleško <i>highline</i>, je oblika hoje po vrvi na
        višini.
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
          layout="fullWidth"
        />
        <StaticImage
          src="../images/visokica/dovska.jpg"
          alt=""
          className="img-fluid"
          layout="fullWidth"
        />
        <StaticImage
          src="../images/visokica/krivulja.jpg"
          alt=""
          className="img-fluid"
          layout="fullWidth"
        />
        <StaticImage
          src="../images/visokica/linije2.jpg"
          alt=""
          className="img-fluid"
          layout="fullWidth"
        />
        <StaticImage
          src="../images/visokica/zeleno.jpg"
          alt=""
          className="img-fluid"
          layout="fullWidth"
        />
        <StaticImage
          src="../images/visokica/sorca.jpg"
          alt=""
          className="img-fluid"
          layout="fullWidth"
        />
        <StaticImage
          src="../images/visokica/letalo.jpg"
          alt=""
          className="img-fluid"
          layout="fullWidth"
        />
        <StaticImage
          src="../images/visokica/linije.jpg"
          alt=""
          className="img-fluid"
          layout="fullWidth"
        />
        <StaticImage
          src="../images/visokica/nocna.jpg"
          alt=""
          className="img-fluid"
          layout="fullWidth"
        />
        <StaticImage
          src="../images/visokica/zahod.jpg"
          alt=""
          className="img-fluid"
          layout="fullWidth"
        />
      </Masonry>
    </div>
  </Layout>
)

export default VisokicaPage
