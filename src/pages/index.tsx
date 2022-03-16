import * as React from "react"
import { Link, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import DownIcon from "../icons/down-icon"

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  el && window.scrollTo(el.offsetLeft, el.offsetTop)
}

const IndexPage = ({ location }: PageProps) => {
  return (
    <Layout>
      <Seo title="Domača stran" pathname={location.pathname} />

      <section id="domov" className="container col-xxl-10 px-4 min-vh-100">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 min-vh-100">
          <div className="col-lg-6 d-flex justify-content-center mt-4 mt-md-0">
            <StaticImage
              src="../images/logo/slackalien-abduction.png"
              className="img-fluid"
              alt="SlackAlien"
              width={400}
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1">SlackAlien</h1>
            <p className="lead">
              V deželi na sončni strani Alp se po gozdovih potika skupina
              vesoljcev. Iščemo brezna, luknje, prepade in pečine, da bi hodili
              tam kjer ni hodil še nihče.
            </p>
            <div className="d-grid gap-2 d-sm-flex">
              <button
                className="btn btn-outline-light btn-lg px-4"
                onClick={() => scrollTo("visokovalci")}
              >
                Preberi več
                <DownIcon />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/*
      <StaticImage
        src="../images/prva/black.jpg"
        className="img-fluid d-none"
        alt=""
        width={1920}
      />
      */}

      <section id="visokovalci" className="border-top border-light">
        <div className="container col-xxl-10 px-4">
          <div className="row align-items-center g-5 py-5 min-vh-100">
            <div className="col-lg-6 d-flex justify-content-center">
              <StaticImage
                src="../images/prva/visokica1.svg"
                className="img-fluid"
                alt="Visokovalci"
                width={600}
              />
            </div>
            <div className="col-lg-6">
              <h1 className="fw-bold lh-1 mb-3">Visokovalci</h1>
              <p className="lead">
                Smo fantje in dekleta vseh starosti, ki se ločimo od mlačne
                povprečnosti v dolini predvsem po tem, da želimo svojim
                strahovom pogledati naravnost v oči in jih pustiti nekje v
                preteklosti.
              </p>
              <div className="d-grid gap-2 d-sm-flex">
                <Link to="/o-nas" className="btn btn-light btn-lg px-4 gap-3">
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

      {/*
      <StaticImage
        src="../images/prva/trees.jpg"
        className="img-fluid d-none"
        alt=""
        width={1920}
      />
      */}

      <section id="visokica" className="border-top border-light">
        <div className="container col-xxl-10 px-4">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5 min-vh-100">
            <div className="col-lg-6 d-flex justify-content-center">
              <StaticImage
                src="../images/prva/visokica2.svg"
                className="img-fluid"
                alt="Visokica"
                width={600}
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-6 fw-bold lh-1 mb-3">Visokica</h1>
              <p className="lead">
                Iščemo najlepše prostore izven uhojenih poti, kjer se za kratek
                čas zasidramo in hkrati dotaknemo neba.
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
                  onClick={() => scrollTo("visokovanje")}
                >
                  Naprej
                  <DownIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
      <StaticImage
        src="../images/prva/sky.jpg"
        className="img-fluid d-none"
        alt=""
        width={1920}
      />
      */}

      <section id="visokovanje" className="border-top border-light">
        <div className="container col-xxl-10 px-4">
          <div className="row align-items-center g-5 py-5 min-vh-100">
            <div className="col-lg-6 d-flex justify-content-center">
              <StaticImage
                src="../images/prva/visokica3.svg"
                className="img-fluid"
                alt="Visokovanje"
                width={600}
              />
            </div>
            <div className="col-lg-6">
              <h1 className="fw-bold lh-1 mb-3">Visokovanje</h1>
              <p className="lead">
                Mlačnost v dolini nas ima za nore in nepremišljene, pravijo nam,
                da se igramo z življenjem. Mogoče je v tem zrno resnice. A naša
                življenja bi nam bila težko bolj dragocena. Prav zato jih
                nameravamo živeti v polnosti.
              </p>
              <div className="d-grid gap-2 d-sm-flex">
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

      {/*
      <StaticImage
        src="../images/prva/orange.jpg"
        className="img-fluid d-none"
        alt=""
        width={1920}
      />
      */}

      <section id="delavnice" className="border-top border-light">
        <div className="container col-xxl-10 px-4">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5 min-vh-100">
            <div className="col-lg-6 d-flex justify-content-center">
              <StaticImage
                src="../images/logo/slackalien.svg"
                className="img-fluid mb-4"
                alt="SlackAlien"
                width={500}
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
              <div className="d-grid gap-2 d-sm-flex">
                <Link className="btn btn-light btn-lg px-4 gap-3" to="/start">
                  Pripravljen sem!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
      <StaticImage
        src="../images/prva/purple.jpg"
        className="img-fluid w-100"
        alt="Space Net"
        width={1280}
      />
      */}
    </Layout>
  )
}

export default IndexPage
