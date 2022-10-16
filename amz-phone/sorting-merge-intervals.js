// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6]


var mergeIntervals =  function(intervals){
    let merged = [intervals[0]];

    intervals.sort((a,b) => a[0]-b[0]);

    for(let curr of intervals){
        
        let prev = merged[merged.length-1];  
        if(prev[1] >= curr[0]){
           prev[1] = Math.max(curr[1],prev[1]);
        } else {
            merged.push(curr)
        }
    }

    return merged;
}
