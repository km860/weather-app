const request = require('request')
const config = require('../config')

const geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {

      var encodedAddress = encodeURIComponent(address)

      request({
        url: `${config.configAddress.url}${encodedAddress}`,
        json: true
      }, (error, response, body) => {
        if (error) {
          reject('Unable to connect to Google servers.')
        } else if (body.status === 'ZERO_RESULTS') {
          reject('Unable to find that address.')
        } else if (body.status === 'OK') {
          resolve({
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
          })
        } 
      })
    }
  )}
geocodeAddress('19146').then((locations) => {
  console.log(JSON.stringify(locations, undefined, 2))
}, (errorMessage) => {
  console.log(errorMessage)
})