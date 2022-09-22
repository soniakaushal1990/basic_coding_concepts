function minProcessingRequired(intervals){

    if(intervals.length == 1) return 1;

    let minProcessingRequired = 0;

        // Sort the Array
    intervals.sort((a,b)=> a[0]-b[0]);

    for(let i = 0 ;i < intervals.length-1; i++){
        if(intervals[i][1] > intervals[i+1][0]){
            minProcessingRequired++;
        }



        
    }

    return minProcessingRequired;


}


console.log(minProcessingRequired([[0,10],[10,50],[20,40]]));
console.log(minProcessingRequired([[0,10]]));