/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const isGeneratorTag = (type, name) => type === 'meta' && name === 'generator'

/**
 *
 * @param apiContext Context provided by Gatsby
 * @param pluginOpts User supplied plugin options
 * @see https://www.gatsbyjs.org/docs/ssr-apis/#onPreRenderHTML
 */
exports.onPreRenderHTML = (
  { getHeadComponents, replaceHeadComponents },
  { removeVersionOnly = false, content } = {},
) => {
  const keepTag = removeVersionOnly || content != undefined
  const headComponents = getHeadComponents()
    .map(c =>
      isGeneratorTag(c.type, c.props ? c.props.name : '')
        ? Object.assign({}, c, {
          props: Object.assign({}, c.props, { content: content || 'Gatsby' }),
        })
        : c,
    )
    .filter(({ type, props: { name, content } = {} }) =>
      keepTag ? true : !isGeneratorTag(type, name),
    )

  replaceHeadComponents(headComponents)
}
