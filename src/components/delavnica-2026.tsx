import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import ExternalLink from "./external-link"

const Delavnica2026 = () => (
  <div className="prose">
    <h1>SlackAlien x dobrine.goods - Highline Delavnice</h1>
    <ul>
      <li>
        <strong>Lokacija:</strong> Bohinjska Bela, Slovenija
      </li>
      <li>
        <strong>Datum:</strong> Petek, 26. junij - Nedelja, 28. junij 2026
      </li>
      <li>
        <strong>Začetek:</strong> Petek ob 9:00
      </li>
      <li>
        <strong>Zaključek:</strong> Nedelja ob 19:00
      </li>
      <li>
        <strong>Prispevek za udeležbo:</strong> 240 &euro;
      </li>
    </ul>

    <a href="/images/delavnice/2026/slackalien-workshop.png" target="_blank" rel="noopener noreferrer">
      <StaticImage
        src="../images/delavnice/2026/slackalien-workshop.png"
        width={1400}
        alt="SlackAlien Highline Delavnica 2026"
        className="img-fluid mb-4 img-plain"
        loading="eager"
        fetchPriority="high"
      />
    </a>

    <p className="lead">
      <strong>Stopi čez rob, tam se začne svoboda!</strong>
    </p>

    <Row className="my-4">
      <Col md={6} lg={3} className="mb-3">
        <a href="/images/delavnice/2026/slackalien-post-1.png" target="_blank" rel="noopener noreferrer">
          <StaticImage
            src="../images/delavnice/2026/slackalien-post-1.png"
            width={600}
            alt="Skupnost"
            className="img-fluid img-plain"
            loading="lazy"
            decoding="async"
          />
        </a>
      </Col>
      <Col md={6} lg={3} className="mb-3">
        <a href="/images/delavnice/2026/slackalien-post-2.png" target="_blank" rel="noopener noreferrer">
          <StaticImage
            src="../images/delavnice/2026/slackalien-post-2.png"
            width={600}
            alt="Mentorstvo"
            className="img-fluid img-plain"
            loading="lazy"
            decoding="async"
          />
        </a>
      </Col>
      <Col md={6} lg={3} className="mb-3">
        <a href="/images/delavnice/2026/slackalien-post-3.png" target="_blank" rel="noopener noreferrer">
          <StaticImage
            src="../images/delavnice/2026/slackalien-post-3.png"
            width={600}
            alt="Narava"
            className="img-fluid img-plain"
            loading="lazy"
            decoding="async"
          />
        </a>
      </Col>
      <Col md={6} lg={3} className="mb-3">
        <a href="/images/delavnice/2026/slackalien-post-4.png" target="_blank" rel="noopener noreferrer">
          <StaticImage
            src="../images/delavnice/2026/slackalien-post-4.png"
            width={600}
            alt="Varnost"
            className="img-fluid img-plain"
            loading="lazy"
            decoding="async"
          />
        </a>
      </Col>
    </Row>

    <p>
      Pridruži se visokovalskim delavnicam najmočnejše visokovalske skupnosti
      jugovzhodne Evrope, ki sliši na ime <strong>SlackAlien</strong>.
    </p>
    <p>Obetaš si lahko kratke in dostopne visokice z izkušenimi mentorji.</p>
    <ul>
      <li>osebno poglobljeno mentorstvo 1 na 1</li>
      <li>tehnike vstajanja in osnove hoje na tleh</li>
      <li>tehnika padanja in plezanja po visu na visokici</li>
      <li>začetniški sedeči triki in nihanje</li>
      <li>prilagojene vaje za telesno pripravo na visokovanje</li>
      <li>
        celotna izkušnja visokovanja (odprava, postavljanje, hoja po traku,
        pospravljanje)
      </li>
      <li>visokica vse dni delavnic</li>
      <li>visenje v viseči mreži na visokici</li>
      <li>
        nastanitev ter lokalna in uravnotežena prehrana kmetije dobrine.goods
      </li>
    </ul>
    <p>
      Visokovanja se ne moreš naučiti sam, saj so začetniške napake že pri
      postavljanju lahko usodne. Raje se uči od prekaljenih mačkov, ki
      razpolagajo z dolgoletnimi izkušnjami in najmodernejšo opremo na trgu.
      Varnost je vsekakor naša najvišja vrednota.
    </p>
    <p>
      Delavnice so primerne za začetnike, ki se z visokovanjem še niso srečali,
      kot tudi za izkušene zanesenjake, ki so svoje prve padce že opravili, a
      jim dejavnost zaradi svoje izjemno čustveno preplavljajoče narave še ne
      predstavlja igre in užitka. Zaželeno je predznanje hoje po traku daljšem
      od 20m in fizična sposobnost dviga na trak ter vstajanja iz sedečega
      položaja.
    </p>
    <p>
      Čas je za polna pljuča, tresoče noge in občutek popolne prisotnosti.
    </p>
    <p>
      <a
        className="btn btn-primary btn-lg"
        href="https://docs.google.com/forms/d/e/1FAIpQLSez5-Ugk9dzggo2fmKqJ1ehOkDlSJYfUk6MSIunkUn2cYgyVw/viewform"
      >
        Ne odlašaj, prijave so odprte!
      </a>
    </p>

    <div className="ratio ratio-16x9 my-5">
      <iframe
        src="https://www.youtube.com/embed/HHQUBZOSJQc?si=vsJbMlBKmuGgo0Wq"
        title="SlackAlien Highline Delavnica"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>

    <hr />

    <h2>Kaj je vključeno v ceno?</h2>

    <h3>Nastanitev in prostori (2 nočitvi, petek-nedelja)</h3>
    <ul>
      <li>Spanje na skednju (na vzmetnici ali v lastni viseči mreži)</li>
      <li>Na voljo so vzglavniki, odeje in rjuhe (po potrebi)</li>
      <li>
        Uporaba skupne kopalnice, dnevnega prostora, vrta in prostora z živalmi
      </li>
      <li>Prijetno in sproščeno okolje za počitek med dejavnostmi</li>
    </ul>

    <h3>Hrana in skupna kuhinja</h3>
    <ul>
      <li>
        Dve skupni kosili (v petek in soboto), pripravljeni s strani{" "}
        <strong>dobrine.goods</strong>
      </li>
      <li>
        Skupna kuhinja za samostojno pripravo zajtrkov, večerij in nedeljske
        malice (sestavine so vključene v ceno)
      </li>
      <li>
        Osnovna živila in sveža sezonska zelenjava s kmetije:
        <ul>
          <li>Kruh, ovseni kosmiči, riž, testenine</li>
          <li>Sezonska zelenjava</li>
          <li>Osnovna kuhinjska živila (olje, sol, začimbe, čaj, kava)</li>
        </ul>
      </li>
    </ul>

    <hr />

    <h2>Visokice</h2>

    <h3>Petek in sobota - Visokice nad slapom Iglica</h3>
    <p>
      Prvo srečanje z visokico – izjemno 40 metrov visoko highline lokacijo nad
      plezališčem Iglica. Na dveh napetih linijah, dolgih 27 m in 65 m, bomo
      skupaj naredili prve korake na višini, vadili manevre in se poigrali s
      prvimi triki.
    </p>

    <h3>Nedelja - Panoramska linija pod Babjim zobom</h3>
    <p>
      Skupinski izlet do razgledne točke z izjemnim pogledom na Blejsko jezero –
      Skupaj bomo postavili 21 metrov dolgo, izpostavljeno panoramsko linijo. Ni
      pretirano visoka, a občutek bo vseeno navdušujoč.
    </p>

    <hr />

    <h2>Urnik</h2>
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th style={{ whiteSpace: "nowrap" }}></th>
            <th>Petek 26.6. — BELA (27m, 65m)</th>
            <th>Sobota 27.6. — BELA (27m, 65m)</th>
            <th>Nedelja 28.6. — KREMŠNODL (21m)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ whiteSpace: "nowrap" }}>Jutro</td>
            <td>/</td>
            <td>Joga in meditacija</td>
            <td>Joga in meditacija</td>
          </tr>
          <tr>
            <td style={{ whiteSpace: "nowrap" }}>Zajtrk 8:00</td>
            <td>/</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td style={{ whiteSpace: "nowrap" }}>Dopoldne</td>
            <td>
              9:00 Zbor in predstavitev
              <br />
              Navezovanje, obračanje in plezanje po visu
              <br />
              Prikaz varnostnih postopkov
            </td>
            <td>
              Ogrevanje
              <br />
              Freestyle osnovni triki
            </td>
            <td>
              Postavljanje panoramske linije
            </td>
          </tr>
          <tr>
            <td style={{ whiteSpace: "nowrap" }}>Kosilo 13:00</td>
            <td></td>
            <td></td>
            <td>Sendviči</td>
          </tr>
          <tr>
            <td style={{ whiteSpace: "nowrap" }}>Popoldne</td>
            <td>
              Slackline delavnica (osnove vstajanja in hoje)
              <br />
              Preizkus na visokici
            </td>
            <td>
              Mrzla voda in dihalne vaje
              <br />
              Visokovanje
            </td>
            <td>Podiranje linije</td>
          </tr>
          <tr>
            <td style={{ whiteSpace: "nowrap" }}>Večerja</td>
            <td></td>
            <td></td>
            <td>/</td>
          </tr>
          <tr>
            <td style={{ whiteSpace: "nowrap" }}>Večer</td>
            <td>
              Visečke na visokici
              <br />
              Zgodbe ob ognju
            </td>
            <td>
              Visečke na visokici
              <br />
              Predstavitev društva in filmski večer
            </td>
            <td>/</td>
          </tr>
        </tbody>
      </table>
    </div>

    <hr />

    <h2>Gostitelji</h2>
    <p>
      Več o naših srčnih gostiteljih si lahko preberete v članku:{" "}
      <ExternalLink href="https://www.24ur.com/novice/slovenija/kmetovanje-bova-prepustila-prostovoljcem-in-odsla-s-kombijem-v-svet.html">
        24ur - dobrine.goods
      </ExternalLink>
    </p>
    <p>
      Spremljaj ju tudi na družabnih omrežjih:{" "}
      <ExternalLink href="https://www.instagram.com/dobrine.goods/">
        Instagram - @dobrine.goods
      </ExternalLink>
    </p>

    <hr />

    <h2>Inštruktorji</h2>
    <ul>
      <li>
        <strong>Gašper Stojc</strong> - Zastopnik društva SlackAlien. Učitelj
        slacklina na domačem vrtu. V eni uri in pol nauči hoditi tudi popolnega
        začetnika.
        <br />
        <strong>Močna točka:</strong> motivacija
      </li>
      <li>
        <strong>Miha Odar</strong> - Najuspešnejši slovenski highline freestyler
        in mentor vseh, ki se v društvu spogledujejo s to disciplino.
        <br />
        <strong>Močna točka:</strong> potrpežljivost
      </li>
      <li>
        <strong>Anže Spreizer</strong> - Gibalni guru, ki se preživlja z učenjem
        flowa in telesno revolucijo povprečnega zemljana.
        <br />
        <strong>Močna točka:</strong> širok pogled
      </li>
      <li>
        <strong>Neža Faganelj</strong> - Profesorica športne vzgoje in
        učiteljica joge, ki prebija led med slovenskimi visokovačkami.
        <br />
        <strong>Močna točka:</strong> strokovnost
      </li>
    </ul>

    <hr />

    <h2>Vtisi s preteklih delavnic</h2>
    <p>
      Vtise udeležencev lanskih delavnic najdeš na:{" "}
      <Link to="/delavnice/2025-vtisi/">Visokovalske delavnice 2025</Link>
    </p>

    <p className="mt-5">
      <a
        className="btn btn-primary btn-lg"
        href="https://docs.google.com/forms/d/e/1FAIpQLSez5-Ugk9dzggo2fmKqJ1ehOkDlSJYfUk6MSIunkUn2cYgyVw/viewform"
      >
        Ne odlašaj, prijave so odprte!
      </a>
    </p>
  </div>
)

export default Delavnica2026
