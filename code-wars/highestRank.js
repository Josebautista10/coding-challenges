// return the highest duplicate in the array but if there's a tie return the higher value

function highestRank(arr) {
  let duplicateCount = {}

  arr.forEach((e) => {
    duplicateCount[e] = (duplicateCount[e] || 0) + 1
  })
  const maxVal = Math.max(...Object.values(duplicateCount))
  const highestDuplicate = []
  for (num in duplicateCount) {
    if (duplicateCount[num] === maxVal) {
      highestDuplicate.push(Number(num))
    }
  }
  return Math.max(...highestDuplicate)
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]))
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]))
