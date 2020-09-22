console.log(partition([9, 12, 3, 5, 14, 10, 10],10));



/// Time complexity O(n) || Space O(1)
function partition(list,x){
    let i = 0;
    let j=0;
    let k =list.length-1;
    while(j < k){
        if(list[j] == x){
            j+=1;
        }else if(list[j] < x){
            swap(i,j,list);
            i+=1;
            j+=1;

        } else {
            swap(j,k,list);
            k-=1;
        }
        
    }

return list;
}


function swap(i,j,list){
    let temp = list[i];
    list[i]=list[j];
    list[j]=temp;
    console.log(list);
}