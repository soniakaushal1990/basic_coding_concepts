// This problem was asked by Facebook.

// Given an array of integers in which two elements appear exactly once and all other elements appear exactly twice, find the two elements that appear only once.

// For example, given the array [2, 4, 6, 8, 10, 2, 6, 10], return 4 and 8. The order does not matter.

// Follow-up: Can you do this in linear time and constant space?


function unique(array){
    let hashmap={};
    let result = [];
    array.forEach((elem)=>{
        if(elem in hashmap) hashmap[elem]++;
        else hashmap[elem]=1;
        
    })
    for(let key in hashmap){
        if(hashmap[key] == 1){
            result.push(key);
        }
    }
//     for(let [key,value] of Object.entries(hashmap)){
//         if(value === 1) result.push(key);
//     }
   return result;
}

// function array_two_elements(arr) {
//     let xor = 0;
//     arr.forEach(element => {
//         xor = xor ^ element;
//     });
//   //  console.log(xor);
//     xor = xor & -xor;
//     let rets = [0, 0];
//     arr.forEach((num)=>{
//         if (num & xor)
//             rets[0] = rets[0] ^ num;
//         else
//             rets[1] = rets[1] ^ num;
//     })
//     return rets;
// }

// console.log(array_two_elements([2, 5, 6, 8, 10, 2, 6, 10]));

console.log(Math.log2(100));