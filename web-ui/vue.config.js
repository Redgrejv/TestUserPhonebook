module.exports = {
    configureWebpack: {
        devtool: 'source-map',
        devServer: {
            hot: true,
            port: process.env.WEB_PORT,
            host: process.env.WEB_HOST
          }
    }
}