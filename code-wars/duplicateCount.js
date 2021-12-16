const duplicateCount = (text) => {
  let newText = text.toLowerCase().split('')
  const index = []
  newText.forEach((e) => {
    index.push(newText.indexOf(e))
  })
  
  const newIndex = [...new Set(index)]
  
let count = 0
  newIndex.forEach((e) => {
    if (newText.includes(newText[e], e + 1)) {
      count++
    }
  })
  return count
}

console.log(duplicateCount(''))
console.log(duplicateCount('abcde'))
console.log(duplicateCount('aabbcde'))
console.log(duplicateCount('aabBcde'))
console.log(duplicateCount('Indivisibility'))
console.log(duplicateCount('Indivisibilities'))
