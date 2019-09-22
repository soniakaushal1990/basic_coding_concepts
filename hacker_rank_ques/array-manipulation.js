let n =10;
oprations = 4;
let queries =[ [2 ,6, 8],
                [3 ,5, 7],
                [2 ,8, 11],
                [5 ,9, 15]];
function arrayManipulation(n, queries) {

  let intial_array = new Array(n+1).fill(0);
  let max=0;
    queries.forEach(item => {
      intial_array[item[0]] +=item[2];
      intial_array[item[1]+1]-=item[2];
    });
    intial_array.reduce((prev,curr,index)=>{
        const sum = prev+curr;
        if(sum>max){
            max=sum;
        }
        return sum;
    })
    console.log(max);
    return max;


}
arrayManipulation(10,queries);