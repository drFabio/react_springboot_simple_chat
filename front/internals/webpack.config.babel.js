import htmlPartial from './webpackConfigs/html'
import jsPartial from './webpackConfigs/js'
import devServerPartial from './webpackConfigs/devServer'
import merge from 'webpack-merge'
import path from 'path'

const PATHS = {
  app: path.join(__dirname, '../src'),
  build: path.join(__dirname, '../build')
}
const common = {
  entry: {
    app: ['babel-polyfill', path.resolve(PATHS.app, '../src/index.jsx')]
  },
  output: {
    path: PATHS.build,
    filename: 'app.js',
    publicPath: '/'
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx', '.json']
  }
}
const htmlOptions = {title: 'chat example'}
let envConfig = {}
switch (process.env.npm_lifecycle_event) {
  case 'start':
    const port = process.env.PORT || '8080'
    const host = process.env.HOST || '0.0.0.0'
    htmlOptions.devServer = process.env.PORT
    htmlOptions.isDevelopment = true
    envConfig = merge(
      devServerPartial({
        host,
        port
      }),
      { devtool: 'eval-cheap-module-source-map' }
    )
    break
}
let config = merge(
  htmlPartial(htmlOptions),
  jsPartial(PATHS.app),
  envConfig,
  common
)
export default config
