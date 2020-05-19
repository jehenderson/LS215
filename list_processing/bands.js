let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

// The band countries are wrong: all the bands should have 'Canada' as the country.
// The band name should have all words capitalized.
// Remove all dots from the band names.

function process(data) {
  return data.map(datum => {
    datum.country = 'Canada';
    datum.name = capitalize(datum.name);
    datum.name = formatDots(datum.name);
    return datum;
  });
}

function capitalize(word) {
  let chars = word.split('');
  chars[0] = chars[0].toUpperCase();
  return chars.join('');
}

function formatDots(str) {
  return str.split('').filter(char => char !== '.').join('');
}

console.log(process(bands));
