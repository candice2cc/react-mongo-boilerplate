/**
 * client端开发环境webpack配置
 * @author Candice
 * @date 2018/6/6 20:39
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, '..'),
  entry: {
    app: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
      './client'
    ],
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'js/[name].js',
    chunkFilename: 'js/chunk.[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            forceEnv: 'client'
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: [/iconfonts/, /global/],
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.scss$/,
        include: [/iconfonts/, /global/], // 对于字体库和特殊样式，略过css-modules(规避bug)
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)[?\w#]*$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(mp4|mov|webm|ogg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'video/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src', 'img:src', 'video:poster', 'source:src', 'object:data']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.scss']
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: './index.html', // 相对于output path，如果output path为/public/会冲突，因此output path使用/
      template: './client/index.html',
      inject: true,
      favicon: './client/favicon.ico',
      hash: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
};
