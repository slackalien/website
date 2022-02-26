import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Masonry from "react-masonry-css"

import Layout from "../components/layout"
import Seo from "../components/seo"

/*
const members = [
  {
    image: "ivana.jpg",
    title: "Ivana",
  },
  {
    age: "lara-na-liniji.jpg",
    title: "Lara",
  },
  {
    image: "timi-na-liniji.jpg",
    title: "Tim",
  },
  {
    image: "nace-na-liniji.jpg",
    title: "Nace",
  },
  {
    image: "gasper-mize.jpg",
    title: "Gašper",
  },
  {
    image: "matevz-na-liniji.jpg",
    title: "Matevž",
  },
  {
    image: "jaka-na-liniji.jpg",
    title: "Jaka",
  },
  {
    image: "andrej-na-liniji.jpg",
    title: "Andrej",
  },
  {
    image: "bojc-na-glavo.jpg",
    title: "Bojč",
  },
  {
    image: "matic-na-liniji.jpg",
    title: "Matic",
  },
  {
    image: "anze-plank.jpg",
    title: "Anže",
  },
  {
    image: "slackalien-misice.jpg",
    title: "SlackAlien mišice",
  },
]
*/

const EkipaPage = () => (
  <Layout>
    <Seo title="SlackAlien ekipa" />
    <div className="container py-5">
      <h1>SlackAlien ekipa</h1>
      <p>
        Nihče ne ve zares, koliko članov šteje SlackAlien. Enkrat deset, drugič
        osem, spet tretjič 22.
      </p>
      <Masonry
        breakpointCols={3}
        className="masonry"
        columnClassName="masonry-column"
      >
        <StaticImage src="../images/ekipa/ivana.jpg" width={400} alt="Ivana" />
        <StaticImage
          src="../images/ekipa/lara-na-liniji.jpg"
          width={400}
          alt="Lara"
        />
        <StaticImage
          src="../images/ekipa/timi-na-liniji.jpg"
          width={400}
          alt="Tim"
        />
        <StaticImage
          src="../images/ekipa/nace-na-liniji.jpg"
          width={400}
          alt="Nace"
        />
        <StaticImage
          src="../images/ekipa/gasper-mize.jpg"
          width={400}
          alt="Gašper"
        />
        <StaticImage
          src="../images/ekipa/matevz-na-liniji.jpg"
          width={400}
          alt="Matevž"
        />
        <StaticImage
          src="../images/ekipa/jaka-na-liniji.jpg"
          width={400}
          alt="Jaka"
        />
        <StaticImage
          src="../images/ekipa/andrej-na-liniji.jpg"
          width={400}
          alt="Andrej"
        />
        <StaticImage
          src="../images/ekipa/bojc-na-glavo.jpg"
          width={400}
          alt="Bojč"
        />
        <StaticImage
          src="../images/ekipa/tilen-na-liniji.jpg"
          width={400}
          alt="Tilen"
        />
        <StaticImage
          src="../images/ekipa/maticek-na-liniji.jpg"
          width={400}
          alt="Matiček"
        />
        <StaticImage
          src="../images/ekipa/matic-na-liniji.jpg"
          width={400}
          alt="Matic"
        />
        <StaticImage
          src="../images/ekipa/anze-plank.jpg"
          width={400}
          alt="Anže"
        />
        <StaticImage
          src="../images/ekipa/slackalien-misice.jpg"
          width={400}
          alt="SlackAlien mišice"
        />
      </Masonry>
    </div>
  </Layout>
)

export default EkipaPage
