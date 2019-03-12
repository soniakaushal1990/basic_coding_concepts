/*Print #
        ##
        ###
Using recursion
*/
function steps(n,row=0,stair=''){
    //base condition

    if(n === row) 
    { 
        return ; 
    }
    
    if(n === stair.length){
    //end of each iteration print the step
        console.log(stair);
    //call steps wit next set of arguments
        return steps(n,row+1);
    }
    if(stair.length <= row){
     //   console.log(row);
        stair= stair+'#';
    }
    else{
        stair+=' ';
    }
    steps(n,row,stair);


}
steps(4);
