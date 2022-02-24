import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="O nas" />
    <div className="container py-5">
      <h1>O nas</h1>
      <p className="fw-light">
        Strah, narava, ravnovesje, varnost, novi podvigi, pustolovščina,
        highline.
      </p>
      <p className="lead">
        V deželi na sončni strani Alp se po gozdovih potika skupina vesoljcev.
        Iščemo brezna, luknje, prepade in pečine, da bi hodili tam kjer ni hodil
        še nihče.
      </p>
      <p>
        Smo fantje in dekleta vseh starosti, ki se ločimo od mlačne povprečnosti
        v dolini predvsem po tem, da želimo svojim strahovom pogledati naravnost
        v oči in jih pustiti nekje v preteklosti.
      </p>
      <p>
        Iščemo najlepše prostore izven uhojenih poti, kjer se za kratek čas
        zasidramo in hkrati dotaknemo neba. Mlačnost v dolini nas ima za nore in
        nepremišljene, pravijo nam, da se igramo z življenjem. Mogoče je v tem
        zrno resnice. A naša življenja bi nam bila težko bolj dragocena. Prav
        zato jih nameravamo živeti v polnosti.
      </p>
      <div className="py-4">
        <StaticImage
          src="../images/slackalien-abduction.png"
          width={480}
          alt="SlackAlien"
          className="img-fluid mb-4"
        />
      </div>
      <h4>Se tudi ti ne znajdeš v mlačnosti doline? Pridi z nami visokovat!</h4>
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
      <p>Vprašanje je: si ti pripravljen/a pogledati strahu naravnost v oči?</p>
      <a
        className="btn btn-primary btn-lg d-block px-4 mt-4 gap-3"
        href="https://visokica.andrej.ad-vega.si/za_za%C4%8Detnike"
        target="_blank"
        rel="noreferrer"
      >
        Pripravljen sem!
      </a>
    </div>
  </Layout>
)

export default AboutPage
