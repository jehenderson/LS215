function totalArea(arr) {
  let areas = arr.map(rectangle => rectangle[0] * rectangle[1]);
  return areas.reduce((sum, area) => {return sum + area});
}

function totalSquareArea(arr) {
  let squares = arr.filter(el => el[0] === el[1]);
  return totalArea(squares);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalArea(rectangles));
console.log(totalSquareArea(rectangles));
