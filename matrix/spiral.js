// //Print the matrix in spiral form



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

//Time Complexity is O(mn)

function matrix(m,n,result) {
    console.log(result);
    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = m - 1;
    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            console.log(result[startRow][i]);
          //  counter++;
        }
        startRow++;
        for (let j = startRow; j <= endRow; j++) {
            console.log(result[j][endCol]);
            //counter++;
        }

        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            console.log(result[endRow][i]);
          
        }

        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            console.log(result[i][startCol]);
           // counter++;
        }

        startCol++;

    }
  // console.log(result);
    return result;

}
let array=[[1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16],
  [17,18,19,20]
];
matrix(5,4,array);
//console.log(result1);
