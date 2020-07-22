/**
 * @see: https://www.gatsbyjs.org/docs/node-apis/
 */

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      plugins: [
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          // devMode: false,
          openAnalyzer: false,
          generateStatsFile: true,
        })
      ],
    })
  }
}
