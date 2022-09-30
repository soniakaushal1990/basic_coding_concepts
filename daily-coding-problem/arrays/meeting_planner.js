function meeting_planner(slotsA,slotsB,dur){
    let pointer1 = 0;
    let pointer2 = 0;

    while(pointer1 < slotsA.length){
        let startTime = Math.max(slotsA[pointer1][0],slotsB[pointer2][0]);
        let endTime =  Math.min(slotsA[pointer1][1],slotsB[pointer2][1]);
        if(startTime + dur <= endTime){
            return [startTime,startTime+dur];
        }

        else if(slotsA[pointer1][1] > slotsB[pointer2][1]){
                pointer2++
        } else{
            pointer1++;
        }

    }

    return [];

}













let slotsA = [[10, 50], [60, 120], [140, 210]];         
let slotsB = [[0, 15], [60, 70]];
let dur = 8;

console.log(meeting_planner(slotsA,slotsB,dur));