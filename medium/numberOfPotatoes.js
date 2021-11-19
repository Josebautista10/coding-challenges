// sort all the drinks by price

const sortDrinkByPrice = (drinks) =>drinks.sort((a,b) => a.price - b.price)

console.log(
  sortDrinkByPrice([
    { name: 'lemonade', price: 50 },
    { name: 'lime', price: 10 }
  ])
)
