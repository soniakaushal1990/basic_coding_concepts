/* This problem was asked by Google.

Given an array of integers where every integer occurs three times except for one integer, which only occurs once, find and return the non-duplicated integer.

For example, given [6, 1, 3, 3, 3, 6, 6], return 1. Given [13, 19, 13, 13], return 19.

Do this in O(N) time and O(1) space.
https://medium.com/pranayaggarwal25/find-the-element-that-appears-once-in-array-but-other-elements-appear-thrice-663066d5cf9

*/

let array = [6, 1, 3, 3, 3, 6, 6];
//array = [13, 19, 13, 13];
console.log(findElement(array));
function findElement(arr) {
    var ones = 0;
    var twos = 0;
    for (var i = 0; i < arr.length; i++) {
     
      ones = (ones ^ arr[i]) & ~twos;
      twos = (twos ^ arr[i]) & ~ones;
      console.log(`ones -- ${ones} -- twos -- ${twos}`);
    
    }
    return ones;
} 