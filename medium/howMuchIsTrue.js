// Create a function which returns the number of true values there are in an array.

const countTrue = (arr) => arr.filter((e) => e).length

// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0