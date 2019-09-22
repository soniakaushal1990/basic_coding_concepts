let array= [-20,70,30,40,60,-70];
console.log("Selection sort");
console.log(selectionsort(array));
console.log("Bubble Sort ");
console.log(bubblesort(array));
console.log("Merge Sort");
console.log(mergesort(array));

function bubblesort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let swapelem = arr[j];
                arr[j]= arr[j+1];
                arr[j+1]=swapelem;
            }
        }
    }
    return arr;

}
function selectionsort(arr){
    for(var i=0;i<arr.length;i++){
        var indexofmin = i;
        for(var j=i+1;j<arr.length;j++){
            if(arr[j] < arr[indexofmin]){
                indexofmin = j;
            }
        }    
            if(indexofmin !== i){
               var  lesser = arr[indexofmin];
                arr[indexofmin]=arr[i];
                arr[i]=lesser;

            }
        
    }
    return arr;

}
function mergesort(arr){
    if(arr.length===1){
        return arr;
    }
    const center = Math.floor(arr.length/2);
    const left = arr.slice(0,center);
    const right = arr.slice(center);
    return merge(mergesort(left),mergesort(right));

}

//Join togehter two sorted array
function merge(left,right){
    const results=[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            results.push(left.shift());
        }else{
            results.push(right.shift());
        }
    }
    return [...results,...left,...right];
}