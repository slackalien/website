import * as React from "react"
import { Link } from "gatsby"

import Nav from "react-bootstrap/Nav"

const items = [
  {
    url: "a-okvir",
    title: "A-okvir",
  },
  {
    url: "abrazija",
    title: "abrazija",
  },
  {
    url: "banana",
    title: "banana",
  },
  {
    url: "bicev-vozel",
    title: "bičev vozel",
  },
  {
    url: "deltasti-clen",
    title: "deltasti člen",
  },
  {
    url: "frostov-vozel",
    title: "Frostov vozel",
  },
  {
    url: "glavni-trak",
    title: "glavni trak",
  },
  {
    url: "jebeno-velik-vozel",
    title: "jebeno velik vozel",
  },
  {
    url: "kavbojski-vozel",
    title: "kavbojski vozel",
  },
  {
    url: "macek",
    title: "maček",
  },
  {
    url: "mehanska-prednost",
    title: "mehanska prednost",
  },
  {
    url: "minimalna-porusna-sila",
    title: "minimalna porušna sila",
  },
  {
    url: "mnozilnik",
    title: "množilnik",
  },
  {
    url: "napetost",
    title: "napetost",
  },
  {
    url: "napenjanje",
    title: "napenjanje",
  },
  {
    url: "napenjalni-sistem",
    title: "napenjalni sistem",
  },
  {
    url: "napenjalna-stran",
    title: "napenjalna stran",
  },
  {
    url: "najlonski-vozel",
    title: "najlonski vozel",
  },
  {
    url: "neskoncna-zanka",
    title: "neskončna zanka",
  },
  {
    url: "najvecja-delovna-obremenitev",
    title: "največja delovna obremenitev",
  },
  {
    url: "osmica",
    title: "osmica",
  },
  {
    url: "ovalni-clen",
    title: "ovalni člen",
  },
  {
    url: "pilotna-vrv",
    title: "pilotna vrv",
  },
  {
    url: "podloga",
    title: "podloga",
  },
  {
    url: "podlozka",
    title: "podložka",
  },
  {
    url: "pomozni-trak",
    title: "pomožni trak",
  },
  {
    url: "popuscalka",
    title: "popuščalka",
  },
  {
    url: "postavljanje",
    title: "postavljanje",
  },
  {
    url: "primez",
    title: "primež",
  },
  {
    url: "raztezek",
    title: "raztezek",
  },
  {
    url: "redundanca",
    title: "redundanca",
  },
  {
    url: "segmentiranje",
    title: "segmentiran",
  },
  {
    url: "sidrisce",
    title: "sidrišče",
  },
  {
    url: "skupna-tocka",
    title: "skupna točka",
  },
  {
    url: "slackline",
    title: "slackline",
  },
  {
    url: "staticna-stran",
    title: "statična stran",
  },
  {
    url: "sivana-zanka",
    title: "šivana zanka",
  },
  {
    url: "skopec",
    title: "škopec",
  },
  {
    url: "skripec",
    title: "škripec",
  },
  {
    url: "tovorna-zanka",
    title: "tovorna zanka",
  },
  {
    url: "trak",
    title: "trak",
  },
  {
    url: "trosmerna-obremenitev",
    title: "trosmerna obremenitev",
  },
  {
    url: "varnostno-razmerje",
    title: "varnostno razmerje",
  },
  {
    url: "verizna-odpoved",
    title: "verižna odpoved",
  },
  {
    url: "vis",
    title: "vis",
  },
  {
    url: "visokica",
    title: "visokica",
  },
  {
    url: "vponka",
    title: "vponka",
  },
  {
    url: "vrvni-skopec",
    title: "vrvni škopecurl",
  },
  {
    url: "vstajanje",
    title: "Vstajanje",
  },
]

type Props = {
  location: any
}

const Prirocnik = (props: Props) => {
  const { location } = props
  console.log(location)

  return (
    <div className="py-5 pt-0 pt-md-5">
      <h2>Priročnik</h2>
      <Nav variant="pills">
        {items.map(item => (
          <Nav.Link
            as={Link}
            key={item.url}
            to={`/prirocnik/${item.url}`}
            active={location.pathname === `/prirocnik/${item.url}`}
          >
            {item.title}
          </Nav.Link>
        ))}
      </Nav>
    </div>
  )
}

export default Prirocnik
