function smallestSubStringContaning(bigString,smallString){
    const targetCharCounts =  getCharCounts(smallString);
    const subStringBounds = getSubStringBounds(bigString,subStringBounds);

}


function getCharCounts(string){
    const charCounts = {};
    for(const char of string){
        increaseCharCount(char,charCounts);
    }
    return charCounts;
}

function getSubStringBounds(string,targetCharCounts){
    let subStringBounds = [0,Infinity];
    const subStringCharCounts = {};
    const numUnqiueChars = Object.keys(targetCharCounts).length;
    let numUniqueCharsDone = 0;
    let leftIdx=0;
    let rightIdx = 0;
    while(rightIdx < string.length){
        const rightChar = string[rightIdx];
        if(!(rightChar in targetCharCounts)){
            rightIdx++;
            continue;
        }
        increaseCharCount(rightChar,subStringCharCounts);
        if(subStringCharCounts[rightChar] === targetCharCounts[rightChar]){
            numUniqueCharsDone++;
        }
        while(numUniqueCharsDone === numUnqiueChars && leftIdx <= rightIdx){
            subStringBounds = getCloserBounds(leftIdx,rightIdx,subStringBounds[0],subStringBounds[1]);
            const leftChar = string[leftIdx];
            if(!(leftChar in targetCharCounts)){
                leftIdx++;
                continue;
            }
            if(subStringCharCounts[leftChar] === targetCharCounts[leftChar]){
                numUniqueCharsDone--;
            }
            decreaseCharCount(leftChar,subStringCharCounts);
            leftIdx++;
        }
        rightIdx++;
    }
    return subStringBounds;
}
function getSubStringBounds(string,bounds){
    const [start,end] =bounds;
    if(end === Infinity) return '';
    return string.slice(start,end+1);
}

function increaseCharCount(char,charCounts){
    charCounts[char] = (charCounts[char] || 0) + 1;
}

function decreaseXharCount(char,charCounts){
    charCounts[char]--;
}