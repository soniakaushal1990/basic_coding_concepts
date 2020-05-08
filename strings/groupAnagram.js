//TIme Complexity O(w * nlog(n) time | O(wn)Space

//where w is the no of words and n is the length of longest word; 

function groupAnagrams(words) {
	const anagrams={};
	for(const word of words){
        const sortedWord=word.split('').sort().join('');
		if(sortedWord in anagrams){
			anagrams[sortedWord].push(word);
		}else{
			anagrams[sortedWord]=[word];
        }
        console.log(anagrams);
	}
	return Object.values(anagrams);
  
}
let anagrams=["yo", "act", "flop", "tac", "cat", "oy", "olfp"];
console.log(groupAnagrams(anagrams));

