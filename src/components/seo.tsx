import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbySeo, AllSeoProps } from "gatsby-plugin-next-seo"

const query = graphql`
  query SeoQuery {
    site {
      siteMetadata {
        title
        siteUrl
        description
        author
      }
    }
  }
`

type Props = AllSeoProps & {
  pathname?: string
  image?: {
    src: string
    height: number
    width: number
  }
}

const Seo = ({
  title,
  description,
  image,
  pathname = "/",
  ...props
}: Props) => {
  return (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: { siteUrl },
        },
      }) => {
        return (
          <GatsbySeo
            title={title}
            description={description}
            metaTags={[{ name: "url", content: `${siteUrl}${pathname}` }]}
            openGraph={{
              title: `${title} | SlackAlien`,
              url: `${siteUrl}${pathname}`,
              images: image
                ? [
                    {
                      url: `${siteUrl}${image.src}`,
                      width: image.width,
                      height: image.height,
                      alt: title,
                    },
                  ]
                : [],
            }}
            {...props}
          />
        )
      }}
    />
  )
}

export default Seo
