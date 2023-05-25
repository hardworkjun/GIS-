const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy:{
      '/api':{
        target:'http://192.168.137.19',
        pathRewrite:{'^/api':''},
        ws:true,            // 用于支持websocket
        changeOrigin:true,  //用于控制请求头中的host值
      }
    }
  }
})
