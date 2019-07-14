let array= [-20,70,30,40,-70]
console.log(bubblesort(array));

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