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
                V deželi na sončni strani Alp se po gozdovih potika skupina
                vesoljcev. Iščemo brezna, luknje, prepade in pečine, da bi
                hodili tam kjer ni hodil še nihče.
              </p>
              <div className="d-grid gap-2 d-sm-flex">
                <Link className="btn btn-light btn-lg px-4 gap-3" to="/o-nas">
                  O nas
                </Link>
                <button
                  className="btn btn-outline-light btn-lg px-4"
                  onClick={() => scrollTo("alpe")}
                >
                  Več
                  <DownIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="alpe" className="border-top">
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
              <button
                type="button"
                className="btn btn-secondary btn-lg px-4"
                onClick={() => scrollTo("strah")}
              >
                Naprej
                <DownIcon />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="strah" className="border-top">
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
              <h1 className="display-6 fw-bold lh-1 mb-3">Premagaj strah</h1>
              <p className="lead">
                Smo fantje in dekleta vseh starosti, ki se ločimo od mlačne
                povprečnosti v dolini predvsem po tem, da želimo svojim
                strahovom pogledati naravnost v oči in jih pustiti nekje v
                preteklosti.
              </p>
              <button
                type="button"
                className="btn btn-secondary btn-lg px-4"
                onClick={() => scrollTo("nebo")}
              >
                Naprej
                <DownIcon />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="nebo" className="border-top">
        <div className="px-4 pt-5 my-5 text-center">
          <h1 className="display-4 fw-bold">Med zemljo in nebom</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Iščemo najlepše prostore izven uhojenih poti, kjer se za kratek
              čas zasidramo in hkrati dotaknemo neba.
            </p>
            <button
              type="button"
              className="btn btn-secondary btn-lg px-4 mb-5"
              onClick={() => scrollTo("zivi")}
            >
              Naprej
              <DownIcon />
            </button>
          </div>
          <div className="overflow-hidden">
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

      <section id="zivi" className="border-top">
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
              <h1 className="display-5 fw-bold lh-1 mb-3">Živi na polno</h1>
              <p className="lead">
                Mlačnost v dolini nas ima za nore in nepremišljene, pravijo nam
                da se igramo z življenjem. Mogoče je v tem zrno resnice. A naša
                življenja bi nam bila težko bolj dragocena. Prav zato jih
                nameravamo živeti v polnosti.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
