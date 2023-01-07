import basicAppGenerator from './generators/basic-app/index.mjs'
import eleventyAppGenerator from './generators/11ty-app/index.mjs'
import parcelAppGenerator from './generators/parcel-app/index.mjs'
import parcelTypescriptAppGenerator from './generators/parcel-typescript-app/index.mjs'
import snowpackAppGenerator from './generators/snowpack-app/index.mjs'
import viteAppGenerator from './generators/vite-app/index.mjs'
import viteTypescriptAppGenerator from './generators/vite-typescript-app/index.mjs'
import rocketAppGenerator from './generators/rocket-app/index.mjs'

export default function (plop) {
  plop.setHelper('cwd', () => process.cwd())
  plop.setGenerator('basic-app', basicAppGenerator(plop))
  plop.setGenerator('11ty-app', eleventyAppGenerator(plop))
  plop.setGenerator('parcel-app', parcelAppGenerator(plop))
  plop.setGenerator('parcel-typescript-app', parcelTypescriptAppGenerator(plop))
  plop.setGenerator('snowpack-app', snowpackAppGenerator(plop))
  plop.setGenerator('vite-app', viteAppGenerator(plop))
  plop.setGenerator('vite-typescript-app', viteTypescriptAppGenerator(plop))
  plop.setGenerator('rocket-app', rocketAppGenerator(plop))
}
