// next.config.js
const getRoutes = require('./routes')

module.exports = {
  distDir: 'build',
  exportPathMap: getRoutes
}