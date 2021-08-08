const request = require('request')

const url = 'https://www.weatherapi.com/docs/weather_conditions.json'

request({ url:url}, (error,response)=>{
    // const data = JSON.parse(response.body)
    console.log(response)
})