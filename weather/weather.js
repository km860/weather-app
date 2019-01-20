const request = require('request')

const config = require('../config')

const getWeather = (lat, lng,  callback) => {
  request({
    url : `${config.darkskyAPI.url}${config.darkskyAPI.key}/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      console.log('Unable to connect to darksky')
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather')
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      })
    }
  })
}

module.exports.getWeather = getWeather