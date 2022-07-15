import * as React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
//import Gallery from "../components/gallery"

const VisokovanjePage = (
  {
    //data,
    location,
  }: PageProps /*<Queries.VisokovanjeQuery>*/
) => (
  <Layout>
    <Seo title="Visokovanje" pathname={location.pathname} />
    <h1>Visokovanje</h1>
    <p>
      Visokovanje oziroma po angleško <i>highline</i>, je ena od oblik hoje po
      traku (slackline), pri kateri je trak postavljen na veliki višini - od
      nekaj deset metrov pa tudi do več sto. Takšna postavitev omogoča povsem
      svojevrstno izkušnjo, a obenem zahteva posebno opremo, znanje ter
      pristope, ki zagotavljajo, da je podvig tudi varen.
    </p>
    <hr className="my-5" />
    {/*
    <Gallery files={data.allFile.nodes} />
    */}
  </Layout>
)

export default VisokovanjePage

/*
export const pageQuery = graphql`
  query Visokovanje {
    allFile(filter: { relativeDirectory: { eq: "visokovanje" } }) {
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
*/
