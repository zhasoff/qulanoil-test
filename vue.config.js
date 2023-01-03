const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/",
  lintOnSave: false,
  css: {
      loaderOptions: {
          scss: {
              additionalData: `@import '@/assets/styles/main.css';`,
          },
      },
  },
  pwa: {
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-transculent',
    themeColor: '#F5F6F6'
}

})

