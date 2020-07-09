var lengthOfLongestSubstring = function(s) {
    let longest=[0,1];
    let hash={};
    let startindex=0;
    for(let i=0;i<s.length;i++){
        let char= s[i];
        if(char in hash){
            startindex=Math.max(startindex,hash[char]+1);
        }
        if(longest[1]-longest[0]<i+1-startindex){
            longest=[startindex,i+1];
        }     
        hash[char]=i
    }
    console.log(hash);
    return s.length>0?(longest[1]-longest[0]):0;
};
console.log(lengthOfLongestSubstring('geeksforgeeks'));