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




 
 
