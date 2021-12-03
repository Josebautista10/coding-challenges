// Your task is to write a function that will take in an array of objects containing a sender and a message as a parameter. 
// The function will then parse a message from each object, add it to an array then return the built array.

const parseTranscripts = (arr) => {
  return arr.map(e=> `${e.origin}: ${e.message}`)
}
