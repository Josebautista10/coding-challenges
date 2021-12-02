// Your task is to write a function that takes in the temperature, weather condition, wind speed, and direction as parameters and 
// store them inside a structure that holds each value as properties.




const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
  // Code here!

  // Remember to return an object!
  let obj = {temperature, condition, windSpeed, windDirection}
  obj.temperature = Math.round((temperature - 32) * 5/9)
  obj.condition = condition
  obj.windSpeed = Math.round(windSpeed / 2.237)
  obj.windDirection = windDirection
  return obj
}
