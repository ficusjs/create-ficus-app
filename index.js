#!/usr/bin/env node
const args = process.argv.slice(2)
const { Plop, run } = require('plop')
const nodePlop = require('node-plop')
const logSymbols = require('log-symbols')
const { join } = require('path')
const argv = require('minimist')(args)

const plopfile = join(__dirname, 'plopfile.js')

if (args.length === 1) {
  const plop = nodePlop(plopfile)
  const basicApp = plop.getGenerator('basic-app')
  basicApp.runActions({ app_name: args[0] }).then(function (results) {
    console.log(logSymbols.success, 'Finished successfully!')
  })
} else {
  Plop.launch({
    cwd: argv.cwd,
    configPath: plopfile,
    require: argv.require,
    completion: argv.completion
  }, run)
}
