// You are given a list of numbers in a "short-hand" range where only the
// significant part of the next number is written because we know the numbers
// are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]).
// Some people use different separators for their ranges
// (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers
// [1, 2, 3, 11, 12]). Range limits are always inclusive.
//
// Your job is to return a list of complete numbers.
//
// The possible separators are: ["-", ":", ".."]

// Define the Problem
// * We have three possible separators ^
// * We assume that the list of numbers is ordered ascending
// * Each number given can be a number or a range, when ranges are given they are inclusive
// ** can assume that the start of the next range will increment by 10^(n+1)

// Test Cases
// console.log(shorthand(['1,2']));
// "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
console.log(shorthand(['1', '3', '7', '2', '4', '1']));
// "1-3, 1-2" --> 1, 2, 3, 11, 12
console.log(shorthand(['1-3', '1-2']));
// "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
console.log(shorthand(['1:5:2']));
// "104-2" --> 104, 105, ... 112
// "104..2" --> 104, 105, ... 112
console.log(shorthand(['104..2']));
// "104-02" --> 104, 105, ... 202
// "545, 64:11" --> 545, 564, 565, .. 611

// Data Structures
// Given a list implies array, in this case an array of either numbers or ranges
// * The input of the data at each array element should be sanitized from string

// Algorithm
// * For each element in the array, iterate over the chars, if it is a digit,
// * 
