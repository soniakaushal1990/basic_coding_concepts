//Complexity N2

function identicalIndices(A) {
    var count = 0;
    A.forEach(function (item, index) {
      var restOfArray = A.slice(index + 1, A.length);
      restOfArray.forEach(function (pairCandidate) {
        if (pairCandidate === item) {
          count++;
        }
      });

    });

    return count;
}



function identicalIndices(A) {
    var count = 0;
    for(let i=0;i<A.length;i++){
       for(let j=i+1;j<=A.length;j++){
           if(A[i]===A[j]){
               count++;
           }
       }

    }

    return count;
}


function identicalIndices(A){
    let hashTable = {};
    let ans=0;
    for(let i=0;i<A.length;i++){
        if(A[i] in hashTable){
            hashTable[A[i]]+=1;
        } else {
            hashTable[A[i]]=1;
        }
    }
    for(const hash in hashTable){
        let count = hashTable[hash]; 
        let result = (count * (count - 1))/2;
        ans += result;
       
    }
    return ans;
}
var A = [];
  A[0] = 3;
  A[1] = 3;
  A[2] = 6;
  A[3] = 3;
  A[4] = 7;
  A[5] = 5;
console.log(identicalIndices(A));
