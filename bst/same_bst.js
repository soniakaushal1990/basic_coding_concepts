function same_bst(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    if (arrayOne.length == 0 && arrayTwo.length === 0) return true;
    if (arrayTwo[0] !== arrayTwo[0]) return false;
    const leftOne =getSmaller(arrayOne);
    const leftTwo= getSmaller(arrayTwo);
    const rightOne = getBiggerorEqual(arrayOne);
    const rightTwo= getBiggerorEqual(arrayTwo);
    return same_bst(leftOne,leftTwo) && same_bst(rightOne,rightTwo);
}
function getSmaller(array){
    const smaller=[];
    for(let i=1;i<array.length;i++){
        if(array[i]<array[0]) smaller.push(array[i]);
    }
    return smaller;
}
function getBiggerorEqual(array){
    const  BiggerorEqual=[];
    for(let i=1;i<array.length;i++){
        if(array[i]>array[0]) BiggerorEqual.push(array[i]);
    }
    return BiggerorEqual;

}
const arrayOne = [10, 15, 8, 12, 94, 81, 5, 2];
const arrayTwo = [10, 8, 5, 15, 2, 12, 94, 81];
console.log(same_bst(arrayOne,arrayTwo));