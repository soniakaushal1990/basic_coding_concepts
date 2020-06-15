// O(n^3) |  O(n) space
function threeNumSum(array,targetSum){
    array.sort();
    var result = [];
    var each = [];
    for(var i=0; i<array.length-2; i++){
        let firstNum = array[i];
        for(var j=i+1; j<array.length-1; j++){
            let secondNum = array[j];
            for(var k=j+1; k<array.length; k++){
                let thirdNum = array[k];
              if(firstNum + secondNum + thirdNum == targetSum) {
                  each.push(array[i]);
                  each.push(array[j]);
                  each.push(array[k]);
                  result.push(each);
                  each = [];
                  
              }
            }
        }
    }

   return result;
}
let array = [12,3,1,2,-6,5,-8,6];
let targetSum = 0;
/*
Sample Output
[[-8,2,6],[-8,3,5],[-6,1,5]]

*/
console.log(threeNumSum(array,targetSum));
module.exports = threeNumSum;