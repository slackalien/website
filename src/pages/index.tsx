import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Masonry from "react-masonry-css"
import { PageProps } from "gatsby"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "../components/layout"
import Seo from "../components/seo"

const HomePage = ({ location }: PageProps) => (
  <Layout>
    <Seo title="Domača stran" pathname={location.pathname} />
    <Container className="py-5">
      <h1>SlackAlien</h1>

      <Row className="flex-row-reverse">
        <Col md={4}>
          <StaticImage
            src="../images/logo/slackalien-abduction.png"
            width={400}
            alt="SlackAlien"
            className="img-fluid mb-4"
          />
        </Col>
        <Col md={8}>
          <p>
            V deželi na sončni strani Alp se po gozdovih potika skupina
            vesoljcev. Iščemo brezna, luknje, prepade in pečine, da bi hodili
            tam kjer ni hodil še nihče.
          </p>
          <p>
            Smo fantje in dekleta vseh starosti, ki se ločimo od mlačne
            povprečnosti v dolini predvsem po tem, da želimo svojim strahovom
            pogledati naravnost v oči in jih pustiti nekje v preteklosti.
          </p>
          <p>
            Iščemo najlepše prostore izven uhojenih poti, kjer se za kratek čas
            zasidramo in hkrati dotaknemo neba.
          </p>
          <p>
            Mlačnost v dolini nas ima za nore in nepremišljene, pravijo nam, da
            se igramo z življenjem. Mogoče je v tem zrno resnice. A naša
            življenja bi nam bila težko bolj dragocena. Prav zato jih nameravamo
            živeti v polnosti.
          </p>
          <h2>
            Se tudi ti ne znajdeš v mlačnosti doline? Pridi z nami visokovat!
          </h2>
          <ul>
            <li>
              Pripravljeni smo razdati svoje znanje, ki smo ga nabrali širom
              vesolja.
            </li>
            <li>Pripravljeni smo ti posoditi najboljšo opremo v vesolju.</li>
            <li>
              Pripravljeni smo s tabo plesati in vriskati ob ognju pozno v noč.
            </li>
          </ul>
          <p>
            Vprašanje je: si ti pripravljen/a pogledati strahu naravnost v oči?
          </p>
        </Col>
      </Row>

      <Masonry
        breakpointCols={3}
        className="masonry mt-5"
        columnClassName="masonry-column"
      >
        <StaticImage
          src="../images/o-nas/ivana.jpg"
          alt="Ivana"
          width={360}
          className="img-fluid"
        />
        <StaticImage
          src="../images/o-nas/lara-na-liniji.jpg"
          alt="Lara"
          width={360}
          className="img-fluid"
        />
        <StaticImage
          src="../images/o-nas/timi-na-liniji.jpg"
          alt="Tim"
          width={360}
          className="img-fluid"
        />
        <StaticImage
          src="../images/o-nas/nace-na-liniji.jpg"
          alt="Nace"
          width={360}
          className="img-fluid"
        />
        <StaticImage
          src="../images/o-nas/gasper-mize.jpg"
          alt="Gašper"
          width={360}
          className="img-fluid"
        />
        <StaticImage
          src="../images/o-nas/matevz-na-liniji.jpg"
          alt="Matevž"
          width={360}
          className="img-fluid"
        />
        <StaticImage
          src="../images/o-nas/jaka-na-liniji.jpg"
          alt="Jaka"
          width={360}
          className="img-fluid"
        />
        <StaticImage
          src="../images/o-nas/andrej-na-liniji.jpg"
          alt="Andrej"
          width={360}
          className="img-fluid"
        />
        <StaticImage
          src="../images/o-nas/bojc-na-glavo.jpg"
          alt="Bojč"
          width={360}
          className="img-fluid"
        />
        <StaticImage
          src="../images/o-nas/tilen-na-liniji.jpg"
          alt="Tilen"
          width={360}
          className="img-fluid"
        />
        <StaticImage
          src="../images/o-nas/maticek-na-liniji.jpg"
          alt="Matiček"
          width={360}
          className="img-fluid"
        />
        <StaticImage
          src="../images/o-nas/matic-na-liniji.jpg"
          alt="Matic"
          width={360}
          className="img-fluid"
        />
        <StaticImage
          src="../images/o-nas/anze-plank.jpg"
          alt="Anže"
          width={360}
          className="img-fluid"
        />
        <StaticImage
          src="../images/o-nas/slackalien-misice.jpg"
          alt="SlackAlien mišice"
          width={360}
          className="img-fluid"
        />
      </Masonry>
    </Container>
  </Layout>
)

export default HomePage
