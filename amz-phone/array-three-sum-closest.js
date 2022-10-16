/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    let diff = Infinity;
    let size = nums.length;
    nums.sort((a, b) => (a - b));
    for(let i=0;i<nums.length;i++){
        let lo=i+1;
        let hi = nums.length-1;
        while(lo < hi){
            let sum = nums[i]+nums[lo]+nums[hi];
            if(Math.abs(target-sum) < Math.abs(diff))
                diff = target-sum;
            if(sum < target) lo+=1
            else hi -=1;
        }
        if(diff == 0) break;
    }
    
    return target-diff;
    
};