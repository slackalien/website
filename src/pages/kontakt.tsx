import * as React from "react"
import type { PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import FacebookIcon from "../icons/facebook"
import InstagramIcon from "../icons/instagram"

const ContactPage = ({ location }: PageProps) => (
  <Layout>
    <Seo title="Kontakt" pathname={location.pathname} />
    <div className="container py-5">
      <h1>Kontakt</h1>
      <p>
        Športno Društvo SlackAlien je ekipa slackline intuziastov, ki lahko poveže poljubni dve
        točki s trakom ter razdaljo varno prehodi.
      </p>
      <p>
        Najbolj smo vajeni idiličnih kotičkov narave, lahko pa napeljemo
        highline tudi v mestu, v jami, nad vašim festivalom ali iz vaše stavbe
        na avtodvigalo.
      </p>
      <p>
        Čeprav je že sama hoja dih jemajoč podvig, lahko za resnično vrtoglavi
        spektakel začinimo naš nastop z divjimi dinamičnimi triki.
      </p>
      <p>
        Varnost je naša prva prioriteta. Na trak vedno stopamo navezani. Oprema
        je profesionalna, zato je skrb odveč.
      </p>
      <p>Email</p>
      <ul className="list-unstyled">
        <li>
          <a href="mailto:slackalien.info@gmail.com">
            slackalien.info@gmail.com
          </a>
        </li>
      </ul>
      <p>Telefon</p>
      <ul className="list-unstyled">
        <li>
          <a href="tel:+38640852841">+386 40 852 841</a> Tim
        </li>
        <li>
          <a href="tel:+38641796396">+386 41 796 396</a> Gašper
        </li>
      </ul>
      <p>Socialna omrežja</p>
      <ul className="list-unstyled">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/slackalien/"
          >
            <InstagramIcon />
          </a>{" "}
          &nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/SlackAlien"
          >
            <FacebookIcon />
          </a>
        </li>
      </ul>
    </div>
  </Layout>
)

export default ContactPage
