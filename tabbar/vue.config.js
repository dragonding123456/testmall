const { defineConfig } = require('@vue/cli-service')
const { resolve } = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  // configureWebpack: {
  //   resolve: {
  //       alias: {
  //           //配置别名
  //           '@': resolve('src'),
  //           'assets': '@/assets',
  //           'common': '@/common',
  //           'components': '@/components',
  //           'network': '@/network',
  //           'views': '@/views',
  //           'pluginunit':'@/pluginunit'
  //       }
  //   }
  // },
})
