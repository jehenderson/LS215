// Write a Function named anagram that takes two arguments: a word and an
// array of words. Your function should return an array that contains all the
// words from the array argument that are anagrams of the word argument.
// For example, given the word "listen" and an array of candidate words like
// "enlist", "google", "inlets", and "banana", the program should return an array
// that contains "enlist" and "inlets".

function anagram(word, list) {
  return list.filter(candidate => areAnagrams(word, candidate));
}

function areAnagrams(source, target) {
  if (source.length === target.length) {
    let sortedSource = source.split('').sort();
    let sortedTarget = target.split('').sort();
    for (let i = 0; i < sortedSource.length; i++) {
      if (sortedSource[i] !== sortedTarget[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
