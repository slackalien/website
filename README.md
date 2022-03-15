# SlackAlien website

## Install

```sh
mkdir slackalien
cd slackalien
git clone git@github.com:slackalien/website.git
cd website
npm install
```

## Development

```sh
cd website
npm run develop
```

## Build for production

```sh
cd website
npm run build
npm run serve
```

## Illustration attributions

https://www.vecteezy.com/vector-art/158638-tightrope-on-the-mountain-vector

## SEO with react-helmet and gatsby-plugin-next-seo

https://www.gatsbyjs.com/plugins/gatsby-plugin-next-seo/

## Frontmatter in markdown

https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/#frontmatter-for-metadata-in-markdown-files

## GitHub profile

Mail: slackalien.info@gmail.com  
User: SlackAlien8  
Pass: xxxxxxxxx

## Facebook source

https://www.gatsbyjs.com/plugins/gatsby-source-facebook/

## Instagram source

https://www.gatsbyjs.com/plugins/gatsby-source-instagram/

```graphql
query MyQuery {
  allInstaNode(sort: { fields: timestamp, order: DESC }) {
    edges {
      node {
        id
        username
        type
        timestamp
        mediaType
        caption
      }
    }
  }
}
```
