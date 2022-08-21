function productSum(arr){
    let ans = new Array(arr.length).fill(1);
    for(let i=0;i<arr.length;i++){
        for(let j=0; j < arr.length ; j++){
            if(i != j){
                ans[i]*=arr[j];
            }
        }
    }

    return ans;

}

console.log(productSum([8, 11, 2]));