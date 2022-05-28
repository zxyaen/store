const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false ,//关闭eslint检查
  configureWebpack: {
    resolve:{
      extensions:[],
      //配置别名
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
  },
  devServer: {
    proxy: 'http://localhost:8080'
  }
})
