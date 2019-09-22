


 async function minmax(array) {
   
    var sum =0;
    for(let i=0;i<array.length;i++){
        if(i==0){
            var min = array[i];
            var max =array[i];
        }
        sum+=array[i];
        if(array[i]<min) 
        min = array[i];
        else if(array[i]>max)
        max = array[i];
    }
 //   console.log(min);
   console.log(`${sum-max} ${sum-min}`);
    
}
minmax();
   