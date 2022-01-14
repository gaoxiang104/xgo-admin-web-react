const {
  override,
  disableEsLint,
  addWebpackModuleRule,
  addLessLoader,
  overrideDevServer,
  watchAll
} = require("customize-cra");

module.exports = {
  webpack: override(
    // usual webpack plugin
    disableEsLint(),
    // Adds the provided rule to the webpack config's module.rules array.
    addWebpackModuleRule(
      { // img-loader
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?limit=10000',
          'img-loader'
        ]
      }
    ),
    addWebpackModuleRule(
      { // sass-loader
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }
    ),
    // 使用less-loader对源码重的less的变量进行重新制定，设置antd自定义主题  
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: { "@primary-color": "#1DA57A" },
    }),
  ),
  devServer: overrideDevServer(
    // dev server plugin
    watchAll()
  )
};