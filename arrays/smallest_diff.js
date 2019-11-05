function smallest_diff(array1,array2){

    array1.sort((a,b)=>a-b);
    array2.sort((a,b)=>a-b);
    
    let idx1=0;
    let idx2=0;
    let smallest = Infinity;
    let current = Infinity;
    let smallest_pair = [];
    while(idx1<array1.length && idx2<array2.length){
        let first_num =array1[idx1];
        let second_num = array2[idx2];
        if(first_num<second_num){
            current = second_num-first_num;
            idx1++;
        }
        else if(second_num <first_num){
            current = first_num-second_num;
            idx2++;
        }
        else {
            return [first_num,second_num];
        }
        if(smallest>current){
            smallest=current;
            smallest_pair = [first_num,second_num];
        }
    }
    console.log(smallest_pair);
    return smallest_pair;
}


let array1=[-1,5,10,20,28,3];
let array2 = [26,134,135,15,17];
smallest_diff(array1,array2);
module.exports = smallest_diff;