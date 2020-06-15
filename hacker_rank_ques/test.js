let queries = [[2 ,3, 603], [1, 1 ,286], [4, 4, 882]];


function arrayManipulation(n, queries) {
    
        
//    let intial_array = new Array(n);
    let intial_array = new Array(2*n).fill(0); let max = 0;
    for (let j = 1; j <= n; j++) {
        intial_array[j] = 0;
    }
    queries.forEach((item) => {
        intial_array[item[0]] += item[2];
        intial_array[item[1] + 1] -= item[2];
    });
    
    intial_array.reduce((prev, curr, idx) => {
        const sum = prev + curr;
        if (sum > max) {
            max = sum;
        }
    
        return sum;
    })
    console.log(max);
    return max;
    

}
arrayManipulation(4, queries);