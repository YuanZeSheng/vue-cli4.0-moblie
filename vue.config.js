
module.exports = {
    publicPath: './', // 署应用包时的基本 URL。 vue-router hash 模式使用
    outputDir: `dist-${process.env.NODE_ENV}`,
    assetsDir: 'static', //  outputDir的静态资源(js、css、img、fonts)目录
    lintOnSave: false,
    productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    devServer: {
        port: 8080, // 端口号
        open: false, // 启动后打开浏览器
        overlay: {
            //  当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
            warnings: false,
            errors: true
        },
        proxy: {
            '/api': {
              target: `${process.env.VUE_APP_URL}`,
            //   ws: true,
              changeOrigin: true,
              pathRewrite: {
                  '^/api': ''
              }
            },
          }
        // ...
    },
    
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.output.filename('js/[name].js').end();
            config.output.chunkFilename('js/[name].js').end();
            // 修改生产配置
            config.plugin('extract-css').tap(args => [{
                filename: `css/[name].css`,
                chunkFilename: `css/[name].css`
            }])
        }
    },
    
}