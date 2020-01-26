let array = [3, 5, -4, 11, 8, 11, 1, -1, 6];
let target_sum = 11;

//Complexity is N2
function twoNumSum(array, target_sum) {
   array.sort((a,b)=>a-b);
   let left=0;
   let right=array.length-1;
   while(left<right){
       const curr_sum=array[left]+array[right];
       if(curr_sum===target_sum){
           return[array[left],array[right]];
       }
       else if(curr_sum<target_sum){
           left++;
       }
       else if(curr_sum>target_sum) {
           right++
       }

   }
   return [];
}
console.log(twoNumSum(array, target_sum));