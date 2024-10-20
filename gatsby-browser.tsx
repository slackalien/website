/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

//import "bootstrap/dist/js/bootstrap.min.js"
//import "@popperjs/core/dist/umd/popper.min.js"
//import "./src/components/layout.scss"

import type { GatsbyBrowser } from "gatsby"

declare global {
  interface Window {
    plausible: any;
  }
}

export const onRouteUpdate: GatsbyBrowser['onRouteUpdate'] = function ({ location }) {
  if (
    process.env.NODE_ENV === `production` &&
    typeof window.plausible === `object`
  ) {
    /*
    const excludePaths = ['/krnekixyz']
    const pathIsExcluded =
      location && excludePaths.some((rx) => rx.test(location.pathname));

    if (pathIsExcluded) return null;
    */
    window.plausible('pageview');
  }
};