// Good morning! Here's your coding interview problem for today.

// This problem was asked by Uber.

// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Solution with Division
function productAllNums(array){
   let product = array.reduce((a,b)=> a*b);
   let result = [];
   for(let i=0;i<array.length;i++){
        let num = product/array[i];
        result.push(num);

   }
   console.log(result);
}
productAllNums([1, 2, 3, 4, 5]);