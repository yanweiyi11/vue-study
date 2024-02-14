const {defineConfig} = require('@vue/cli-service');

module.exports = defineConfig({
    transpileDependencies: true,
    // 设置保存时不进行eslint语法检查
    lintOnSave: false,
    pages: {
        index: {
            // 指定页面入口文件路径
            entry: 'src/main.js',
        }
    },

    // 配置开发服务器
    devServer: {
        // 代理设置
        proxy: {
            // 代理/api请求到本地服务器
            '/api': {
                target: 'http://localhost:8000', // 目标服务器地址
                pathRewrite: {'^/api': ''}, // 路径重写，移除请求前缀
                ws: true, // 启用WebSocket，用于支持实时通讯
                changeOrigin: true // 修改请求源，防止跨域问题
            },
            // 代理/abc请求到另一服务器
            '/abc': {
                target: 'http://localhost:8001', // 目标服务器地址
                pathRewrite: {'^/abc': ''}, // 路径重写，移除请求前缀
            }
        }
    }
});