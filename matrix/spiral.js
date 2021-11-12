

function matrix(m,n,result) {
    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = m - 1;
    let ans = [];
    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            ans.push(result[startRow][i]);
       
        }
        startRow++;
        for (let j = startRow; j <= endRow; j++) {
            ans.push(result[j][endCol]);
          
        }

        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            ans.push(result[endRow][i]);
          
        }

        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            ans.push(result[i][startCol]);
           // counter++;
        }

        startCol++;

    }
    return ans;

}
let array=[[1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16],
  [17,18,19,20]
];
console.log(matrix(5,4,array));
