

//Time O(n2) and Space O(1)
function longestpalindrome(string){
    let currentlongest = [0,1];
    for(let i=1;i<string.length;i++){
        const odd =getLongestPalindromeFrom(string,i-1,i+1);
    }
}