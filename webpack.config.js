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
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
  },
};
