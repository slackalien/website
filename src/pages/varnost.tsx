import * as React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
//import Gallery from "../components/gallery"

const VarnostPage = (
  { /*data,*/ location }: PageProps /*<Queries.VarnostQuery>*/
) => (
  <Layout>
    <Seo title="Varnost" pathname={location.pathname} />
    <h1>Varnost</h1>
    <p>
      Visokovanje na edinstven način združuje gibanje, prisotnost, zanos in
      lepoto. A moramo seveda biti živi, da lahko vse to izkusimo znova in
      znova. Varnost je zato naša prva prioriteta. Da bomo lahko še dolgo
      visokovali, se držimo naslednjih vodil:
    </p>
    <ul>
      <li className="mb-3">
        <b>Na trak vedno stopamo navezani.</b>
        <br /> Preden zapustimo sidišče, preverimo, da imamo pas pravilno
        nameščen in da je vozel na visu pravilno zavezan.
      </li>
      <li className="mb-3">
        <b>Vse komponente visokice so podvojene.</b>
        <br /> V sicer malo verjetnem, a vseeno mogočem primeru, da bi kaka od
        komponent popustila, bi njeno vlogo prevzela rezervna. S tem se
        zavarujemo pred skritimi napakami na opremi ter nepričakovanimi
        zunanjimi dejavniki.
      </li>
      <li className="mb-3">
        <b>Uporabljamo namensko in strokovno izdelano opremo.</b>
        <br /> Specifikacije opreme vedno preverimo, jih pri uporabi spoštujemo
        ter poskrbimo, da se obremenitve, ki jim je izpostavljena, gibljejo
        znotraj zanjo predpisanih meja. Naši sistemi so vedno načrtovani z
        ustreznim varnostnim faktorjem, kar pomeni, da so sposobni varno
        prenesti tudi nekajkrat višje sile, kot so jim izpostavljeni med
        visokovanjem.
      </li>
      <li className="mb-3">
        <b>Visokice postavlja dobro izurjena in izkušena ekipa.</b>
        <br /> Začetnike rade volje vključimo v proces postavljanja, a vedno pod
        budnim nadzorom izkušenega mentorja. Tako poskrbimo, da se znanje
        prenaša na čim večji del ekipe.
      </li>
      <li className="mb-3">
        <b>Svoje znanje ves čas izpopolnjujemo.</b>
        <br /> Sledimo razvoju smernic in dobrih praks na področju visokovanja
        in jih upoštevamo pri svojih dejavnostih.
      </li>
      <li className="mb-3">
        <b>
          Tako pri postavljanju kot pri navzovanju se držimo principa dvojnega
          preverjanja.
        </b>
        <br />
        Vse ključne komponente sistema pred uporabo pregledata vsaj dve
        usposobljeni osebi. Preden stopimo na trak, poprosimo kolega, da za nas
        naredi varnostni pregled in potrdi, da imamo pas pravilno zapet ter da
        je vozel na visu pravilno zavezan.
      </li>
    </ul>
    <hr className="my-5" />
    {/*
    <Gallery files={data.allFile.nodes} />
    */}
  </Layout>
)

export default VarnostPage

/*
export const pageQuery = graphql`
  query Varnost {
    allFile(filter: { relativeDirectory: { eq: "varnost" } }) {
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
