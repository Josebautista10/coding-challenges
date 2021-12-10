// Your task is to write a function that will take in an array of lunch choices (strings) and
// return the choice as a string with the most votes.

// There is always two lunch choices, and always an odd number of astronauts!

const chooseLunchWinner = (arr) => {
  const uniqueArr = [...new Set(arr)]
  const obj = {}
  uniqueArr.forEach((e) => (obj[e] = 0))
  uniqueArr.forEach((u) => {
    arr.forEach((e) => {
      if (e === u) {
        obj[u]++
      }
    })
  })

  const sortable = []
  for (var item in obj) {
    sortable.push([item, obj[item]])
  }
  sortable.sort(function (a, b) {
    return b[1] - a[1]
  })
  return sortable[0][0]
}
