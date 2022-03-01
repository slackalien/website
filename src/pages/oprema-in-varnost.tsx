import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Masonry from "react-masonry-css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const OpremaInVarnostPage = () => (
  <Layout>
    <Seo title="Oprema in varnost" />
    <div className="container py-5">
      <h1>Oprema in varnost</h1>
      <p>
        Varnost je naša prva prioriteta. Na trak vedno stopamo navezani. Oprema
        je profesionalna in namenjena zgolj vesoljcem.
      </p>

      <Masonry
        breakpointCols={3}
        className="masonry mt-5"
        columnClassName="masonry-column"
      >
        <StaticImage
          src="../images/oprema-in-varnost/laser-walkie-talkie.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
        <StaticImage
          src="../images/oprema-in-varnost/oprema.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
        <StaticImage
          src="../images/oprema-in-varnost/banananjam.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
        <StaticImage
          src="../images/oprema-in-varnost/hangover.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
        <StaticImage
          src="../images/oprema-in-varnost/a-frame.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
        <StaticImage
          src="../images/oprema-in-varnost/izdelava-sidrisca.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
        <StaticImage
          src="../images/oprema-in-varnost/leash-ring.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
        <StaticImage
          src="../images/oprema-in-varnost/vrtanje.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
        <StaticImage
          src="../images/oprema-in-varnost/padec.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
        <StaticImage
          src="../images/oprema-in-varnost/padec2.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
        <StaticImage
          src="../images/oprema-in-varnost/space-net.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
        <StaticImage
          src="../images/oprema-in-varnost/safety-first.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
        <StaticImage
          src="../images/oprema-in-varnost/padec3.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
      </Masonry>
    </div>
  </Layout>
)

export default OpremaInVarnostPage
