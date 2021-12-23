// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
  const uniqueLength = [...new Set(str.toLowerCase().split(''))].length
  return uniqueLength === str.toLowerCase().split('').length
}