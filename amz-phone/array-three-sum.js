var threeSum = function(nums){ 
    let res = [];
    nums.sort((a,b)=>a-b);
    var twoSum= function(nums,i,re) {
        let lo =i+1;
        let hi=nums.length-1;
        while(lo<hi){
            let sum = nums[i]+nums[lo]+nums[hi];
            if(sum < 0) lo+=1;
            else if(sum > 0) hi-=1;
            else {
                res.push([nums[i],nums[lo],nums[hi]]);
                lo+=1;
                hi-=1;
                while(lo<hi && nums[lo] == nums[lo-1])
                    lo+=1;
            }
        }
    }
        for(let i=0;i<nums.length;i++){
            if(nums[i] > 0)
                break;
            if(i == 0 || nums[i - 1] != nums[i])
                twoSum(nums, i, res);
        }
        return res;
}