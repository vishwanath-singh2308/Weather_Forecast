const request = require('request')
const forecast = (longitude,latitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5340b1955068ed3892e1c21c79750d31&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)

    request( {url, json: true}, (error, {body} = {})=>{
        if(error){
            callback('Unable to connect to location services!', undefined)
        }
        else if(body.error){
            callback('Unable to find the location', undefined)
        }
        else{
            callback(undefined, {
                Temperature: body.current.temperature,
                Precipitaion: body.current.precip
            })
        }
    })
}

module.exports = forecast