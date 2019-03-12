//Problem Statement
//check if the two strings are anagram of each other
//one string is a anagram of another if it uses the same characters and in the same quantity.Spaces puntuations marks not considers
//Consider capital letters to be same as lower case
//Examples
//anagram('rail safety','fairy tales') =  true
//anagram('Hello There','Bye there') = false

function anagram(stringA,stringB){
   const acharMap=buildcharMap(stringA);
   const bcharMap=buildcharMap(stringB);
   if(Object.keys(acharMap).length !==Object.keys(bcharMap).length){
       return false;
   }
   for(let char in acharMap){
       if(acharMap[char]!==bcharMap[char]){
           
           return false;
       }
       console.log('Char value is',char);
       console.log(acharMap[char]);
       console.log(bcharMap[char]);
   }
 
   return true;
}

function buildcharMap(str){
    const charMap = {};
    for(let char of str.replace([/[^\w]/g]).toLowerCase()){ 
        charMap[char]=charMap[char]+1||1;
    }
 //   console.log(charMap);
    return charMap;
}
console.log(anagram('rail safety','fairy tales'));