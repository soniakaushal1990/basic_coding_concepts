var lengthOfLongestSubstring = function(s) {
    let ans=0;
    let n = s.length;
    let hash = {};
    let i=0;
  
      for(let j=0;j<s.length;j++){
          
          let char = s[j];
          
          if(char in hash){
              i = Math.max(hash[s[j]],i);
          }
          
          ans = Math.max(ans,j-i+1);
          hash[s[j]]=j+1;
          
      }
      
      return ans;
      
      
  };