function changeLoader(rules) {
  return rules.map(rule => {
    if (
      rule.test &&
      rule.test.toString().includes('ico|svg|jpg|jpeg|png|gif|webp')
    ) {
      return {
        test: /\.(ico|svg|jpg|jpeg|png|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    }

    return rule
  })
}

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const config = getConfig()
  config.module.rules = changeLoader(config.module.rules)
  actions.replaceWebpackConfig(config)
}
