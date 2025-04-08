import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, PageProps } from "gatsby"

// import Row from "react-bootstrap/Row"
// import Col from "react-bootstrap/Col"
// import Button from "react-bootstrap/Button"
// import Gallery from "../components/gallery"

import Layout from "../components/layout"
import Seo from "../components/seo"

const HomePage = ({ data, location }: PageProps<Queries.HomePageQuery>) => (
  <Layout>
    <Seo title="Domača stran" pathname={location.pathname} />
    <div className="prose">
      <h1 id="slackalien-x-dobrine-goods-highline-delavnice">
        SlackAlien x dobrine.goods - Highline Delavnice
      </h1>
      <ul>
        <li>
          <strong>Lokacija:</strong> Bohinjska Bela, Slovenija
        </li>
        <li>
          <strong>Datum:</strong> Petek, 6. junij - Nedelja, 8. junij 2025
        </li>
        <li>
          <strong>Začetek:</strong> Petek ob 9:00
        </li>
        <li>
          <strong>Zaključek:</strong> Nedelja ob 19:00
        </li>
        <li>
          <strong>Prispevek za udeležbo:</strong> 240 €
        </li>
      </ul>
      <StaticImage
        src="../images/dobrine/2025-highline-delavnice-plakat.png"
        width={600}
        alt="SlackAlien"
        className="img-fluid mb-4"
      />
      <p>
        Poglej strahu v oči in se dvigni na višjo raven! Pridruži se
        visokovalskim delavnicam najmočnejše visokovalske skupnosti jugovzhodne
        Evrope ki sliši na ime <strong>SlackAlien</strong>.
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
        Delavnice so primerne za začetnike, ki se z visokovanjem še niso
        srečali, kot tudi za izkušene zanesenjake, ki so svoje prve padce že
        opravili a jim dejavnost zaradi svoje izjemno čustveno preplavljajoče
        narave še ne predstavlja igre in užitka. Zaželeno je predznanje hoje po traku daljšem od 20m in fizična sposobnost dviga na trak ter vstajanja iz sede.
      </p>
      <p>
        Čas je, da si podjarmiš svoje strahove. Čas je za polna pljuča svobode.
      </p>
      <p>
        <a
          className="btn btn-primary btn-lg"
          href="https://forms.gle/dnZxU8sAbHKKJ7pF7"
        >
          Ne odlašaj! Pohiti s prijavo!
        </a>
      </p>
      <hr />
      <h2 id="kaj-je--e-vklju-eno-v-ceno-">Kaj je še vključeno v ceno?</h2>
      <h3 id="nastanitev-in-prostori-2-no-itvi-petek-nedelja-">
        Nastanitev in prostori (2 nočitvi, petek-nedelja)
      </h3>
      <ul>
        <li>
          <p>Spanje na skednju (na vzmetnici ali v lastni viseči mreži)</p>
        </li>
        <li>
          <p>Na voljo so vzglavniki, odeje in rjuhe (po potrebi)</p>
        </li>
        <li>
          <p>
            Uporaba skupne kopalnice, dnevnega prostora, vrta in prostora z
            živalmi
          </p>
        </li>
        <li>
          <p>Prijetno in sproščeno okolje za počitek med dejavnostmi</p>
        </li>
      </ul>
      <h3 id="hrana-in-skupna-kuhinja">Hrana in skupna kuhinja</h3>
      <ul>
        <li>
          <p>
            Dva skupna kosila (v petek in soboto), pripravljena s strani  <strong>dobrine.goods</strong>
          </p>
        </li>
        <li>
          <p>
            Skupna kuhinja za samostojno pripravo zajtrkov, večerij in nedeljske
            malice (sestavine so vključene v ceno)
          </p>
        </li>
        <li>
          <p>Osnovna živila in sveža sezonska zelenjava s kmetije:</p>
          <ul>
            <li>
              <p>Kruh, ovseni kosmiči, riž, testenine
            </li>
            <li>
              Sezonska zelenjava
            </li>
            <li>
                Osnovni kuhinjski pripomočki (olje, sol, začimbe, čaj, kava)
              </p>
            </li>
          </ul>
        </li>
      </ul>
      <hr />
      <h2 id="slackline-program">Visokice</h2>
      <h3 id="petek-in-sobota-visokica-nad-slapom-iglica">
        Petek in sobota - Visokice nad slapom Iglica
      </h3>
      <p>
        Prvo srečanje z visokico – izjemno 40 metrov visoko highline lokacijo nad plezališčem Iglica.
Na dveh napetih linijah, dolgih 27 m in 65 m, bomo skupaj naredili prve korake na višini, vadili manevre in se poigrali s prvimi triki.
      </p>
      <StaticImage
        src="../images/dobrine/highline-delavnice-iglica.jpg"
        width={1400}
        alt="Highline Delavnice - Iglica"
        className="img-fluid mb-4"
      />
      <h3 id="nedelja-panoramska-linija-pod-babjim-zobom">
        Nedelja - Panoramska linija pod Babjim zobom
      </h3>
      <p>
        Skupinski izlet do razgledne točke z izjemnim pogledom na Blejsko
        jezero – Skupaj bomo postavili 21 metrov dolgo, izpostavljeno panoramsko linijo.
        Ni pretirano visoka, a občutek bo vseeno navdušujoč.
      </p>
      <StaticImage
        src="../images/dobrine/highline-delavnice-kremsnodl.jpg"
        width={1400}
        alt="Highline Delavnice - Kremšnodl"
        className="img-fluid mb-4"
      />
      <hr />
      <h2 id="gostitelji">Gostitelji</h2>
      <p>Več o naših srčnih gostiteljih si lahko preberete v članku:</p>
      <ul>
        <li>
          <a href="https://www.24ur.com/novice/slovenija/kmetovanje-bova-prepustila-prostovoljcem-in-odsla-s-kombijem-v-svet.html">
            24ur - dobrine.goods
          </a>
        </li>
      </ul>
      <p>Spremljaj ju tudi na družabnih omrežjih:</p>
      <ul>
        <li>
          <a href="https://www.instagram.com/dobrine.goods/">
            Instagram - @dobrine.goods
          </a>
        </li>
      </ul>
      <hr />
      <h2 id="in-truktorji">Inštruktorji</h2>
      <ul>
        <li>
          <p>
            <strong>Gašper Stojc</strong> - Zastopnik društva SlackAlien.
            Učitelj slacklina na domačem vrtu. V eni uri in pol nauči hoditi
            tudi popolnega začetnika. <br />
            <strong>Močna točka:</strong> motivacija
          </p>
        </li>
        <li>
          <p>
            <strong>Miha Odar</strong> - Najuspešnejši slovenski highline
            freestyler in mentor vseh, ki se v društvu spogledujejo s to disciplino.  <br />
            <strong>Močna točka:</strong> potrpežljivost
          </p>
        </li>
        <li>
          <p>
            <strong>Anže Spreizer</strong> - Gibalni guru, ki se preživlja z učenjem flowa in telesno revolucijo povprečnega zemljana.  <br />
            <strong>Močna točka:</strong> širok pogled
          </p>
        </li>
        <li>
          <p>
            <strong>Neža Faganelj</strong> - Profesorica športne vzgoje in
            učiteljica joge. <br />
            <strong>Močna točka:</strong> strokovnost
          </p>
        </li>
      </ul>
    </div>
    {/* <Row className="flex-row-reverse" style={{ margin: "4rem 0 4rem 0" }}>
      <Col md={4}>
        <StaticImage
          src="../images/logo/slackalien-abduction.png"
          width={400}
          alt="SlackAlien"
          className="img-fluid mb-4"
        />
      </Col>
      <Col md={8}>
        <p>
          V deželi na sončni strani Alp se po gozdovih potika skupina vesoljcev.
          Iščemo brezna, luknje, prepade in pečine, da bi hodili tam, kjer ni
          hodil še nihče.
        </p>
        <p>
          Smo fantje in dekleta vseh starosti, ki se ločimo od mlačne
          povprečnosti v dolini predvsem po tem, da želimo svojim strahovom
          pogledati naravnost v oči in jih pustiti nekje v preteklosti.
        </p>
        <p>
          Iščemo najlepše prostore izven uhojenih poti, kjer se za kratek čas
          zasidramo in hkrati dotaknemo neba.
        </p>
        <p>
          Mlačnost v dolini nas ima za nore in nepremišljene, pravijo nam, da se
          igramo z življenjem. Mogoče je v tem zrno resnice. A naša življenja bi
          nam bila težko bolj dragocena. Prav zato jih nameravamo živeti v
          polnosti.
        </p>
        <p>Se tudi ti ne znajdeš v mlačnosti doline? Pridi z nami visokovat!</p>
        <ul>
          <li>
            Pripravljeni smo ti predstaviti prve varne korake v svet
            visokovanja.
          </li>
          <li>
            Pripravljeni smo razdati svoje znanje, ki smo ga nabrali širom
            vesolja.
          </li>
          <li>Pripravljeni smo ti posoditi najboljšo opremo.</li>
          <li>
            Pripravljeni smo s tabo plesati in vriskati ob ognju pozno v noč.
          </li>
        </ul>
        <p>
          Vprašanje je: si ti pripravljen/a pogledati strahu naravnost v oči?
        </p>
        <div>
          <Button size="lg" as={Link as any} to="/za-zacetnike/">
            Pripravljen sem!
          </Button>
        </div>
      </Col>
    </Row>
    <Gallery files={data.allFile.nodes} />
    */}
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  query HomePage {
    allFile(filter: { relativeDirectory: { eq: "o-nas" } }) {
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
