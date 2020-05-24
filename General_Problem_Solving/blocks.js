// A collection of spelling blocks has two letters per block, as shown
// in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
// This limits the words you can spell with the blocks to only those words that
// do not use both letters from any given block. You can also only use each
// block once.

// Write a function that takes a word string as an argument, and returns
// true if the word can be spelled using the set of blocks, or false otherwise.
// You can consider the letters to be case-insensitive when you apply the rules.

// Examples:

// Define the Problem
// * I have a collection of spelling blocks, which can be represented as
// * an array of letters or as an object where the key value pairs are linked
// * letters (or an array of objects). Given a string input, check that each
// * block of letters is only used once in the string
// Evaluate Test Cases
console.log(isBlockWord('BATCH') === true);      // true
console.log(isBlockWord('BUTCH') === false);      // false
console.log(isBlockWord('jest') === true);       // true
// Data Structures
// * blocks = {letters: ['B', 'O'], used: false}, ....
// Algorithm
// * split the string into an array of chars
// * for each letter in the array, check if the letter exists in block letters
// * check if that block has been used, if used, return invalid, else marked used
// * if you arrive to end of chars array with all valid input, return true
// Code

function isBlockWord(str) {
  let blocks = [
    {letters: ['B', 'O'], used: false},
    {letters: ['G', 'T'], used: false},
    {letters: ['V', 'I'], used: false},
    {letters: ['X', 'K'], used: false},
    {letters: ['R', 'E'], used: false},
    {letters: ['L', 'Y'], used: false},
    {letters: ['D', 'Q'], used: false},
    {letters: ['F', 'S'], used: false},
    {letters: ['Z', 'M'], used: false},
    {letters: ['C', 'P'], used: false},
    {letters: ['J', 'W'], used: false},
    {letters: ['N', 'A'], used: false},
    {letters: ['H', 'U'], used: false},
  ]
  let caps = str.toUpperCase().split('');
  for (var i = 0; i < caps.length; i++) {
    let found = false;
    blocks.forEach(block => {
      if (block.letters.includes(caps[i]) && !block.used) {
        block.used = true;
        found = true;
      }
    })
    if (!found) {
      return false;
    }
  }
  return true;
}
