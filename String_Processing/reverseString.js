function reverse(string) {
  chars = string.split('');
  return chars.map((char, index) => {
    return chars[chars.length - (index + 1)]
  }).join('');
}

console.log(reverse('hello'));                  // returns "olleh"
console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"
