const array = [[4,2,4,2],
[4,null,4,2],
[2,null,8,2],
[16,null,4,null]];



function foo()  {
for(let y=0;y<3;y++){
    for(let x=0;x<3;x++){
         if(array[x+1][y] != null){
             if(array[x+1][y]== array[x][y]){
                 array[x][y]=array[x][y]*2;
                 array[x+1][y]=null;
             }
             if(array[x][y] == null){
                 array[x][y] = array[x+1][y];
                 array[x+1][y] = null;
             }

         }

    }
}
return array;
}
console.log(foo());
//console.log(array);
