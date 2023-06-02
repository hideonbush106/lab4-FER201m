module.exports = {
  // Other webpack configuration options...
  module: {
    rules: [
      // Other rules...
      {
        test: /\.md$/i,
        use: 'raw-loader',
      },
    ],
  },
};
