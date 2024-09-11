const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Entry point for the app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Process of JavaScript and JSX files
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,  // Process of CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,  // Process of images
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
      template: './public/index.html',  // Path to HTML template
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,  // Port number
    hot: true,   // Hot module replacement
  },
  mode: 'development',  // Mode to development
};
