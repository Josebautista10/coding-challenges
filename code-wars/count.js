// The main idea is to count all the occurring characters in a string. If you have a string like aba, 
// then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  const newObj = {}
  string.split('').forEach((e) => {
    if (e) {
      newObj[e] = 0
    }
  })
  Object.keys(newObj).forEach((key) => {
    string.split('').forEach((e) => {
      if (e === key) {
        newObj[e]++
      }
    })
  })
  return newObj
}
console.log(count('hello'))
