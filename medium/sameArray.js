function isFirstSuperior(arr1, arr2) {

  if (arr1.sort((a,b)=>a-b)[0] === arr2.sort((a,b)=>a-b)[1]) {
    return false
  }
  if (arr1.sort((a,b)=>a-b)[0] > arr2.sort((a,b)=>a-b)[1]) {
    return true
  }
  if (arr1.sort((a,b)=>a-b)[arr1.length - 1] > arr2.sort((a,b)=>a-b)[arr2.length - 1]) {
    return true
  }
  return false
}

console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 3, 3]))
console.log(isFirstSuperior([1, 2, 4], [1, 2, 3]))
console.log(isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]))
console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]))
console.log(isFirstSuperior(['llama', 'alligator'], ['llama', 'buffalo']))

//