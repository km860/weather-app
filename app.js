const request = require('request')
const yargs = require('yargs')

const config = require('./config')
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

console.log(argv.a)
const address = encodeURIComponent(argv.a)

request({
  url: `${config.configAddress.url}${address}`,
  json: true
}, (error, response, body) => {
  /* console.log(JSON.stringify(response, undefined, 2)) */
  console.log(`Address: ${body.results[0].formatted_address}`)
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`)
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`)
})