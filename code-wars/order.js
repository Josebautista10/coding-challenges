function order(words){
  const final = []
  for (let i = 1; i <= 9; i++) {
    words.split(' ').find(e => {
      if (e.includes(i)) {
        final.push(e)
      }
    })
  }
  console.log(final.join(' '))
  return final.join(' ')
}

console.log((order("is2 Thi1s T4est 3a")));
console.log((order("4of Fo1r pe6ople g3ood th5e the2")));
console.log((order("")));