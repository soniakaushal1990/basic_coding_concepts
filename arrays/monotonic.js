//Non increasing or Non decreasing
function isMonotonic(array) {
    let isNonDecreasing=true;
      let isNonIncreasing=true;
      for(let i=1;i<array.length;i++){
          if(array[i]<array[i-1]) isNonDecreasing= false;
          if(array[i]>array[i-1]) isNonIncreasing = false;
      }
      return isNonDecreasing || isNonIncreasing;
  }
  const array = [-1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -7, -9, -10, -11];
  console.log(isMonotonic(array));