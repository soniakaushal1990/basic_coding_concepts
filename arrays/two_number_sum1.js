
// O(n^2)) |  O(1) space
function twoNumberSum(array, targetSum) {
   for(let i=0;i<array.length-1;i++){
       let first_num = array[i];
       for(let j=i+1;j<=array.length;j++){
            let second_num = array[j];
            if(first_num + second_num == targetSum){
                return [first_num,second_num].sort((a,b)=>a-b);
            }
       }
   }
   return [];   
      
}
let array = [3,5,-4,8,11,1,-1,6];
let targetSum = 10;
console.log(twoNumberSum(array,targetSum));



exports.twoNumberSum = twoNumberSum;
  