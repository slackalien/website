import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Domača stran" />

    <section>
      <div className="px-4 py-5 my-5 text-center">
        <StaticImage
          src="../images/slackalien.svg"
          width={400}
          alt="SlackAlien"
          className="img-fluid mb-4"
        />
        <h1 className="display-5 fw-bold">SlackAlien</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Slovenska highline in slackline ekipa.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              O nas
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Visokica Wiki
            </button>
          </div>
        </div>
      </div>
    </section>

    <section className="border-top">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <StaticImage
              src="../images/slackalien.svg"
              width={400}
              alt="SlackAlien"
              className="img-fluid mb-4"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Sončna stran Alp</h1>
            <p className="lead">
              V deželi na sončni strani Alp se po gozdovih potika skupina
              vesoljcev. Iščemo brezna, luknje, prepade in pečine, da bi hodili
              tam kjer ni hodil še nihče.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="border-top">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <StaticImage
              src="../images/slackalien.svg"
              width={400}
              alt="SlackAlien"
              className="img-fluid mb-4"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Premagaj strah</h1>
            <p className="lead">
              Smo fantje in dekleta vseh starosti, ki se ločimo od mlačne
              povprečnosti v dolini predvsem po tem, da želimo svojim strahovom
              pogledati naravnost v oči in jih pustiti nekje v preteklosti.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="border-top">
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold">Med zemljo in nebom</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Iščemo najlepše prostore izven uhojenih poti, kjer se za kratek čas
            zasidramo in hkrati dotaknemo neba.
          </p>
        </div>
        <div className="overflow-hidden" style="max-height: 30vh;">
          <div className="container px-5">
            <StaticImage
              src="../images/slackalien.svg"
              width={400}
              alt="SlackAlien"
              className="img-fluid mb-4"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="border-top">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <StaticImage
              src="../images/slackalien.svg"
              width={400}
              alt="SlackAlien"
              className="img-fluid mb-4"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Živi na polno</h1>
            <p className="lead">
              Mlačnost v dolini nas ima za nore in nepremišljene, pravijo nam da
              se igramo z življenjem. Mogoče je v tem zrno resnice. A naša
              življenja bi nam bila težko bolj dragocena. Prav zato jih
              nameravamo živeti v polnosti.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
