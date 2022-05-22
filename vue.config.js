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
  // devServer: {
  //   proxy: {
  //       '/examWeb_war_exploded': {
  //           target: "http://172.16.3.161:8080/", // 访问的后台地址
  //           changeOrigin: true,
  //           // pathRewrite: { // 重写地址 你的接口地址是'http://10.10.1.10/login' 你请求得时候地址只需要写'/api/login'
  //           //     '/': ''
  //           // }
  //       }
  //   }
  // }
})
