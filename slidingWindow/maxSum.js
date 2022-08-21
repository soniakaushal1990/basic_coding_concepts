

var maxSum = function(arr,k){

    
    let mxSum = 0;
    for(let i=0;i<arr.length-k+1;i++){
        let currSum=0;
        for(let j=0;j<k;j++){
                currSum+=arr[i+j];
                
        }
        mxSum = Math.max(mxSum,currSum);
    }

    return mxSum;

}

let arr = [100, 200, 300, 400] ,k = 3;

console.log(maxSum(arr,k));