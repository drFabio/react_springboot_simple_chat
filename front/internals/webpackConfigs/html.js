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
        link: [
          'https://fonts.googleapis.com/css?family=Montserrat'
        ],
        scripts: [
          'https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.min.js',
          'https://fonts.googleapis.com/css?family=Julius+Sans+One'
        ]
      })
    ]
  }
}
export default html
export {html}
