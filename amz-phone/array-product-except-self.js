var productExceptSelf = function(nums) {

    let ans = new Array(nums.length);
    ans[0]=1;
    
    for(let i=1;i<nums.length;i++){
        ans[i]=nums[i-1]*ans[i-1];
    }
    
    let R=1;
    
    for(let i=nums.length-1; i >= 0 ; i--){
        ans[i]=ans[i] * R;
        R *= nums[i];
    }
    return ans;
};