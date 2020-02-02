const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');

// const devMode = process.env.NODE_ENV !== 'production';

// ====== COMMON CONFIG ======
const common = dev => ({
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: dev ? 'bundle.js' : '[name].[hash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/img',
              name: dev ? '[name].[ext]' : '[name].[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.woff$|\.woff2?$|\.ttf$|\.eot$|\.otf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/fonts',
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
  ],
});

// ====== DEVELOPMENT CONFIG ======
const development = {
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    hot: true,
    open: true,
  },
};

// ====== PRODUCTION CONFIG ======
const production = {
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          // Added for profiling in devtools
          keep_classnames: true,
          keep_fnames: true,
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        sourceMap: true,
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
  ],
};

const watch = {
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devtool: 'source-map',
  plugins: [new MiniCssExtractPlugin()],
};

module.exports = (env, { mode = 'none' }) => {
  const dev = true;
  if (mode === 'development') {
    return merge(common(dev), development, { mode });
  } else if (mode === 'production') {
    return merge(common(!dev), production, { mode });
  } else return merge(common(dev), watch, { mode });
};
