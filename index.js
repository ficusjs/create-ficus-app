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
  const basicApp = plop.getGenerator('11ty-app')
  basicApp.runActions({ app_name: args[0] }).then(function (results) {
    console.log(logSymbols.success, 'App successfully created!')
    console.log(logSymbols.info, 'You can now run "npm i" or "yarn" to install NPM packages')
  })
} else {
  Plop.launch({
    cwd: argv.cwd,
    configPath: plopfile,
    require: argv.require,
    completion: argv.completion
  }, run)
}
