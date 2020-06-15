var arr = [-4 ,3, -9, 0, 4, 1];
function plusMinus(arr) {
    var positive_count=0;
    var negative_count = 0;
    var zero_count = 0
    var array_size = arr.length;
   // console.log(array_size);
    for(let i=0;i<array_size;i++){
        if(arr[i]>0){
            console.log(arr[i]);
            positive_count++;
        }
        else if(arr[i]==0){
            zero_count++;
        }
        else{
            negative_count++;
        }
    }
    var postive_ratio = positive_count/array_size;
    console.log(postive_ratio);
    var negative_ratio = negative_count/array_size;
    console.log(negative_ratio);
    var zero_ratio = zero_count/array_size;
    console.log(zero_ratio);


}
plusMinus(arr);



