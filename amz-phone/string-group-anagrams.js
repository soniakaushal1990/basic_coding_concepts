/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    let anagrams = {};
    for(const str of strs){
       let sortedStr = str.split('').sort().join(''); 
        if(sortedStr in anagrams){
         anagrams[sortedStr].push(str);
        }else{
         
         anagrams[sortedStr]= [str];
        }
    }
    console.log(anagrams);
    return Object.values(anagrams);
    
};