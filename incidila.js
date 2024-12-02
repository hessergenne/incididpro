let originalString = '"This is a string with quotes"';
let stringWithoutQuotes = originalString.replace(/"/g, '');
console.log(stringWithoutQuotes); // Output: This is a string with quotes
