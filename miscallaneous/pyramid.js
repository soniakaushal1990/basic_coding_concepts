/*
Print Pyramid(1)
    '#'
Pyramid(2)
'#'
'###'
Pyramid(3)
'#'
'###'
'#####'
    0   1   2
0       *   
1   *   *   *
2   *   *   *
*/
function pyramid(n){
    const midpoint = Math.floor((2*n-1)/2);
    console.log(midpoint);
    for(i=0;i<n;i++){
        let level = '';
        for(j=0;j<2*n-1;j++){
            if(midpoint-i<=j  && midpoint+i>=j){
               // console.log('mid point -i is'+midpoint-i);
                //console.log('j is'+j);
                    level+='#';
            }
            else{
                level+=' ';
            }
        }
        console.log(level);
    }

}
pyramid(2);

