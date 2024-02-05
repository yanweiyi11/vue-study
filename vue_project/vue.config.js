const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 保存时是否进行语法检查，默认为true。
  lintOnSave: false,
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
    }
  }
})
