function solution(A){
    const set = new Set(A);
    let i=1;
    while(set.has(i)){
        i++;
    }
    return i;

}
console.log(solution([1,2,3]));

//Solution 2

// function solution(A){
//     const set={};
//     for(let i=0;i<A.length;i++){
//         set[A[i]] =true;
//     }
//     console.log(set);
//     let i=1;
//     while(i in set){
//         i++;
//     }
//     return i;

// }