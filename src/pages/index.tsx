import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, Link, PageProps } from "gatsby"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Gallery from "../components/gallery"

const HomePage = ({ data, location }: PageProps<Queries.HomePageQuery>) => (
  <Layout>
    <Seo title="Domača stran" pathname={location.pathname} />
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
          V deželi na sončni strani Alp se po gozdovih potika skupina vesoljcev.
          Iščemo brezna, luknje, prepade in pečine, da bi hodili tam, kjer ni
          hodil še nihče.
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
          Mlačnost v dolini nas ima za nore in nepremišljene, pravijo nam, da se
          igramo z življenjem. Mogoče je v tem zrno resnice. A naša življenja bi
          nam bila težko bolj dragocena. Prav zato jih nameravamo živeti v
          polnosti.
        </p>
        <p>Se tudi ti ne znajdeš v mlačnosti doline? Pridi z nami visokovat!</p>
        <ul>
          <li>
            Pripravljeni smo ti predstaviti prve varne korake v svet
            visokovanja.
          </li>
          <li>
            Pripravljeni smo razdati svoje znanje, ki smo ga nabrali širom
            vesolja.
          </li>
          <li>Pripravljeni smo ti posoditi najboljšo opremo.</li>
          <li>
            Pripravljeni smo s tabo plesati in vriskati ob ognju pozno v noč.
          </li>
        </ul>
        <p>
          Vprašanje je: si ti pripravljen/a pogledati strahu naravnost v oči?
        </p>
        <div>
          <Button size="lg" as={Link as any} to="/za-zacetnike/">
            Pripravljen sem!
          </Button>
        </div>
      </Col>
    </Row>
    <hr className="my-5" />
    <Gallery files={data.allFile.nodes} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  query HomePage {
    allFile(filter: { relativeDirectory: { eq: "o-nas" } }) {
      nodes {
        id
        childImageSharp {
          gatsbyImageData(
            width: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`
