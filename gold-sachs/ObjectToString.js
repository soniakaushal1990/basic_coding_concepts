// print all the values with , comma separated

const Employee = {
    "firstName" : "Rohan",
    "LastName" : "Gupta",
    "project" : {
       "id": "Project1",
       "name": "Hello Project",
       "location":{
           "state":"ABC",

       }
       
    }
 }

 function test(Employee,output){
    let array = Object.values(Employee);
    for(let i=0;i<array.length;i++){
        if(typeof array[i] === "object"){
            test(array[i],output);
        } else
        output.push(array[i]);
    }  
    return output;
}

console.log(test(Employee,[]));



var keys = {'key1':1,'key2':{'key3':2,'key4':3,'key5':{'key6':4}},
'key7':{'key8':28,'key9':9}

}, result = {};


function serialize(keys, parentKey){
    for(var key in keys){
        if(typeof keys[key] == "object"){
            console.log(parentKey+key+".");
            serialize(keys[key], parentKey+key+".");
           
        }else{
            result[parentKey+key] = keys[key];
        }
    }
}
serialize(keys, "");
console.log(result);



 
 
