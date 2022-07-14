import * as React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Gallery from "../components/gallery"

const VesoljskaMrezaPage = ({
  data,
  location,
}: PageProps<Queries.VesoljskaMrezaQuery>) => (
  <Layout>
    <Seo title="Vesoljska mreža" pathname={location.pathname} />
    <h1>Vesoljska mreža</h1>
    <p>
      Vesoljska mreža, ali po angleško <i>space net</i>, je ročno pletena mreža
      iz tankih vrvic. Namenjena je levitaciji, meditaciji in ostalim bolj ali
      manj norim vragolijam na nebu. V naši ekipi sami izdelujemo take mreže in
      jih postavljamo ob različnih priložnostih. Kdaj visoko v zraku, drugič
      nizko pri tleh, ponavadi pa kar eno nad drugo. V kolikor vas take mreže
      zanimajo, nam pišite in lahko vam jih postavimo na vašem festivalu,
      dogodku, ob posebni priložnosti, ali pa kar tako. Postavitev lahko dodatno
      osvetlimo z UV in LED osvetlitvijo, da tudi ponoči pridejo do izraza.
    </p>
    <hr className="my-5" />
    <Gallery files={data.allFile.nodes} />
  </Layout>
)

export default VesoljskaMrezaPage

export const pageQuery = graphql`
  query VesoljskaMreza {
    allFile(filter: { relativeDirectory: { eq: "spacenet" } }) {
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
