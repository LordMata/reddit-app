const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Entry point for your app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Process JavaScript and JSX files
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,  // Process CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,  // Process images
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',  // Output file names with hash for cache-busting
              outputPath: 'assets/images/'  // Output directory for the files
            }
          }
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Enable import without specifying file extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',  // Path to your HTML template
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,  // Port number for the dev server
    hot: true,   // Enable hot module replacement
  },
  mode: 'development',  // Set Webpack mode to development
};
