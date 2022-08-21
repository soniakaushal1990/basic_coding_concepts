function reverseWords(arr) {
    // a b ' ' c d
     
    reverse(arr,0,arr.length-1);
    
    // d c ' ' b a
    
    // First Iteration:
    // d   c     ' '    b     a
    //     i-1    i     i+1
    // reverse(arr, start=0, end=i-1)
    // c  d      ''     b     a
    //     i-1    i     i+1
     
    // | c d ' ' b a | 
    //        i       ^
     
    let start = 0
    for(let i=0;i<=arr.length;i++){
      
      // How could I extend this condition
      // to account for the boundary
      if(i == arr.length || arr[i] == ' ') {
        reverse(arr, start, i-1)
        start = i+1
      } 
     }
     
     // ["a"," "," ","b"]
     // ["b"," "," ","a"]
     // [ 'a', ' ', ' ', 'b' ]
     
     
     return arr;
   }
   
   //. a b c d
   
   // d c b a
   
   // a b => b a
   // a b c d => d c b a 
   // 0 1 2 3
   
   
   function reverse(arr, start, end) {
     while(start < end){   
      var inter = arr[start];
       arr[start]=arr[end];
       arr[end]=inter;
       start++;
       end--; 
     }
   }