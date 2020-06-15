function getNumberOfIslands(mtx) {
  const rows = mtx.length
  const cols = mtx[0].length
  let islands = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mtx[i][j] === 1) {
        markVisited(i, j, mtx, rows, cols)
        islands++
      }
    }
  }
  return islands
}

function markVisited(i, j, mtx, rows, cols) {
  const queue = []
  queue.push([i, j])
  while (queue.length > 0) {
    const item = queue.pop()
    const x = item[0]
    const y = item[1]
    if (mtx[x][y] === 1) {
      mtx[x][y] = -1
      pushIfValid(queue, x + 1, y + 1, mtx, rows, cols);
      pushIfValid(queue, x - 1, y - 1, mtx, rows, cols);
      pushIfValid(queue, x + 1, y - 1, mtx, rows, cols);
      pushIfValid(queue, x - 1, y + 1, mtx, rows, cols);
      pushIfValid(queue, x, y - 1, mtx, rows, cols)
      pushIfValid(queue, x, y + 1, mtx, rows, cols)
      pushIfValid(queue, x - 1, y, mtx, rows, cols)
      pushIfValid(queue, x + 1, y, mtx, rows, cols)


    }
  }
}

function pushIfValid(q, x, y, mtx, rows, cols) {
  if (x >= 0 && x < rows && y >= 0 && y < cols) {
    q.push([x, y])
  }
  return q
}



let binaryMatrix = [
  [1, 0, 1, 0, 1],

  [0, 0, 1, 0, 0],

  [0, 0, 1, 1, 0],

  [0, 1, 0, 1, 0],

  [1, 1, 1, 0, 0],

  [0, 0, 0, 0, 1],

  [0, 1, 0, 1, 0],

  [0, 0, 1, 1, 0],

  [0, 0, 0, 1, 1],

  [1, 1, 0, 0, 0]
];
//  binaryMatrix = [ [0,    1,    0,    1,    0],
//                  ]

let islands = getNumberOfIslands(binaryMatrix)
console.log(islands)