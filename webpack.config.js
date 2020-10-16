const webpack = require('webpack');
module.exports = {
  entry: {
    main: './src/main.ts',
  },
  output: {
    filename: 'bundle.js',
  },
  devtool: "inline-source-map",
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, use: "ts-loader",exclude:/node_modules/ }
    ]
  },
  watch:true
};