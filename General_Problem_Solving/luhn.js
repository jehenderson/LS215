// Write a program that, given a number in
// string format, check if it is valid per the
// Luhn formula. This should treat, for example,
// "2323 2005 7766 3554" as valid. You can
// ignore all non-numeric characters in the input string.

// Define the Problem
// * Given a string input, reduce the digits of the string from the
// * right most digit to the leftmost digit (so will have to reverse string)
// * * double the value of every second digit (index 1, 3, 5, ..., n, n+2) [where n is odd],
// * * * if the digit value exceeds 10, subtract 9
// * * reduce to the sum of the transformed digits
// * return true if the sum % 10 === 0, else false
// * All non numeric characters in input string can be ignored
// Evaluate Test Cases
// console.log(checkLuhn('2323 2005 7766 3554') === true);
// console.log(checkLuhn('1111') === false);
// console.log(checkLuhn('8763') === true);
// console.log(checkLuhn('') === false);
// console.log(checkLuhn('not a number') === false);
// console.log(checkLuhn('2323$2005%7766*3554') === true);
// Data Structure
// * String input, will split into an array to make use of transformation,
// * and reduction
// Algorithm
// * clean string by removing all non digit (garbage) characters (string.replace(regex, ''))
// * return false if the string is empty (guard clause)
// * reverse string (to iterate from rightmost digit leftward), split reversed string
// * into chars, coerce chars into numbers, if index is odd (index % 2 !== 0) =>
// * * double the value of the number, if less than 10 return the double value, if
// * * greater than 10 subtract 9 and return
// * reduce transformed array, summing all digits
// * return sum % 10 === 0 ? true : false;
// Code
function checkLuhn(numStr) {
  cleanedStr = numStr.replace(/\D/g, '');
  if (!cleanedStr) { return false }

  return cleanedStr.split('')
            .reverse()
            .map((char, index) => {
              let digit = Number(char);
              if (index % 2 !== 0) {
                digit *= 2;
                return digit < 10 ? digit : digit - 9;
              } else {
                return digit;
              }
            }).reduce((sum, value) => sum + value) % 10 === 0;
}

// Never fleshed out all the edge cases on the problem below - might come
// back to it later

// Write a function that can add a check digit to make the number valid per
// the Luhn formula and return the original number plus that digit. This should
// give  "2323 2005 7766 355" => "2323 2005 7766 3554"

// Define the Problem
// * Take as input a string. If the string is a valid Luhn number, return that
// * string. If it is invalid, find the digit that makes it valid and append it
// * to the original string, then return
// Evaluate Test Cases
console.log(makeLuhn('2323 2005 7766 3554'));// === '2323 2005 7766 3554');
console.log(makeLuhn('1111'));// === '11114');
console.log(makeLuhn('8763'));// === '8763');
console.log(makeLuhn(''));// === '0');
console.log(makeLuhn('not a number'));// === '0');
console.log(makeLuhn('2323 2005 7766 355'));// === '2323 2005 7766 3554');
// Data Structures
// * input is a string, will use string as DS
// Algorithm
// * check if string is luhn, if yes return string, else
// * append (1-10), checkluhn, if luhn return number
// Code
function makeLuhn(numStr) {
  let cleanedStr = numStr.replace(/(\D|\S)/g, '').trim();
  if (checkLuhn(numStr)) {
    return numStr;
  } else {
    for (var i = 0; i < 10; i++) {
      if (checkLuhn(`${cleanedStr}${i}`)) {
        return `${cleanedStr}${i}`
      }
    }
  }
}
