// Write a program that cleans up user-entered phone numbers so that they can be
// sent as SMS messages. Other than digits, the number may also contain special
// character such as spaces, dash, dot, and parentheses that should be ignored.
//
// The rules are as follows:
//
// If the phone number is less than 10 digits, assume that it is a bad number.
// If the phone number is 10 digits, assume that it is good.
// If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
// If the phone number is 11 digits and the first number is not 1, then it is a bad number.
// If the phone number is more than 11 digits, assume that it is a bad number.
// For bad numbers, just a return a string of 10 0s.

// Define the Problem
// * User enter any type of string input, but the only valid input is as follows:
// * 10 digits, with an optional first digit for country code (1 in this case - this would have 11 digits)
// * If the phone number is a good number, return the number formatted (10 digits only)
// * If the phone number is bad, return a string of 10x 0s
// Evaluate Test Cases
console.log(cleanNumber('12345678910') === '2345678910');
console.log(cleanNumber('22345678910') === '0000000000');
console.log(cleanNumber('1111111111') === '1111111111');
console.log(cleanNumber('111$11*11111') === '1111111111');
console.log(cleanNumber('12345asd54321') === '1234554321');
console.log(cleanNumber('this_is_not_a_number') === '0000000000');
// Data Structures
// *input is string
// *use regex to confirm valid input
// Algorithm
// *check if input is a valid phone number using regex
// *if valid, check length, if 11 trim first digit, return number
// *if invalid return '0000000000'
// Code
function cleanNumber(str) {
  const BAD_NUMBER = '0'.repeat(10);
  let cleaned = str.replace(/\D/g, '');
  if (cleaned.length > 11 || cleaned.length < 10) {
    return BAD_NUMBER;
  }
  if (cleaned.length === 11) {
    return cleaned[0] === '1' ? cleaned.slice(1) : BAD_NUMBER;
  }
  return cleaned;
}
