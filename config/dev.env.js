'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"http://ai.caping.co.id/v2"'
  //http://192.168.1.186:3440/v2
  //http://ai.caping.co.id/v2
})
