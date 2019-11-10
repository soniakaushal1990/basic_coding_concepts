function sub_array_sort(array){

    let minOutofOrder = Infinity;
    let maxOutoOrder=-Infinity;
    for(let i=0;i<array.length;i++){
        let num = array[i];
        if(isNumOutOfOrder(i,num,array)){
            minOutofOrder = Math.min(minOutofOrder,num);
            maxOutoOrder = Math.max(maxOutoOrder,num);

        }
    }
    if(minOutofOrder == Infinity){
        return [-1,-1];
    }
    
    let subarrayLeftidx = 0;
    while (minOutofOrder>array[subarrayLeftidx]){
                subarrayLeftidx++;
    }
    let subarrayRigthidx = array.length-1;
    while (maxOutoOrder<array[subarrayRigthidx]){
        subarrayRigthidx--;
    }
    return[subarrayLeftidx,subarrayRigthidx];
     

}

function isNumOutOfOrder(i,num,array){
    if(i==0) return num>array[i+1];
    else if(i==array.length-1) return num < array[i-1];
    else
    return num > array[i+1] || num < array[i-1];

}
exports.sub_array_sort = sub_array_sort;


let array =[1,2,4,5,10,11,7,12,6,7,11,18,19];
console.log(sub_array_sort(array));
module.exports = sub_array_sort;

