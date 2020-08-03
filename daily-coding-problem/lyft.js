// This problem was asked by Lyft.

// Given a list of integers and a number K, return which contiguous elements of the list sum to K.

// For example, if the list is [1, 2, 3, 4, 5] and K is 9, then it should return [2, 3, 4], since 2 + 3 + 4 = 9.


function contiguousElemSumToK(array,K){
    let potentialSum = 0;
    for(let i=0;i<array.length;i++){
        let result =[];
        let sum = array[i];
        result.push(array[i]);
        let j=i+1;
        while(j < array.length){      
            sum +=array[j];
            result.push(array[j]);
            if(sum == K) return result;
            j++;
        }
    }
    return [];
}
console.log(contiguousElemSumToK([1,2,3,4,5],14));