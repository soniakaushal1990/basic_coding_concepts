//Time Compexity o(n2*n!)
//Space Compexity o(n*n!)

function getPermutations(array) {
    const permutations=[];
      permutationHelper(array,[],permutations);
      return permutations;
  }
  function permutationHelper(array,currentPermutation,permutations){
      if(!array.length && currentPermutation.length){
          permutations.push(currentPermutation);
          console.log(permutations);
      }else {
          for(let i=0;i<array.length;i++){
              console.log(array);
              const newArray = array.slice(0,i).concat(array.slice(i+1));   
              console.log("New Array");
              console.log(newArray);      
              const newPermutation = currentPermutation.concat([array[i]]);
              console.log("New Permutation");
              console.log(newPermutation);
              permutationHelper(newArray,newPermutation,permutations);
          }
      }
  }
getPermutations([1,2,3]);
