// O(n^2) |  O(n) space
function threeNumSum(array,targetSum){
    array.sort((a,b)=>(a-b));
   // console.log(array);
    const triplets= [];
    for(var i=0; i<array.length-2; i++){
        let left = i+1;
        let right = array.length-1;
        while (left < right){
            const current_sum = array[i]+array[left]+array[right];
            if(current_sum == targetSum){
                triplets.push([array[i],array[left],array[right]]);
                //check why we are dercrementing both left and right
                left++;
                right--;
            }
            else if (current_sum < targetSum){
                left++
            }
            else if(current_sum > targetSum){
                right--
            }
        }
    }

   return triplets;
}
let array = [12,3,1,2,-6,5,-8,6];
let targetSum = 0;
/*
Sample Output
[[-8,2,6],[-8,3,5],[-6,1,5]]

*/
console.log(threeNumSum(array,targetSum));
module.exports = threeNumSum;