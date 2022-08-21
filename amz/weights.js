function minTrips(weights){
    let map = new Map();

    for(let i=0;i < weights.length;i++){   
            map.set(weights[i], map.get(weights[i]) + 1 || 1);       
    }
   // console.log(map);
    
   let minTrips = 0;
    for(const [key,value] of map.entries()){
            if(value % 3 == 0){
                minTrips += value/3;
            }

            if(value % 2 == 0){
                minTrips += value/2;
            }
    }
    return minTrips;
}


console.log(minTrips([1,8,8,5,5,1,1]));