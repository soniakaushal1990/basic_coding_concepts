//Find highest average in JavaScript 2d array of students scores

var arr = [
    ["Bobby", "87"],
    ["Charles", "100"],
    ["Eric", "65"],
    ["Charles", "22"],
    ["Charles", "37"],
    ["Eric", "49"]];

function highest_score(array) {
    let hash_scores = {};
    let highest_avrage= 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i][0] in hash_scores){
            let prev_num=parseInt(hash_scores[array[i][0]]);      
            let curr_num= parseInt(array[i][1]);
            let average = Math.floor((prev_num + curr_num)/2); 
            hash_scores[array[i][0]]=average;
        }else {
            hash_scores[array[i][0]]=parseInt(array[i][1]);
            highest_avrage = parseInt(array[i][1]);
        }
    }
    const value  = Object.keys(hash_scores);
    const max = Object.keys(hash_scores).reduce((prev, curr) => Math.max(prev, hash_scores[curr]), -Infinity);
    console.log(max);
}
highest_score(arr);