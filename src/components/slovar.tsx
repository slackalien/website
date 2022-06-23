import * as React from "react"
import { Link } from "gatsby"

import Nav from "react-bootstrap/Nav"

type Props = {
  children: React.ReactNode
  to: string
}

const Item = (props: Props) => <Nav.Link as={Link} {...props} />

const Prirocnik = () => {
  return (
    <div className="py-5 pt-0 pt-md-5">
      <h2>Priročnik</h2>
      <Nav>
        <Item to="/prirocnik/a-okvir">A-okvir</Item>
        <Item to="/prirocnik/abrazija">abrazija</Item>

        <Item to="/prirocnik/banana">banana</Item>
        <Item to="/prirocnik/bicev-vozel">bičev vozel</Item>

        <Item to="/prirocnik/deltasti-clen">deltasti člen</Item>
        <Item to="/prirocnik/frostov-vozel">Frostov vozel</Item>
        <Item to="/prirocnik/glavni-trak">glavni trak</Item>
        <Item to="/prirocnik/jebeno-velik-vozel">jebeno velik vozel</Item>
        <Item to="/prirocnik/kavbojski-vozel">kavbojski vozel</Item>

        <Item to="/prirocnik/macek">maček</Item>
        <Item to="/prirocnik/mehanska-prednost">mehanska prednost</Item>
        <Item to="/prirocnik/minimalna-porusna-sila">
          minimalna porušna sila
        </Item>
        <Item to="/prirocnik/mnozilnik">množilnik</Item>

        <Item to="/prirocnik/napetost">napetost</Item>
        <Item to="/prirocnik/napenjanje">napenjanje</Item>
        <Item to="/prirocnik/napenjalni-sistem">napenjalni sistem</Item>
        <Item to="/prirocnik/napenjalna-stran">napenjalna stran</Item>
        <Item to="/prirocnik/najlonski-vozel">najlonski vozel</Item>
        <Item to="/prirocnik/neskoncna-zanka">neskončna zanka</Item>
        <Item to="/prirocnik/najvecja-delovna-obremenitev">
          največja delovna obremenitev
        </Item>

        <Item to="/prirocnik/osmica">osmica</Item>
        <Item to="/prirocnik/ovalni-clen">ovalni člen</Item>

        <Item to="/prirocnik/pilotna-vrv">pilotna vrv</Item>
        <Item to="/prirocnik/podloga">podloga</Item>
        <Item to="/prirocnik/podlozka">podložka</Item>
        <Item to="/prirocnik/pomozni-trak">pomožni trak</Item>
        <Item to="/prirocnik/popuscalka">popuščalka</Item>
        <Item to="/prirocnik/postavljanje">postavljanje</Item>
        <Item to="/prirocnik/primez">primež</Item>

        <Item to="/prirocnik/raztezek">raztezek</Item>
        <Item to="/prirocnik/redundanca">redundanca</Item>

        <Item to="/prirocnik/segmentiranje">segmentiran</Item>
        <Item to="/prirocnik/sidrisce">sidrišče</Item>
        <Item to="/prirocnik/skupna-tocka">skupna točka</Item>
        <Item to="/prirocnik/slackline">slackline</Item>
        <Item to="/prirocnik/staticna-stran">statična stran</Item>

        <Item to="/prirocnik/sivana-zanka">šivana zanka</Item>
        <Item to="/prirocnik/skopec">škopec</Item>
        <Item to="/prirocnik/napenjalni-sistem">škripčevje</Item>
        <Item to="/prirocnik/skripec">škripec</Item>

        <Item to="/prirocnik/tovorna-zanka">tovorna zanka</Item>
        <Item to="/prirocnik/trak">trak</Item>
        <Item to="/prirocnik/trosmerna-obremenitev">trosmerna obremenitev</Item>

        <Item to="/prirocnik/varnostno-razmerje">varnostno razmerje</Item>
        <Item to="/prirocnik/verizna-odpoved">verižna odpoved</Item>
        <Item to="/prirocnik/vis">vis</Item>
        <Item to="/prirocnik/visokica">visokica</Item>
        <Item to="/prirocnik/vponka">vponka</Item>
        <Item to="/prirocnik/vrvni-skopec">vrvni škopec</Item>
        <Item to="/prirocnik/vstajanje">vstajanje</Item>
      </Nav>
    </div>
  )
}

export default Prirocnik
