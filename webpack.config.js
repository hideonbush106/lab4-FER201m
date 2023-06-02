module.exports = {
  // Other webpack configuration options...
  module: {
    rules: [
      // Other rules...
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
    ],
  },
};
