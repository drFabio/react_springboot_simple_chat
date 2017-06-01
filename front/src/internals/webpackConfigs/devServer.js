import webpack from 'webpack'
const devServer = (options) => {
  return {
    devServer: {
      hot: true,
      inline: true,
      stats: 'errors-only',
      host: options.host,
      port: options.port,
      historyApiFallback: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({
        multiStep: true
      }),
      new webpack.NoEmitOnErrorsPlugin()
    ]
  }
}
export default devServer
export {devServer}
