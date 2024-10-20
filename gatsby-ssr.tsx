/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */
import React from 'react';
import type { GatsbySSR } from "gatsby"


const plausibleUrl = 'https://analytics.climb.si'
const domain = 'slackalien.com';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHeadComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === 'production') {
    const scriptProps = {
      
      //'data-track-acquisition': true,
    };

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
      //See: https://docs.plausible.io/goals-and-conversions#trigger-custom-events-with-javascript
      /*
      <script
        key="plausible-custom-events"
        dangerouslySetInnerHTML={{
          __html: `
          window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) };
          ${
            excludePaths.length
              ? `window.plausibleExcludePaths=[${excludePaths.join(`,`)}];`
              : ``
          }
          `,
        }}
      />,
      */
    ]);
  }
  return null;
};