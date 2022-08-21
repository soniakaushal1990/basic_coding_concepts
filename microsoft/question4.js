// Strugacarro is a planet whose year is divided into four seasons: winter, 
//spring, summer and autumn in that order. 
//A year has N days and every season lasts for exactly N/4 days.
// The year starts on the first day of 
// winter and ends 
//on the last day of autumn.

// Given the history of temperatures from the previous year, 
//find the season with the highest amplitude of temperatures. 
//The amplitude is the difference between the highest and lowest 
//temperatures over the given period. 
//Assume that all seasons within one year have different temperature amplitudes.

// Write a function:

// function solution(T);

// that, given an array T of N integers denoting the temperatures on all days of the year, 
//returns a string with the name of the season with the highest temperature 
//amplitude (one of the following: "WINTER", "SPRING", "SUMMER", "AUTUMN").

// For example, given T = [−3, −14, −5, 7, 8, 42, 8, 3]: // the function should 
//return "SUMMER", since the highest amplitude (34) occurs in summer.

// Given T = [2, −3, 3, 1, 10, 8, 2, 5, 13, −5, 3, −18]: // the correct answer is 
//"AUTUMN" (amplitude equals 21).

// Assume that:

// The number of elements in the array is divisible by 4; // each element of 
//array T is an integer within the range [−1,000..1,000]; 
// N is an integer within the range [8..200]; // Amplitudes of all seasons are distinct. 
// In your solution, focus on correctness. 
//The performance of your solution will not be the focus of the assessment.

function solution(T){

    let winter=[]; 
    let spring=[]; 
    let summer=[];
    let autumn=[];
    let count = T.length/4;
    let maxAmp=0;
    let hash = new Map();
    let season = '';
    
    for(let i=0;i < count;i++){
       winter.push(T[i]);
    }


    for(let i=count;i<count*2;i++){
        spring.push(T[i]);
    }

    for(let i=count*2; i < count*3 ; i++){
        summer.push(T[i]);
    }

    for(let i=count*3; i < T.length; i++){
        autumn.push(T[i]);
    }

    winter.sort((a,b)=>a-b);
    spring.sort((a,b)=>a-b);
    summer.sort((a,b)=>a-b);
    autumn.sort((a,b)=>a-b);
 

    hash.set('WINTER',Math.max(maxAmp,winter[count-1]-winter[0]));
    hash.set('SUMMER',Math.max(maxAmp,summer[count-1]-summer[0]));
    hash.set('SPRING',Math.max(maxAmp,spring[count-1]-spring[0]));
    hash.set('AUTUMM',Math.max(maxAmp,autumn[count-1]-autumn[0]));
    
   
    
    for (let [key,value] of hash.entries()) {
        if(value > maxAmp){
            maxAmp = Math.max(maxAmp,value);
            season = key;
        }
    }
    
    return season;
}

console.log(solution([100, 14 , 5, 97, 8, 42, 8, 3, 33, 55, 42, 23]));

