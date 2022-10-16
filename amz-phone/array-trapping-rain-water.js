/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height){
    if(!height) return 0;
     
     let ans = 0;
     let size = height.length;
     
     let left_max = new Array(height.length).fill(0);
     let right_max = new Array(height.length).fill(0);
     
     left_max[0]= height[0];
     
     for(let i= 1; i < height.length; i++){
         left_max[i] = Math.max(height[i],left_max[i-1]);
     }
     
     right_max[size - 1] = height[size - 1];
     
     for(let i= height.length-2; i >= 0 ; i--){
         right_max[i] = Math.max(height[i],right_max[i+1]);
     }
     
     for(let i= 1 ; i < height.length-1 ; i ++){
         ans += Math.min(left_max[i],right_max[i]) - height[i];
     }
     
     return ans;
     
 }