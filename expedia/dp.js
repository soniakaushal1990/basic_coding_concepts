// Number of ways to divide n objects in k groups, 
//such that no group will have fewer objects than previously formed groups?

// Example: n=8, k=4 Answer: 5

// [1,1,1,5], [1,1,2,4], [1,1,3,3], [1,2,2,3], [2,2,2,2]
function f(n, k){
    let dp = new Array(n + 1)
    for (let i=0; i<n+1; i++)
      dp[i] = new Array(k + 1).fill(0)
  
    dp[0][0] = 1
  
    
    for (let i=1; i<=n; i++)
      for (let j=1; j<=Math.min(i, k); j++) {
        dp[i][j] = dp[i - j][j] + dp[i - 1][j - 1]
        console.log(dp);  
      } 
    return dp[n][k]
}
console.log(f(2,2));  