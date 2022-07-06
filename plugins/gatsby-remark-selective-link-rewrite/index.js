const visit = require("unist-util-visit")

/**
 * @typedef PluginOptions
 * @property {string} sourceInstanceName
 * @property {RegExp} pattern
 * @property {string} replace
 */

/**
 * @param {*} props
 * @param {PluginOptions} pluginOptions
 */
module.exports = ({ markdownAST, markdownNode, getNode }, pluginOptions) => {
  const defaults = { sourceInstanceName: "", pattern: /^(.*)$/, replace: "$1" }
  const { sourceInstanceName, pattern, replace } = Object.assign(
    defaults,
    pluginOptions
  )
  const parent = getNode(markdownNode.parent)

  if (parent.sourceInstanceName == sourceInstanceName) {
    visit(markdownAST, "link", node => {
      node.url = node.url.replace(pattern, replace)
    })
  }
  return markdownAST
}
