function twoSum(nums = [2,7,11,15], target = 9){
    let hash = new Map(); 

    for(let i = 0 ; i < nums.length ;i++){
        console.log(hash);
        let potential =  target - nums[i];       
        if(hash.has(potential)) {
            return [potential,nums[i]];
        } else {
            hash.set(nums[i],1);
        }
    }
    return -1;
}

console.log(twoSum());