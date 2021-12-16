// are multiples of 3 or 5
const solution = (number) =>{
  const final = []
  for (let i = number; i > 0; i--) {
    if (i % 3 === 0 && i % 5 === 0) final.push(i)
    if (i % 3 === 0) final.push(i)
    if (i % 5 === 0) final.push(i)
    console.log(final)
  }
  if (final.length === 0){
    return 0
  }
  return final.reduce((a,b) => a + b)
  }

  console.log(solution(10))