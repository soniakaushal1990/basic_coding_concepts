var missingNumber = function(nums) {
    
    let expected_sum = nums.length*(nums.length+1)/2;
    let actual_sum = 0;
    for(let i=0;i<nums.length;i++){
        actual_sum+=nums[i];
        
    }
    return expected_sum-actual_sum;
    
};