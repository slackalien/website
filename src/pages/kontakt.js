import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <Seo title="Kontakt" />
    <div className="container py-5">
      <div className="container">
        <h1>Kontakt</h1>
        <p>
          SlackAlien je ekipa slackline intuziastov, ki lahko poveže poljubni
          dve točki s trakom ter razdaljo varno prehodi.
        </p>
        <p>
          Čeprav smo vajeni idiličnih kotičkov narave, lahko napeljemo highline
          tudi v mestu, v jami, nad vašim festivalom ali iz vaše stavbe na
          avtodvigalo.
        </p>
        <p>
          Čeprav je že sama hoja dih jemajoč podvig, lahko za resnično vrtoglavi
          spektakel začinimo naš nastop z divjimi dinamičnimi triki.
        </p>
        <p>
          Varnost je naša prva prioriteta. Na trak vedno stopamo navezani.
          Oprema je profesionalna in namenjena zgolj vesoljcem.
        </p>
        <p>Email:</p>
        <ul>
          <li>
            <a href="mailto:slackalien.info@gmail.com">
              slackalien.info@gmail.com
            </a>
          </li>
        </ul>
        <p>Telefon:</p>
        <ul>
          <li>
            <a href="tel:+38640852841">+386 40 852 841</a> Tim
          </li>
          <li>
            <a href="tel:+38641796396">+386 41 796 396</a> Gašper
          </li>
        </ul>
        <p>Socialna omrežja:</p>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/slackalien/"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/SlackAlien"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default ContactPage
