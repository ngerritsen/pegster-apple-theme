module.exports = (ctx) => ({
  plugins: [
    require('postcss-import')(),
    require('postcss-cssnext')({ browsers: '> 1%, Last 2 versions, IE 11' })
  ]
});
