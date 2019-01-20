/* const yargs = require('yargs')
const geocode = require('./geocode/geocode')
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage)
  } else {
    console.log(JSON.stringify(results, undefined, 2))
  }
}) */
const request = require('request')

request({
  url: ' https://api.darksky.net/forecast/2b77614432ca4f8a9d9cacb7d0389228/40.7134104,-74.0069091',
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature)
  } else {
    console.log('Unable to fetch weather')
  }
})

// 2b77614432ca4f8a9d9cacb7d0389228
// https://api.darksky.net/forecast/2b77614432ca4f8a9d9cacb7d0389228/40.7134104,-74.0069091
