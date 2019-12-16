
let array=[5,2,[7,-1],3,[6,[-13,8],4]];
console.log(product_sum(array));
function product_sum(array,multiplier=1){
    let sum=0;
    for(const elem of array){
        if(Array.isArray(elem)){
            sum+=product_sum(elem,multiplier+1);
        }
        else{
            sum+=elem;
        }
    }
    return sum*multiplier;

}