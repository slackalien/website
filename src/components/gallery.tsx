import * as React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import Masonry from "react-masonry-css"

type Props = {
  files: ReadonlyArray<{
    readonly id: string
    readonly childImageSharp: {
      readonly gatsbyImageData: IGatsbyImageData
    } | null
  }>
  breakpointCols?: number
}

const Gallery = ({ files, breakpointCols = 4 }: Props) => (
  <Masonry
    breakpointCols={breakpointCols}
    className="masonry mt-5"
    columnClassName="masonry-column"
  >
    {files.map(img => {
      const image = img.childImageSharp?.gatsbyImageData
      return image ? <GatsbyImage key={img.id} image={image} alt="" /> : null
    })}
  </Masonry>
)

export default Gallery
