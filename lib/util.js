'use strict'

const DEFAULT_HOST = 'postgres-api.heroku.com'

function host () {
  if (process.env.HEROKU_DATA_HOST) {
    return process.env.HEROKU_DATA_HOST
  } else {
    return DEFAULT_HOST
  }
}

module.exports = {
  host: host
}
