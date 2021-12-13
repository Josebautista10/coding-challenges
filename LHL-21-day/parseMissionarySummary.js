// Your last (!) task is to write a function that will take in an array of exchanged messages and an array of organized data. 
// The goal is to parse each message, add them to a list and return an object containing two keys, transcript with the messages, 
// missionData with the missionData object.

const parseMissionarySummary = (exhanges, missionData) => {
  const arr = []
  const obj = {}
exhanges.forEach(e => arr.push(`${e.origin}: ${e.message}`))

obj.transcript = arr
obj.missionData = missionData

return obj
}
