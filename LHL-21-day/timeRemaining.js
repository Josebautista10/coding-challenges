// Your task is to write a function that will take in a launch date and a mission name as strings.
// Calculate the difference between two dates in days and return an object containing the name of the mission
// and a rounded day difference.

const timeRemaining = (launchDate, missionName, fakeToday) => {
  const today = fakeToday || new Date() // Do not alter this line!
  const finalObj = { missionName }
  const newDate =
    parseInt(launchDate.split('-').pop()) - new Date(today).getDate()
  finalObj.daysRemaining = newDate
  return finalObj
}
