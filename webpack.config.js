const webpack = require('webpack')
const path = require('path')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const srcDir = path.join(__dirname, 'src')
const distDir = path.join(__dirname, 'dist')
const publicDir = path.join(__dirname, 'public')
const env = process.env.NODE_ENV

const common = {
  entry: [`${srcDir}/index.js`],
  output: {
    path: distDir,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      config: path.join(__dirname, 'config'),
      utils: `${srcDir}/utils`,
      toolbox: `${srcDir}/components/toolbox`,
      messages: `${srcDir}/components/foundation/Intl/messages`,
      icons: `${publicDir}/icons`,
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules\/)/,
        loader: 'babel-loader',
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: `${publicDir}/index.html`,
      filename: 'index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env),
      },
    }),
  ],
}

if (env === 'development') {
  module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: { sourceMap: true },
            },
          ],
        },
      ],
    },
    plugins: [new ReactRefreshWebpackPlugin()],
    devServer: {
      historyApiFallback: true,
      hot: true,
    },
  })
}

if (env === 'test' || env === 'production') {
  module.exports = merge(common, {
    mode: 'production',
    output: {
      filename: '[name].[chunkhash].bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[name].[contenthash].css',
      }),
      new CopyPlugin({
        patterns: [
          { from: `${publicDir}/favicon.ico`, to: distDir },
          { from: `${publicDir}/robots.txt`, to: distDir },
          { from: `${publicDir}/_redirects`, to: distDir },
        ],
      }),
    ],
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
      splitChunks: { name: 'vendor', chunks: 'all' },
    },
  })
}
