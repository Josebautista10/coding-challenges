// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters,
//  but their letters remain in the same order.

const detectWord = (str) => str.split('').filter(e => e === e.toLowerCase()).join('')

console.log(detectWord("UcUNFYGaFYFYGtNUH"))