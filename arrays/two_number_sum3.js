// O(n log(n)) |  O(1) space
function twoNumberSum(array,target_sum) {

    array.sort((a,b)=>a-b);
    let left =0;
    let right = array.length-1;
    while(left < right) {
        let current_sum = array[left]+array[right];
        if(target_sum == current_sum){
            return [array[left],array[right]];
        }
        else if(current_sum > target_sum){
            right--;
        }
        else if(current_sum < target_sum) {
            left++;
        }
    }
  
}



let array = [3,5,-4,8,11,1,-1,6];
let targetSum = 10;
console.log(twoNumberSum(array,targetSum));
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;
  