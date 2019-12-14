//Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands.
/*
    



*/
// Time O(n^2)   | Space O(1)
function insertion_sort(array){
    for(i=1;i<array.length;i++){
        let j=i;
        while(j>0 && array[j]<array[j-1]){
            swap(j,j-1,array);
            j-=1;
        }
    }
    return array;
}
function swap(i,j,array){
    let temp=array[j];
    array[j]=array[i];
    array[i]=temp;
}
let array=[8,5,2,9,5,6,3];
console.log(insertion_sort(array));