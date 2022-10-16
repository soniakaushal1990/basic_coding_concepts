var intToRoman = function(num) {
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];   
    let symbols= ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let sb=[];
    for(let i=0;i<values.length && num>0;i++){
        while(values[i] <= num){
            num -= values[i];
            sb.push(symbols[i]);
        }
    }
    return sb.join('');
};