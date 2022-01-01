module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://localhost:8001/wp/wp-json/wp/v2/',
          pathRewrite: { '^/api/': '/' },
          logLevel: 'debug'
        }
      }
    }
  }
};