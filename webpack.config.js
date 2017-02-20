module.exports = {
  entry: './client/js/components/index.js',
  output: {
    path: __dirname + '/client/bundle',
    filename: 'bundle.js' ,
    publicPath: '/bundle/'
  },
  module: {
    loaders: [
      { 
        test: /\.css$/, 
        loader: 'style!css!'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react']
        }
      },
      {
        test: /\.(eot|svg|otf|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
} 