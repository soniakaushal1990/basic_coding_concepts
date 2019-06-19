// //Print the matrix in spiral form

// [1,2,3,4,
//   5,6,7,8,
//   9,10,11,12,
//   13,14,15,16
// ]

// console.log(spiral_matrix(4));
// function spiral_matrix(n){
//     const result = [];
//    for(let i=0;i<n;i++){
//        result.push([]);
//    }
//    let counter =1;
//    let startcolumn =0;
//    let endcolumn = n-1;
//    let startrow = 0;
//    let endrow = n-1;
//    while(startcolumn <= endcolumn && startrow <= endrow){
//        //Start row
//         for(let i= startcolumn;i<=endcolumn;i++){
//            result[startrow][i] = counter;
//            counter++;
//         }
       
//         startrow++;
//        //End Column
//         for(i=startrow;i<=endrow;i++){
//            result[i][endcolumn] =counter;
//            counter++;
//         }
//        endcolumn--;
//     //    // End row 
//         for(i=endcolumn;i>=startcolumn;i--){
//            result[endrow][i] = counter;
//            counter++
//         }
//         endrow--;
//     //     //Start Column
//         for(i=endrow;i>=startrow;i--){
//             result[i][startcolumn]= counter;
//             counter++;
//         }
//         startcolumn++; 
//    }
//    return result;
// }



function matrix(n) {
    let result = new Array(n).fill().map(() => new Array(n).fill('')); // create empty n x n array
    let counter = 1;
    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;
        for (let j = startRow; j <= endRow; j++) {
            result[j][endCol] = counter;
            counter++;
        }

        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }

        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }

        startCol++;

    }
  // console.log(result);
    return result;

}
let result1 = matrix(4);
console.log(result1);
