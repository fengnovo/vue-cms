var CompressionWebpackPlugin = require('compression-webpack-plugin');


module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/', // 部署应用包时的基本 URL 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')。
  assetsDir: "static", // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 Default: ''
  outputDir: __dirname + '/../server/Admin/', // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(new CompressionWebpackPlugin({
        test: /\.js$|\.css$|\.html$|\.ttf$|\.eot$|\.woff$/,
        threshold: 4096, // 超过4KB就压缩
      }));
    }
  }
}