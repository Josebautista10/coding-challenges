const getAverageSpeed = (firstPosition, secondPosition) => {
  
  const distance =  secondPosition.altitude - firstPosition.altitude
  
  const time = secondPosition.time -     firstPosition.time

  return Math.round((distance/time) * 10) / 10
  }