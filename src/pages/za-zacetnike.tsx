import * as React from "react"
import { Link, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Slovar from "../components/slovar"

const ZaZacetnikePage = ({ location }: PageProps) => (
  <Layout>
    <Seo title="Za začetnike" pathname={location.pathname} />
    <Row>
      <Col md={8}>
        <h1>Za začetnike</h1>
        <p>
          Tako torej. Mika te visokovanje. Kaj pa zdaj? Prva in najpomembnejša
          stvar je, da se tega nikakor ne lotevaš na lastno pest. Vsaka napaka
          se lahko konča z izgubo življenja. Varno visokovanje zahteva znanje in
          pristope, ki se jih lahko naučiš le tako, da se pridružiš ekipi, ki
          jih že ima. Seveda pa je dobro najprej narediti domačo nalogo in se
          poučiti o zadevah. Upamo, da ti bo ta priročnik pomagal pri tem.
        </p>
        <p>
          Predlagamo, da si najprej po dolgem in počez prebereš to stran,
          nadaljuješ s spletnimi viri, naposled pa se za svojo prvo pravo
          priložnost pozanimaš pri visokovalski skupnosti. Pri nas se lahko
          udeležiš kakega našega dogodka ali pa se kar prijaviš na highline{" "}
          <Link to="/delavnice">delavnice</Link>. Ponavadi pa nas v predpoletnem
          času najdeš tudi vsak torek v parku Tivoli.
        </p>
        <StaticImage
          src="../images/delavnice/sidrisce1.jpg"
          className="img-fluid mb-2"
          alt=""
        />
        <hr className="my-5" />
        <h2>Potrebno predznanje</h2>
        <p>
          Visokovanje je fizično, predvsem pa psihično naporno, zato je treba
          biti pred prvim poskusom ustrezno pripravljen. Iskreno oceni svoje
          veščine. Tudi če že znaš hoditi po traku, bodo tvoje sposobnosti ob
          pogledu v globino verjetno na mah izpuhtele, kar pomeni, da se
          visokovanja še nima smisla lotevati, če je že tvoja hoja v parku
          negotova. Tule je zbranih nekaj predpogojev za uspešno srečanje z
          visokovanjem.
        </p>
        <ol>
          <li className="mb-3">
            <b>Sposobnost v parku prehoditi trak dolžine okoli 30 metrov.</b>
            <br />
            Visokic, krajših od te razdalje, se praktično nikoli ne postavlja,
            saj bi bil padec nanje preveč sunkovit. Trak, na katerem vadiš, naj
            tudi ne bo preveč napet: običajno imajo visokice razmerje med
            povesom (na sredini) in dolžino med 1:10 in 1:15. Pri 30-metrskem
            traku to pomeni med 2 m in 3 m povesa. Če običajno vadiš na bolj
            napetem traku, tvoje telo ne bo pripravljeno na dinamiko visokice. A
            previdno pri vadbi – če si krajišča postaviš tako visoko, nikar ne
            hodi preblizu njih. Nočemo, da se polomiš, še preden se sploh
            srečamo!
          </li>
          <li className="mb-3">
            <b>Sposobnost dviga na trak iz visečega položaja.</b>
            <br /> Na visokici ni tal, s katerimi bi si bilo moč pomagati pri
            vstajanju, in po vsakem padcu se je treba znati povzpeti nazaj.
            Manever je dokaj preprost, ko ga enkrat obvladaš, je pa zanj
            potrebne nekaj vaje. Vadiš lahko tako, da si v parku napneš trak
            dovolj visoko, da ko se zanj primeš z rokami ter zatakneš z nogo,
            obvisiš pod njim. Če vadiš na traku s predlaganimi razmerji (dolžina
            okoli 30 m in krajišča od 2 m do 3 m visoko) bo to tako ali tako
            najpriročnejši način za priti nanj.
          </li>
          <li className="mb-3">
            <b>Sposobnost vstajanja iz sedečega položaja.</b>
            <br />
            Tudi to lahko vadiš v parku. Začni na kratkih in nizkih trakovih. Če
            te je strah padca (zlasti neprijeten in nevaren je padec na hrbet),
            za začetek poprosi kakega prijatelja, da stoji ob tebi, pripravljen,
            da te prestreže.
          </li>
        </ol>
        <StaticImage
          src="../images/visokica/dovska.jpg"
          className="img-fluid mb-2"
          alt=""
        />
        <hr className="my-5" />
        <h2>Potrebna oprema</h2>
        <p>
          Če meniš, da imaš potrebne sposobnosti, je čas za naslednji korak. Kaj
          potrebuješ pri svojem prvem visokovanju? Najkrajši odgovor je: nič.
          Nekoliko daljši odgovor je: dobro voljo in pripravljenost pomagati. Če
          že hočeš prinesti kak kos opreme, prinesi plezalni pas, če ga imaš.
        </p>
        <p>
          Če so se te zgoraj napisana vodila prijela, veš, da bodo za začetek
          visokico zate postavili izkušeni visokovalci, ki že imajo vso potrebno
          opremo. Je pa prijazno in pričakovano, da se jim kako oddolžiš. Lahko
          se ponudiš za prevoz. Lahko neseš nahrbtnik z opremo. Lahko prineseš
          hrano in pijačo. Lahko pomagaš pri postavljanju, fotografiraš, igraš
          na inštrument, vzpodbujaš, ustvarjaš dobro vzdušje. Če pokažeš svojo
          pripravljenost prispevati k dogodku, te bodo visokovalci vedno radi
          imeli v svoji družbi.
        </p>
        <StaticImage
          src="../images/oprema-in-varnost/oprema.jpg"
          className="img-fluid mb-2"
          alt=""
        />
      </Col>
      <Col md={4}>
        <Slovar location={location} />
      </Col>
    </Row>
  </Layout>
)

export default ZaZacetnikePage
