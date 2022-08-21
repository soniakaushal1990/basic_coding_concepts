function findPairsWithGivenDifference(arr, k) {
    // your code goes here
    let res = [];
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(i !=j){
                let x = arr[j];
                let y = arr[i];
                if(x-y == k){
                    let pair = [arr[j],arr[i]];
                    res.push(pair);
                }
            }
        }
    }
    
    return res;
  }



//   function findPairsWithGivenDifference(arr, k) {
//     // your code goes here
//     let res = [];
//     let hash = new Map();
//     for(let i=0;i<arr.length;i++){
//         hash.set(arr[i],i);
//     }
   

//     for(let i=0;i<arr.length;i++){
//         let x = k+arr[i];
//         if(hash.has(x)){
//             let pair = [arr[i],x];
//             res.push(pair);
//         }
//     }

//     return res;
    
//   }



// input:  arr = [0, -1, -2, 2, 1], k = 1
// output: [[1, 0], [0, -1], [-1, -2], [2, 1]]

  console.log(findPairsWithGivenDifference([0, -1, -2, 2, 1], 1));