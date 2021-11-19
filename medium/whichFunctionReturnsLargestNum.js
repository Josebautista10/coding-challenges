// if f is greater than g return f as a string
// if g is greater than f return g as a string
// if g and f are equal return neither as a string

function whichIsLarger(f, g) {
  if (f() > g()) {
    return 'f'
  } 

  if(f() < g()) {
    return 'g'
  }
  
  if(f() === g()) {
    return 'neither'
  }
}

console.log(whichIsLarger(() => 5, () => 10))
console.log(whichIsLarger(() => 10, () => 10))
console.log(whichIsLarger(() => 11, () => 10))