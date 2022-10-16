var reverse = function(x) {
    let res = 0;
    let y = Math.abs(x);
    while(y > 0){
        res = res * 10 + y % 10;
        y = y / 10 | 0;
    }
    if(res > Math.pow(2, 31) + 1 || x < Math.pow(-2, 31)) return 0;
    return x > 0 ? res : -res;
};