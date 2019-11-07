let string = 'Sonia Kaushal ';
var hash={};
var new_string = []; 
for(i=0;i<string.length;i++){
    let elem= string[i];
    if(elem in hash){
        hash[elem] = true;
    }
    else {
        hash[elem] = true;
        new_string+=elem;
    }
}
console.log(new_string);