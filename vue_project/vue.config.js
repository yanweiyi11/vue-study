const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // 保存时是否进行语法检查，默认为true。
    lintOnSave: false,
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
        }
    },

    /* devServer: {
        // 注意：这个地址就写到端口号位置即可，后面具体的路径不用写。
        proxy: 'http://localhost:8000'
    } */

    devServer: {
        proxy: {
            // 所有以 /api 开始的请求将被代理到指定地址
            '/api': {
                target: 'http://localhost:8000',
                pathRewrite: {'^/api': ''}, // 重写路径，去掉 /api 前缀
                // 了解：
                ws: true, // 启用 WebSocket 支持，默认为 true
                changeOrigin: true // 修改请求头中的 Origin 属性，使目标服务器认为请求来自本地
            },
            // 所有以 /abc 开始的请求将被代理到另一个地址
            '/abc': {
                target: 'http://localhost:8001',
                pathRewrite: {'^/abc': ''}, // 重写路径，去掉 /abc 前缀
            }
        }
    }
})
