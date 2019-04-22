const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const outputPath = 'dist';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    app: './src/js/index.tsx',
  },
  output: {
    filename: 'js/[name].[chunkhash].js',
    path: path.resolve(outputPath),
    publicPath: '/',
    sourceMapFilename: 'js/[name].[chunkhash].map.js',
    chunkFilename: 'js/[name].[chunkhash].js'
  },
  optimization: {
    splitChunks: {
			cacheGroups: {
				vendor: {
					test: /react|react-dom|redux|react-redux|moment|material-ui/,
					chunks: "initial",
					name: "vendor",
					priority: 10,
					enforce: true
				}
			}
		}
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new WebpackNotifierPlugin({
      title: 'React builded',
      alwaysNotify: true
    }),
    new WebpackMd5Hash(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].[chunkhash].css",
      chunkFilename: "css/[id].[chunkhash].css"
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: '/',
        postcss: [
          autoprefixer({
            browsers: [
              'last 3 versions',
              'ie >= 9',
            ],
          }),
        ],
      },
    }),
    new HtmlWebpackPlugin({
      template: './static/index.ejs',
      filename: '200.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    //new BundleAnalyzerPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [
			'src/js',
			'node_modules'
		],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
       // exclude: /node_modules/,
        use: [
          {
            loader: 'tslint-loader',
            options: {
              configFile: 'tslint.json',
              tsConfigFile: 'tsconfig.json',
              sourceMap: true,
            },
          },
          {
            loader: 'ts-loader',
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?sourceMap',
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /\.(woff2?|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: 'file-loader?name=img/[name].[ext]'
      },
    ]
  },
}
