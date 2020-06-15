//Time complexity O(n3) and space complexity O(1)
function longestPalimdromSubstring(string){
    let longest='';
    for(let i=0;i<string.length;i++){
        for(let j=0;j<string.length;j++){
            const substring=string.slice(i,j+1);
            console.log(substring);
            if(substring.length>longest.length && isPalindrome(substring)){
                longest=substring;
            }
        }
    }
    return longest;
}
function isPalindrome(string){
    let leftIdx=0;
    let rightIdx=string.length-1;
    while(leftIdx<rightIdx){
        if(string[leftIdx] !==string[rightIdx]) return false;
        leftIdx++;
        rightIdx--;
    }
    return true;
}
console.log(longestPalimdromSubstring("abaxyzzyxf"));