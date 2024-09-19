const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js', // Main entry point for your package
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'proofify',
    libraryTarget: 'umd', // Universal module definition for compatibility
  },
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      // Add other fallbacks if necessary
    },
  },
};
