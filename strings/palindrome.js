//Function to check whether a string is palindrome

//Palindromes are strings which form the same string if they are reversed
//Examples
//palindrome('abba') === true
//palindrome('abbd') === false



//Attempt 1
function palindrome(string){
    let reversed = '';
    for(let char of string){
        reversed =  char+reversed;
    }
    return string === reversed;
}

//Attempt 2


// function palindrome(string){
//     const reversed = string
//     .split('')
//     .reverse()
//     .join();
//     return string === reversed;
// }



console.log(palindrome('abbas'));