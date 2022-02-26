import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import DownIcon from "../icons/down-icon"

const IndexPage = () => {
  const scrollTo = id => {
    const el = document.getElementById(id)
    window.scrollTo(el.offsetLeft, el.offsetTop)
  }
  return (
    <Layout>
      <Seo title="Domača stran" />

      <section id="domov">
        <div className="container col-xxl-10 px-4">
          <div className="min-vh-100 row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-12 col-lg-6">
              <StaticImage
                src="../images/slackalien-abduction.png"
                width={480}
                alt="SlackAlien"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">SlackAlien</h1>
              <p className="lead">
                Se tudi ti ne znajdeš v mlačnosti doline? Pridi z nami
                visokovat!
              </p>
              <div className="d-grid gap-2 d-sm-flex">
                <button
                  className="btn btn-outline-light btn-lg px-4"
                  onClick={() => scrollTo("o-nas")}
                >
                  Preberi več
                  <DownIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="o-nas" className="border-top">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="display-6 col-12 col-lg-6">
              <StaticImage
                src="../images/slackalien.svg"
                width={400}
                alt="SlackAlien"
                className="img-fluid mb-4"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="fw-bold lh-1 mb-3">Na sončni strani Alp</h1>
              <p className="lead">
                V deželi na sončni strani Alp se po gozdovih potika skupina
                vesoljcev. Iščemo brezna, luknje, prepade in pečine, da bi
                hodili tam kjer ni hodil še nihče.
              </p>
              <div className="d-grid gap-2 d-sm-flex">
                <Link className="btn btn-light btn-lg px-4 gap-3" to="/o-nas">
                  O nas
                </Link>
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg px-4"
                  onClick={() => scrollTo("visokica")}
                >
                  Naprej
                  <DownIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="visokica" className="border-top">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row align-items-center g-5 py-5">
            <div className="col-12 col-lg-6">
              <StaticImage
                src="../images/slackalien.svg"
                width={400}
                alt="SlackAlien"
                className="img-fluid mb-4"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-6 fw-bold lh-1 mb-3">Visokica</h1>
              <p className="lead">
                Smo fantje in dekleta vseh starosti, ki se ločimo od mlačne
                povprečnosti v dolini predvsem po tem, da želimo svojim
                strahovom pogledati naravnost v oči in jih pustiti nekje v
                preteklosti.
              </p>
              <div className="d-grid gap-2 d-sm-flex">
                <Link
                  className="btn btn-light btn-lg px-4 gap-3"
                  to="/visokica"
                >
                  Kaj je visokica?
                </Link>
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg px-4"
                  onClick={() => scrollTo("vesoljska-mreza")}
                >
                  Naprej
                  <DownIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vesoljska-mreza" className="border-top">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="display-6 col-12 col-lg-6">
              <StaticImage
                src="../images/slackalien.svg"
                width={400}
                alt="SlackAlien"
                className="img-fluid mb-4"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="fw-bold lh-1 mb-3">Vesoljska mreža</h1>
              <p className="lead">
                Levitiramo, meditiramo, plešemo in izvajamo ostale vragolije na
                vesoljskih mrežah spletena iz tankih vrvic.
              </p>
              <div className="d-grid gap-2 d-sm-flex">
                <Link
                  className="btn btn-light btn-lg px-4 gap-3"
                  to="/vesoljska-mreza"
                >
                  Kaj je vesoljska mreža?
                </Link>
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg px-4"
                  onClick={() => scrollTo("oprema-in-varnost")}
                >
                  Naprej
                  <DownIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="oprema-in-varnost" className="border-top">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row align-items-center g-5 py-5">
            <div className="col-12 col-lg-6">
              <StaticImage
                src="../images/slackalien.svg"
                width={400}
                alt="SlackAlien"
                className="img-fluid mb-4"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-6 fw-bold lh-1 mb-3">Oprema in varnost</h1>
              <p className="lead">
                Varnost je naša prva prioriteta. Na trak vedno stopamo navezani.
                Oprema je profesionalna in namenjena zgolj vesoljcem.
              </p>
              <div className="d-grid gap-2 d-sm-flex">
                <Link
                  className="btn btn-light btn-lg px-4 gap-3"
                  to="/oprema-in-varnost"
                >
                  Več o opremi in varnosti
                </Link>
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg px-4"
                  onClick={() => scrollTo("delavnice")}
                >
                  Naprej
                  <DownIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="delavnice" className="border-top">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="display-6 col-12 col-lg-6">
              <StaticImage
                src="../images/slackalien.svg"
                width={400}
                alt="SlackAlien"
                className="img-fluid mb-4"
              />
            </div>
            <div className="col-lg-6">
              <p className="lead">Se tudi ti ne znajdeš v mlačnosti doline?</p>
              <h1 className="fw-bold lh-1 mb-3">Pridi z nami visokovat!</h1>
              <ul>
                <li>
                  Pripravljeni smo razdati svoje znanje, ki smo ga nabrali širom
                  vesolja.
                </li>
                <li>
                  Pripravljeni smo ti posoditi najboljšo opremo v vesolju.
                </li>
                <li>
                  Pripravljeni smo s tabo plesati in vriskati ob ognju pozno v
                  noč.
                </li>
              </ul>
              <p className="lead">
                Vprašanje je: si ti pripravljen/a pogledati strahu naravnost v
                oči?
              </p>
              <a
                className="btn btn-primary btn-lg d-block px-4 mt-4 gap-3"
                href="https://visokica.andrej.ad-vega.si/za_za%C4%8Detnike"
                target="_blank"
                rel="noreferrer"
              >
                Pripravljen sem!
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
