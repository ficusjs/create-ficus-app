import basicAppGenerator from './generators/basic-app/index.mjs'
import eleventyAppGenerator from './generators/11ty-app/index.mjs'
import snowpackAppGenerator from './generators/snowpack-app/index.mjs'
import viteAppGenerator from './generators/vite-app/index.mjs'

export default function (plop) {
  plop.setHelper('cwd', () => process.cwd())
  plop.setGenerator('basic-app', basicAppGenerator(plop))
  plop.setGenerator('11ty-app', eleventyAppGenerator(plop))
  plop.setGenerator('snowpack-app', snowpackAppGenerator(plop))
  plop.setGenerator('vite-app', viteAppGenerator(plop))
}
