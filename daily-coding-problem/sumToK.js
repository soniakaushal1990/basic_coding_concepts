// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

function sumToK(array,K){
    array.sort((a,b)=>a-b);
    let leftIdx=0;
    let rightIdx= array.length-1;
    while(leftIdx < rightIdx){
        let potentialSum = array[leftIdx]+array[rightIdx];
        if(potentialSum === K) return [leftIdx,rightIdx];
        if(potentialSum > K) rightIdx--;
        else if(potentialSum < K) {
             leftIdx++;
        }    
    }
    return false;
}

console.log(sumToK([10, 15, 3, 7],20));