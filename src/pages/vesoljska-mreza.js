import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Masonry from "react-masonry-css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const VesoljskaMrezaPage = () => (
  <Layout>
    <Seo title="Vesoljska mreža" />
    <div className="container py-5">
      <h1>Vesoljska mreža</h1>
      <p>
        Vesoljska mreža ali po angleško "space net", je vesoljska ladja spletena
        iz tankih vrvic. Namenjena je levitaciji, meditaciji in ostalim, bolj
        ali manj norim vragolijam na nebu.
      </p>
      <Masonry
        breakpointCols={3}
        className="masonry mt-5"
        columnClassName="masonry-column"
      >
        <StaticImage
          src="../images/vesoljska-mreza/closeup.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
        <StaticImage
          src="../images/vesoljska-mreza/just-chilling.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
        <StaticImage
          src="../images/vesoljska-mreza/nad-vodo-chill.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
        <StaticImage
          src="../images/vesoljska-mreza/nad-vodo-kuza.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
        <StaticImage
          src="../images/vesoljska-mreza/okrogel.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
        <StaticImage
          src="../images/vesoljska-mreza/otroci-gozd.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
        <StaticImage
          src="../images/vesoljska-mreza/otroci.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
        <StaticImage
          src="../images/vesoljska-mreza/purple-haze.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
        <StaticImage
          src="../images/vesoljska-mreza/space-acro.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
        <StaticImage
          src="../images/vesoljska-mreza/space-dim.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
        <StaticImage
          src="../images/vesoljska-mreza/space-hello.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
        <StaticImage
          src="../images/vesoljska-mreza/space-silk.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
        <StaticImage
          src="../images/vesoljska-mreza/space-silk-orange.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
        <StaticImage
          src="../images/vesoljska-mreza/tilen-dim.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
        <StaticImage
          src="../images/vesoljska-mreza/vinkuran-net.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
        <StaticImage
          src="../images/vesoljska-mreza/vleci-net.jpg"
          alt=""
          className="img-fluid"
          width={360}
          layout="fullWidth"
        />
      </Masonry>
    </div>
  </Layout>
)

export default VesoljskaMrezaPage
