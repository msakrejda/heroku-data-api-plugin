'use strict'

exports.topic = {
  name: 'data-api',
  description: 'call the undocumented, unstable, internal Heroku data APIs directly'
}

exports.commands = [
  require('./commands/data_api')
]
