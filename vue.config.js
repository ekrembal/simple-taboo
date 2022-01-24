module.exports = {
    filenameHashing: false,
    chainWebpack: config => config.optimization.minimize(false),
    publicPath: './'
  }