import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PageProps } from "gatsby"
import Masonry from "react-masonry-css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const VesoljskaMrezaPage = ({ location }: PageProps) => (
  <Layout>
    <Seo title="Vesoljska mreža" pathname={location.pathname} />
    {/*
    <div className="container-fluid px-0 position-relative">
      <StaticImage
        src="../images/prva/purple.jpg"
        width={1280}
        alt="Space Net"
        className="img-fluid w-100"
      />
      <div className="position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-end">
        <div className="container py-4">
          <h1>Vesoljska mreža</h1>
        </div>
      </div>
    </div>
    */}
    <div className="container py-5">
      <h1>Vesoljska mreža</h1>
      <p>
        Vesoljska mreža ali po angleško "space net", je ročno pletena mreža iz
        tankih vrvic. Namenjena je levitaciji, meditaciji in ostalim, bolj ali
        manj norim vragolijam na nebu. V naši ekipi sami izdelujemo take mreže
        in jih postavljamo ob različnih priložnostih. Kdaj visoko v zraku,
        drugič nizko pri tleh, ponavadi pa kar eno nad drugo. V kolikor vas take
        mreže zanimajo, nam pišite in lahko vam jih postavimo na vašem
        festivalu, dogodku, ob posebni priložnosti, ali pa kar tako. Postavitev
        lahko dodatno osvetlimo z UV in LED osvetlitvijo, da tudi ponoči pridejo
        do izraza.
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
        />
        <StaticImage
          src="../images/vesoljska-mreza/just-chilling.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/vesoljska-mreza/nad-vodo-chill.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/vesoljska-mreza/nad-vodo-kuza.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/vesoljska-mreza/okrogel.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/vesoljska-mreza/otroci-gozd.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/vesoljska-mreza/otroci.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/vesoljska-mreza/purple-haze.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/vesoljska-mreza/space-acro.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/vesoljska-mreza/space-dim.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/vesoljska-mreza/space-hello.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/vesoljska-mreza/space-silk.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/vesoljska-mreza/space-silk-orange.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/vesoljska-mreza/tilen-dim.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/vesoljska-mreza/vinkuran-net.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/vesoljska-mreza/vleci-net.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
      </Masonry>
    </div>
  </Layout>
)

export default VesoljskaMrezaPage
