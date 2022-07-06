import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbySeo, AllSeoProps } from "gatsby-plugin-next-seo"

type Props = AllSeoProps & {
  pathname?: string
  image?: {
    src: string
    height: number
    width: number
  }
}

type Data = {
  site: {
    siteMetadata: {
      title: string
      siteUrl: string
      description: string
      author: string
    }
  }
}

const Seo = ({
  title,
  description,
  image,
  pathname = "/",
  ...props
}: Props) => {
  const data = useStaticQuery<Data>(graphql`
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
  `)

  const siteUrl = data.site.siteMetadata.siteUrl

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
}

export default Seo
