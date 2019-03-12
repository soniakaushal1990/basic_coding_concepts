//Problem Statement
//Write a function that accepts a Postivi Number N
//The Function should console a step Name
//with N levels using the # charater
//Make sure step has spaces on the right side



function steps(n){
    console.log('steps'+'('+n+')');
    //for the row
    for(i=0;i<n;i++){
        var str='';
        for(j=0;j<n;j++){
            if(j<=i){
                 str = str + '#';
            }
            else{
                str = str + ' ';
                
            }
           
        }
        console.log(str);
        
    }
}
steps(4);
