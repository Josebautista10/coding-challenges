const alphabetPosition = (text) => {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];

  const newText = text.toLowerCase().split('').join();
  console.log(newText);
  let arr = [];
  let final = [];
  for (const letter in newText) {
    console.log(newText[letter]);
    arr.push(alphabet.findIndex((e) => e === newText[letter]));
  }
  console.log(arr);
  const indexFound = arr.filter((e) => e >= 0);
  console.log(indexFound);
  indexFound.forEach((e) => {
    final.push(e + 1);
  });
  return final.join(' ');
};

console.log(alphabetPosition('26#{he_a'));
// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
