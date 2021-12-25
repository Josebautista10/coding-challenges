// Complete the function that accepts a string parameter, and reverses each word in the string. 
// All spaces in the string should be retained.

function reverseWords(str) {
  const newArr = [];
  str.split(' ').forEach(e => {
    newArr.push(e.split('').reverse().join(''))
  })
  return newArr.join(' ')
}
console.log(reverseWords("This is an example!"))