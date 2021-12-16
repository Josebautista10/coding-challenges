// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, 
//   also often referred to as Pascal case).

function toCamelCase(str){
  const newStr = str.replace(/[^A-Za-z0-9]/g, ' ');
return newStr.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
  if (str.split('')[0] === str.split('')[0].toUpperCase()) {
    return word.toUpperCase()
  } else {
  return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }  
  }).replace(/\s+/g, '');
}