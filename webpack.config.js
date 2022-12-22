const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')


module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
    },

  resolve: {
    extensions: ['.js', '.png']
  },


  plugins: [
    new HTMLWebpackPlugin({
      filename: './index.html',
      template: './index.html'
    }),
    new HTMLWebpackPlugin({
      filename: './drug.html',
      template: './drug.html'
    }),
    new HTMLWebpackPlugin({
      filename: './list.html',
      template: './list.html'
    }),
    new HTMLWebpackPlugin({
      filename: './contacts.html',
      template: './contacts.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/assets'),
          to: path.resolve(__dirname, 'dist/assets'),
        },

      ],
    }),
    new FaviconsWebpackPlugin(path.resolve(__dirname, 'src/assets/favicon/favicon.ico'))
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          'file-loader'
        ],
        include: path.join(__dirname, 'assets')
      }
    ]
  }
}