// Your task is to write a function that will take in a list of platforms and a date as a string.
// That function will update the date property on the first platform with an empty date and then return the platform list.

const bookFreePlatform = (platformList, missionDate) => {
  const emptyPlatform = platformList.findIndex((e) => e.bookDate === undefined)
  platformList[emptyPlatform].bookDate = missionDate
  return platformList
}
