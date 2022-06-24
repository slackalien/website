import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PageProps } from "gatsby"
import Masonry from "react-masonry-css"

import Container from "react-bootstrap/Container"

import Layout from "../components/layout"
import Seo from "../components/seo"

const VarnostPage = ({ location }: PageProps) => (
  <Layout>
    <Seo title="Varnost" pathname={location.pathname} />
    <Container className="px-0 py-5">
      <h1>Varnost</h1>
      <p>
        Visokovanje na edinstven način združuje gibanje, prisotnost, zanos in
        lepoto. A moramo seveda biti živi, da lahko vse to izkusimo znova in
        znova. Varnost je zato naša prva prioriteta. Da bomo lahko še dolgo
        visokovali, se držimo naslednjih vodil:
      </p>
      <ul>
        <li>
          Na trak vedno stopamo navezani. Preden zapustimo sidišče, preverimo,
          da imamo pas pravilno nameščen in da je vozel na visu pravilno
          zavezan.
        </li>
        <li>
          Vse komponente visokice so podvojene. V sicer malo verjetnem, a vseeno
          mogočem primeru, da bi kaka od komponent popustila, bi njeno vlogo
          prevzela rezervna. S tem se zavarujemo pred skritimi napakami na
          opremi ter nepričakovanimi zunanjimi dejavniki.
        </li>
        <li>
          Uporabljamo namensko in strokovno izdelano opremo z znanimi
          specifikacijami ter poskrbimo, da se obremenitve, ki jim je
          izpostavljena, gibljejo znotraj zanjo predpisanih meja. Naši sistemi
          so vedno načrtovani z ustreznim varnostnim faktorjem, kar pomeni, da
          so sposobni varno prenesti tudi nekajkrat višje sile, kot so jim
          izpostavljeni med visokovanjem.
        </li>
        <li>
          Visokice postavlja dobro izurjena in izkušena ekipa. Začetnike rade
          volje vključimo v proces postavljanja, a vedno pod budnim nadzorom
          izkušenega mentorja. Tako poskrbimo, da se znanje prenaša na čim večji
          del ekipe.
        </li>
        <li>
          Svoje znanje ves čas izpopolnjujemo. Sledimo razvoju smernic in dobrih
          praks na področju visokovanja in jih upoštevamo pri svojih
          dejavnostih.
        </li>
        <li>
          Tako pri postavljanju kot pri navzovanju se držimo principa dvojnega
          preverjanja: vse ključne komponente sistema pred uporabo pregledata
          vsaj dve usposobljeni osebi. Preden stopimo na trak, poprosimo kolega,
          da za nas naredi varnostni pregled in potrdi, da imamo pas pravilno
          zapet ter da je vozel na visu pravilno zavezan.
        </li>
      </ul>
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
        />
        <StaticImage
          src="../images/oprema-in-varnost/oprema.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/oprema-in-varnost/banananjam.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/oprema-in-varnost/hangover.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/oprema-in-varnost/a-frame.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/oprema-in-varnost/izdelava-sidrisca.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/oprema-in-varnost/leash-ring.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/oprema-in-varnost/vrtanje.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/oprema-in-varnost/padec.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/oprema-in-varnost/padec2.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/oprema-in-varnost/space-net.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/oprema-in-varnost/safety-first.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
        <StaticImage
          src="../images/oprema-in-varnost/padec3.jpg"
          alt=""
          className="img-fluid"
          width={360}
        />
      </Masonry>
    </Container>
  </Layout>
)

export default VarnostPage
