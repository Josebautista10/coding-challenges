// Your task is to create a function that will take in an array of
// weather objects and will return a rounded average of the wind speed.

const averageWindSpeed = (weatherEntries) => {
  return Math.round(
    weatherEntries.map((e) => e.windSpeed).reduce((a, b) => a + b) /
      weatherEntries.length
  )
}
