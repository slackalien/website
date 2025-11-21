import * as React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Gallery from "../../components/gallery"
import ExternalLink from "../../components/external-link"

const Delavnice2025Page = ({
  data,
  location,
}: PageProps<Queries.Delavnice2025Query>) => (
  <Layout>
    <Seo
      title="Visokovalske delavnice 2025 - Vtisi"
      description="Vtisi z highline delavnic 2025 – Bohinjska Bela"
      pathname={location.pathname}
    />
    <div className="prose">
      <h1>Visokovalske delavnice 2025</h1>
      <p className="lead">6. – 8. junij 2025 Bohinjska bela</p>

      <p>
        Med SlackAlien divjaki se približno na dve leti odvija novačenje novih
        članov v obliki delavnic. Delavnice v obliki petih sobot na petih
        kratkih linijah vsakič v drugi ekipi so doživele revolucijo. S pomočjo
        kmetije Dobrine.goods smo razpršeno obliko strnili v čustveno nabit,
        oseben in povezovalen vikend, ki je dvem tečajnikom in dvema tečajnicama
        ponudil izvrstne pogoje za trošenje energije in polnjenje duha.
      </p>

      <p>
        Letos so delavnice in njih priprave prvič potekale v ožji ekipi
        mentorjev. Vsi najboljši pedagogi in Angel varkič Tim. Ostala
        visokovalska srenja se nam je pridružila v obilici šele, ko smo čez
        vikend že res dobro razdražili sosedo.
      </p>

      <p>
        Poleg tehničnega znanja je ekipa mentorjev poskušala predati tudi temelj
        filozofije, ki je potrebna, da lahko začneš vstopati tako globoko, kot to
        od tebe terja visokica. Mentorji smo poučevali složno in za vse enako,
        hkrati pa vsakemu posebej nudili osebno podporo, prilagojeno osebnim
        ciljem.
      </p>

      <p>
        Kok ga ta mladi prbijajo? Glede na visoko povitost nog in rok in
        neomajno vztrajnost ekipe smo lahko mentorji zelo ponosni na njihov nivo
        prbijanja. Aleš je shodil in pokazal plezalno moč pri rokovanju z visom,
        Nina je večkrat vstajala in vstala, Matej je vstajal in vstal in Mojca
        pa nas je našla na instagramu in ga je tudi pribijala redno.
      </p>

      <p>
        Revolucija delavnic, uspela! Kdaj bodo naslednje, ne ve nihče. Do
        trenutka, ko se lahko spet prijaviš tudi ti, pa lahko prebereš vtis
        tečajnice Nine:
      </p>

      <blockquote>
        <p>
          Čeprav sem stala na trdnih tleh, me je vprašanje na spletni strani
          društva SlackAlien – "Si upaš pogledati strahu v oči?" – napolnilo z
          adrenalinom in metuljčki v trebuhu. "Tam gor v zraku, sredi ničesar, pa
          samo na enem trakcu?", se vprašam sama pri sebi.
        </p>

        <p>
          Delavnica je bila res odlično strukturirana. Začeli smo z osnovami hoje
          po vrvi in manevri za dvig na visokici, se učili trikov in tudi
          postavljanja linij. Vsak poskus vstajanja na visokici je bil zame
          edinstvena izkušnja – mešanica notranjega prepričevanja "<em>saj zmorem
          to</em>", razglabljanja o tem, »<em>ali me bo trak zadržal</em>«, in
          osredotočenosti na "<em>stolp</em>" ter dihanje, ki me držita v ravnovesju. V
          tistih trenutkih ni bilo težko odmisliti vsega drugega – obstajala sta
          le trak pod menoj in zrak nad menoj.
        </p>

        <p>
          Iskreno se zahvaljujem vsem mentorjem, ki so nas s strokovnostjo in
          veliko zabave popeljali v svet visokic. Za mano je čudovit vikend,
          preživet v naravi Bohinjske bele. Sedaj pa spet treniram na tleh – in
          že z metuljčki v trebuhu pogledujem proti dnevu, ko bom spet pogledala
          strahu v oči – in morda na visokici tudi naredila kakšen korak!
        </p>
      </blockquote>

      <h2>Visokice delavnic</h2>
      <table>
        <thead>
          <tr>
            <th>Lokacija</th>
            <th>Ime</th>
            <th>Dolžina (m)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bohinjska bela</td>
            <td>Sosedova</td>
            <td>80</td>
          </tr>
          <tr>
            <td>Bohinjska bela</td>
            <td>Maršal</td>
            <td>65</td>
          </tr>
          <tr>
            <td>Bohinjska bela</td>
            <td>Vojaška</td>
            <td>27</td>
          </tr>
          <tr>
            <td>Gradišče (Kupljenik)</td>
            <td>Kremšnodl</td>
            <td>21</td>
          </tr>
        </tbody>
      </table>

      <p>
        Hvala tečajnikom za udeležbo.<br />
        Hvala <ExternalLink href="https://linktr.ee/dobrine.goods">Dobrine.Goods</ExternalLink> za pogostitev.<br />
        Hvala lokalna skupnost Bohinjska Bela za vašo prelepo naravo.<br />
        Hvala SlackAlien, ker obstajaš!
      </p>
    </div>
    <Gallery files={data.allFile.nodes} />
  </Layout>
)

export default Delavnice2025Page

export const pageQuery = graphql`
  query Delavnice2025 {
    allFile(filter: { relativeDirectory: { eq: "delavnice/2025" } }) {
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
