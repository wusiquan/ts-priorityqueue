const path = require('path')

// 其实已经可以用的，只是想自己去配置webpack...
module.exports = {
  // https://github.com/vuejs/vue-cli/issues/1091
  // https://cli.vuejs.org/guide/cli-service.html#vue-cli-service-serve
  chainWebpack: config => {
    const context = config.store.get('context')
    const resolve = _path => path.resolve(context, _path)
    
    config
      .entry('app')
      .clear()
      .add(resolve('./example/index.ts'))
  }
}

// configureWebpack: {
//   devtool: 'source-map'
// },
// chainWebpack: config => {
//   config.devServer
//     .host('0.0.0.0')
//     .port(8080)
//     .disableHostCheck(true)
// },
