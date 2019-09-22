// function createpatterns(n){
//     var arr = [n][n];
//     for(let i=0;i<n;i++){
//         for(let j=n-1;j>n-i;j--){
//             arr[i][j]="#";
//         }
//     }
//     console.log(arr);
// }
function stairCase(n) {
   var s = '';
   for(let i=1;i<=n;i++){
       //start from right
    //   s+= ' '.repeat(n-i)+ '#'.repeat(i) + '\n';
    //starts from left
       s+=  '#'.repeat(i)  + ' '.repeat(n-i) + '\n';
       s+=    ''
   }
   console.log(s);
}
  




stairCase(6);