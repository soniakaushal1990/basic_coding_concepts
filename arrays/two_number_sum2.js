
// O(n) time |  O(n) space
function twoNumberSum(array, targetSum) {
    // Write your code here.
    const nums = {};
    for(let num of array){
        let potentialMatch =   targetSum-num; 
        if(potentialMatch in nums)
        {
            return [potentialMatch,num].sort();
        }
        else {
            nums[num] = true;

        }
    }
    return [];
  
      
}



let array = [3,5,-4,8,11,1,-1,6];
let targetSum = 10;
console.log(twoNumberSum(array,targetSum));
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;
  