const { defineConfig } = require('@vue/cli-service')
const {join} = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  configureWebpack:{
    devServer:{
      open: true,
      port: 8888,
      host: 'localhost'
    },
    // 路径别名
    resolve:{
      alias:{
        aaa:join(__dirname,"src/components")
      }
    }
  }
})
