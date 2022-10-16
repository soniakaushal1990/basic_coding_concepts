var strStr = function(haystack, needle) {
    let L= needle.length;
    let n =haystack.length;
    for(let start=0;start<n-L+1;start++){
         let substring = haystack.substring(start, start + L)
         if(substring == needle) return start;
    }
    return -1;    
};