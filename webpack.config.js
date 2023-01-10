const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  entry: {
    mainCatalog: './src/catalog.js',
    mainDetailed: './src/detailed.js',
    },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 9000,
    },
   
};