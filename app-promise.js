const yargs = require('yargs')
const axios = require('axios')

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


const encodedAddress = encodeURIComponent(argv.address)
const geocodeUrl = `${config.configAddress.url}${encodedAddress}`

axios.get(geocodeUrl)
  .then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find that address')
    }
    console.log(response.data.results[0].formatted_address)
    var lat = response.data.results[0].geometry.location.lat
    var lng = response.data.results[0].geometry.location.lng
    var weatherUrl = `${config.darkskyAPI.url}${config.darkskyAPI.key}/${lat},${lng}`
    return axios.get(weatherUrl)
      .then((res) => {
        var temperature = res.data.currently.temperature
        var apparentTemperature = res.data.currently.apparentTemperature
        console.log(`Its currently ${temperature}, it feels like ${apparentTemperature}`)
      })
  })
  .catch(e => {
    if (e.code === 'ENOTFOUND') {
      console.log('Unable to connect')
    } else {
      console.log(e.message)
    }
  })