var analyseUserWebSitePattern = function(usernames,websites,timestamps){
    let dic = new Map();
    for(let i in usernames){
            if(dic.has(usernames[i]))
                dic.get(usernames[i]).push([timestamps[i],websites[i]]);
            else {
                dic.set(usernames[i],[[timestamps[i],websites[i]]]);
            }
    }
   console.log(dic);
    for(let [k,v] of dic.entries()){
      console.log();
    }


}


analyseUserWebSitePattern(["ua","ua","ua","ub","ub","ub"],[1,2,3,4,5,6],["a","b","a","a","b","c"])