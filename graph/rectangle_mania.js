function rectangleMania(coords) {
  const coordsTable = getCoordsTable(coords);
  console.log(coordsTable);
  return getRectangleCount(coords, coordsTable);
}

function getRectangleCount(coords, coordsTable) {
  let rectangleCount = 0;
  for (const [x1, y1] of coords) {
    for (const [x2, y2] of coords) {
      if (!isInUpperRight([x1, y1], [x2, y2])) continue;
      const upperCoordString = coordToString([x1, y2]);
      const rightCoordString = coordToString([x2, y1]);
      console.log(upperCoordString);
      if (upperCoordString in coordsTable && rightCoordString in coordsTable)
        rectangleCount++;
    }
  }
  return rectangleCount;
}

function isInUpperRight(coord1, coord2) {
  const [x1, y1] = coord1;
  const [x2, y2] = coord2;
  return x2 > x1 && y2 > y1;
}

function getCoordsTable(coords) {
  const coordsTable = {};
  for (const coord of coords) {
    const coordString = coordToString(coord);
    coordsTable[coordString] = true;
  }
  return coordsTable;
}

function coordToString(coord) {
  const [x, y] = coord;
  return `${x}-${y}`;
}
const coords = [
  [0, 0],
  [0, 1],
  [1, 1],
  [1, 0],
  [2, 1],
  [2, 0],
  [3, 1],
  [3, 0],
];
console.log(rectangleMania(coords));
