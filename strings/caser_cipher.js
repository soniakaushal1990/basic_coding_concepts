function caesarCipher(string,key){
    const newLetters=[];
    const newKey=key%26;
    console.log(newKey);
    for(const letter of string){
        newLetters.push(getNewLetter(letter,newKey));
    }
    console.log(newLetters);
    return newLetters.join('');
}
function getNewLetter(letter,key){
    const newLetterCode=letter.charCodeAt()+key;
    const newletter= newLetterCode <=122?String.fromCharCode(newLetterCode):String.fromCharCode(96+newLetterCode%122);
  //  console.log(key);
    return newletter;
}
caesarCipher("xyz",2);