function equi(arr){
    let n = arr.length;
    for (i = 0; i < n; ++i)  
    {      
        
        /* get left sum */
        leftsum = 0; 
        rightsum=0; 
        for (j = 0; j < i; j++) 
            leftsum += arr[j]; 
  
        /* get right sum */
        rightsum = 0;  
        for (j = i + 1; j < n; j++) 
            rightsum += arr[j]; 
  
        /* if leftsum and rightsum   
        are same, then we are done */
        if (leftsum == rightsum) 
            return i;
    } 
  
    /* return -1 if no equilibrium  
    index is found */
    return -1; 
}
console.log(equi([-1,3,-4,5,1,-6,2,1]));