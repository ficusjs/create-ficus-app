// Require generators
const basicAppGenerator = require('./generators/basic-app')
const eleventyAppGenerator = require('./generators/11ty-app')
const snowpackAppGenerator = require('./generators/snowpack-app')
const viteAppGenerator = require('./generators/vite-app')

module.exports = (plop) => {
  // Helper to get the cwd from where the tool was launched. Used within the generators
  plop.addHelper('cwd', (p) => process.cwd())

  // Load generators
  plop.setGenerator('basic-app', basicAppGenerator(plop))
  plop.setGenerator('11ty-app', eleventyAppGenerator(plop))
  plop.setGenerator('snowpack-app', snowpackAppGenerator(plop))
  plop.setGenerator('vite-app', viteAppGenerator(plop))
}
