const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/pages',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
            plugins: [['import', { libraryName: 'antd', style: true }]],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                // modifyVars: {
                //   'primary-color': '#f50057',
                //   'link-color': '#f50057',
                // },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass'),
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, //文件大于8K的时候，单独将图片打包成文件。
              name: 'resource/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.jsx', '.ts', '.js'],
    mainFiles: ['index.js', 'index.jsx', 'index.tsx'],
    alias: {
      ['@']: path.resolve(__dirname, 'src'),
      ['assets']: path.resolve(__dirname, 'src/assets'),
      ['components']: path.resolve(__dirname, 'src/components'),
      ['utils']: path.resolve(__dirname, 'src/utils/index.js'),
    },
  },
  devServer: {
    historyApiFallback: true,
  },
}
