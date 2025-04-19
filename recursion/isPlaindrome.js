function isPalindrome(string){
    var reverseString = function(index){
        if(index < 0) return '';
        return string[index] + reverseString(index-1);
    }
    
    let reversedString = reverseString(string.length-1);
    for(let i = 0 ; i < reversedString.length ;i++){
        if(reversedString[i] != string[i]) {
            console.log('Not a palindrome');
            return false;
        }
    }
    console.log('it is palindrome');
    return true;
}

function isPalindromeNoReverse(string){
    var rec = function(start,end){
        if(start > end) return true;
        if(string[start] !== string[end]) return false;
        return isPalindromeNoReverse(start+1,end-1);

    }

    return rec(0,string.length-1);
}


console.log(isPalindromeNoReverse("hello"));
