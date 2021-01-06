// This problem was asked by Stripe.

// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

// You can modify the input array in-place.


//TIME Complexity o(n) | Space Compexity O(n)

/**
 * 
 * @param {Array} nums 
 */

var findmissingInteger = (nums) => {
    let set = new Set(nums);
    console.log(set);
    let missingInt = 1;
    while(set.has(missingInt)){
        missingInt+=1;
    }
    return missingInt;
}







// var firstMissingPositive = function(nums) {
//     var swap = function(i, j) {
//         var tmp = nums[i];
//         nums[i] = nums[j];
//         nums[j] = tmp;
//     };

//     for (let i = 0; i < nums.length; i++) {
//         while (0 < nums[i] && nums[i] - 1 < nums.length && nums[i] != i + 1 && nums[i] != nums[nums[i] - 1]) {
//             swap(i, nums[i] - 1);
//         }
//     }

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] != i + 1) {
//             return i + 1;
//         }
//     }
//     return nums.length + 1;
// };

console.log(findmissingInteger([3, 4, -1, 1]));