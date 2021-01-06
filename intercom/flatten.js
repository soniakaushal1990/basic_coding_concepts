let arr = [[0, [7,8,1]], [2, 3], [4, 5]];



// let newArray = arr.flat(Infinity);
//console.log(newArray);

// function flatDeep(arr, d = 1) {
//     return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
//                  : arr.slice();
//  };
 
 //flatDeep(arr, Infinity);

 

function flatten(array){
    let result = [];
    for(let i=0;i<array.length;i++){
        if(Array.isArray(array[i])){
            result = result.concat(flatten(array[i]));
        }else {
            result.push(array[i]);
        }
    }
    return result;
    
}



function test1(){
    let arr = [];
    let array = flatten(arr,Infinity);
    if(array.length == 0){
        console.log("Test case passed for emplty array");
    }else {

    }
}

function test2(){
    let arr = [[0, [7,8,1]], [2, 3], [4, 5]];
    let array = flatten(arr,Infinity);
    if(array.length == 0){
        console.log("Test case passed for emplty array");
    }else {
        throw Error("Expeted empty array");
    }
}

test1();
 //console.log(flatten(arr,Infinity));