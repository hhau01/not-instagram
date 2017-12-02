module.exports = {
  entry: './client/src/index.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: './build/bundle.js',
  },
  module: {
    loaders: [
      {
        test: /jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /scss$/,
        exclude: /node_modules/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        loader: 'file-loader?name=/assets/imgs/[name].[ext]',
      },
    ],
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
  },
};
