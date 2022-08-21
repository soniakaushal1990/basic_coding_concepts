function solution(N) {
    let start1 , end1 = 0;
    let map = new Map();
    let binary = N.toString(2).split('');
    
    for(let i=0;i < binary.length; i++){

        let bit = parseInt(binary[i]);

        if(binary[i] ==1){
            if(!map.has(bit)){
                map.set(bit,[i]);
            }else {
                map.get(bit).push(i);
            }
        }       
    }

    
    let values = map.get(1);
    let max=0;
    for(let i=1;i<values.length;i++){
        let currMax = values[i] - values[i-1];
       max = Math.max(currMax,max);
    
    }

    return max;
}
console.log(solution(1041));