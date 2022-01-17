module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import '@/assets/scss/_variables.scss';
        `
      }
    }
  },
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