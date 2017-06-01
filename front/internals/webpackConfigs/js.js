export const js = (paths) => {
  const cacheDir = (process.env.CACHE_DIRECTORY ? process.env.CACHE_DIRECTORY : 'true')
  return {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
             loader: `babel-loader?cacheDirectory=${cacheDir}`
          ],
          include: paths
        }
      ]
    }
  }
}
export default js
