// eslint-disable-next-line
const Webpack = require("webpack");
// eslint-disable-next-line
const WebpackDevServer = require("webpack-dev-server");
// eslint-disable-next-line
const webpackConfig = require("../webpack.dev");

const compiler = Webpack(webpackConfig);
const devServerOptions = { compress: true, port: 8888, open: false };
const server = new WebpackDevServer(devServerOptions, compiler);

export default server;
