const request = require('request')
const config = require('./config')


request({
  url: config.configAddress.url,
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2))
})