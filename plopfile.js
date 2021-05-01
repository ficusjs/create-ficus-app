// Require generators
const basicAppGenerator = require('./generators/basic-app')
const eleventyAppGenerator = require('./generators/11ty-app')

module.exports = (plop) => {
  // Helper to get the cwd from where the tool was launched. Used within the generators
  plop.addHelper('cwd', (p) => process.cwd())

  // Load generators
  plop.setGenerator('basic-app', basicAppGenerator(plop))
  plop.setGenerator('11ty-app', eleventyAppGenerator(plop))
}
