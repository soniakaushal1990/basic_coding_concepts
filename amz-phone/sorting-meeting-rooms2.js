/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {   
    if(intervals.length ==0) return 0;  
    let start = new Array(intervals.length);
    let end = new Array(intervals.length);
    for(let i=0;i<intervals.length;i++){
        start[i]=intervals[i][0];
        end[i]=intervals[i][1];
    }
    
    start.sort((a,b)=>a-b);
    end.sort((a,b)=>a-b); 
    
    let startPointer = 0;
    let endPointer = 0;
    let minRoomRequired = 0;    
    while(startPointer < intervals.length){
        if(start[startPointer] >= end[endPointer] ){
            minRoomRequired-=1;
            endPointer+=1;
    
        }
        
        minRoomRequired+=1;
        startPointer+=1;   
    }
    
    return minRoomRequired;    
};

console.log(minMeetingRooms([[0,30],[5,10],[15,20]]));