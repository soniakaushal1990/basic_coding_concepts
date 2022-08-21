function minProcessingTime(n,processerTime,taskTime){

    processerTime.sort((a,b)=>b-a);
    taskTime.sort((a,b)=>a-b);
    let minProcessingTime=0;
    let chunks = [];
    let i=0;
    
    for(let i=0; i < taskTime.length;i+=taskTime.length/n){
         chunks.push(taskTime.slice(i, i + taskTime.length/n));
    }
   
    console.log(chunks);
   
    for(let i=0;i < processerTime.length;i++){
        
        
    }
    return minProcessingTime;

}

minProcessingTime(2,[8,10],[2,2,3,1,8,7,4,5]);