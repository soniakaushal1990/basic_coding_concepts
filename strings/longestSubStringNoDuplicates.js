var lengthOfLongestSubstring = function(string){
    let map = new Map();
    let i=0;
    let maxlength = 0;
    for(let j=0;j<string.length;i++){
        let char = string[j];
        if(map.has(char)){
            i = Math.max(map.get(char),i);
        }

        maxLength = Math.max(maxlength,j-i+1);
        map.set(s[j],j+1);
    }

}


lengthOfLongestSubstring("abcdfrav");























//var lengthOfLongestSubstring = function(s) {
//     let longest=[0,1];
//     let hash={};
//     let startindex=0;
//     for(let i=0;i<s.length;i++){
//         let char= s[i];
//         if(char in hash){
//             startindex=Math.max(startindex,hash[char]+1);
//         }
//         if(longest[1]-longest[0] < i+1-startindex){
//             longest=[startindex,i+1];
//         }  
           
//         hash[char]=i
//     }
   
//     return s.length>0?(longest[1]-longest[0]):0;
// };
// console.log(lengthOfLongestSubstring('pwwkew'));