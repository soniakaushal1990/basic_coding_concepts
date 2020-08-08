// Given two strings A and B, return whether or not A can be shifted some number of times to get B.

// For example, if A is abcde and B is cdeab, return true. If A is abc and B is acb, return false.


function areRotation(string1,string2){
    let temp= string1 + string1;
    return temp.includes(string2);


}

console.log(areRotation("abcde","cdeab"));
console.log(areRotation("abc","acb"));
console.log(areRotation("keyur","yurke"));