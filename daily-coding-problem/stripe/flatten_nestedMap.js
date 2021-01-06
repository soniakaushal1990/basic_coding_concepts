let nestedMap={
    "foo":"3",
    "bar":{
        "foo":"8",
        "baz":{
            "bag":2,
        }
    }
}

let results = {};
function flattenMap(nestedMap,parentKey){
    for(let [currKey,currValue] of Object.entries(nestedMap)){
        if(typeof currValue == 'object'){
            flattenMap(currValue,parentKey+currKey+".");
        }else{
            results[parentKey+currKey]=currValue;

        }
    }
    return results;
}


var flattenMap =  (nestedMap,parentKey)=>{
    for(let [currKey,currValue] of Object.entries(nestedMap)){
        if(typeof currValue == 'object'){
            flattenMap(currValue,parentKey+currKey+".");
        }else{
            results[parentKey+currKey]=currValue;

        }
    }
    return results;
}

console.log(flattenMap(nestedMap,""));