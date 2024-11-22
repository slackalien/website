/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * @see https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 * @see https://docs.plausible.io/goals-and-conversions#trigger-custom-events-with-javascript
 */
import React from 'react';
import type { GatsbySSR } from "gatsby"


const plausibleUrl = 'https://analytics.climb.si'
const domain = 'slackalien.com';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHeadComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === 'production') {
    return setHeadComponents([
      <link
        key="plausible-preconnect"
        rel="preconnect"
        href={plausibleUrl}
      />,
      <script
        key="plausible-script" 
        src={`${plausibleUrl}/js/script.js`}
        data-domain={domain}
        async={true}
        defer={true}
      />,
    ]);
  }
  return null;
};