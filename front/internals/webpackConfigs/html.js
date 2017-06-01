import HtmlWebpackTemplate from 'html-webpack-template'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const html = (options) => {
  const {title, appMountId = 'app'} = options
  let devServer = null
  if (options.isDevelopment) {
    devServer = options.port
  }
  return {
    plugins: [
      new HtmlWebpackPlugin({
        title,
        template: HtmlWebpackTemplate,
        appMountId,
        inject: false,
        devServer,
        publicPath: '/',
        links: [
          'https://fonts.googleapis.com/css?family=Lato:400,700&amp;subset=latin-ext'
        ]
      })
    ]
  }
}
export default html
export {html}
