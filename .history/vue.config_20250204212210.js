const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "./",
  transpileDependencies: true,
  devServer: {
    historyApiFallback: true, // 启用 history 模式支持
  },
});
