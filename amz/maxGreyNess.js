// https://leetcode.com/discuss/interview-question/2444498/Amazon-OA-INDIA-(AUG-2022)


function maxGreyNess(pixels){

    let pixelsArray = [];
    for(let i=0; i < pixels.length; i++){
        let res = pixels[i].split('');
        pixelsArray.push(res);
    }

    let maxGreyNess = 0;
    let rowsLength = pixelsArray.length;
    let colLength = pixelsArray[0].length;
    let Oinrows = new Array(rowsLength).fill(0);
    let Oincolumns = new Array(colLength).fill(0);

    for(let i = 0 ; i < rowsLength ; i++){
        for(let j = 0 ; j < colLength ; j++){
            if(pixelsArray[i][j] == '0') {
               Oinrows[i]++;
               Oincolumns[j]++;
            }
        }
    }
    
    for(let i = 0; i < Oinrows.length ; i++) {
        for(let j=0 ; j < Oincolumns.length ; j++){
              let oneIncurrRow = rowsLength - Oinrows[i];
              let oneIncurrColumn = colLength - Oincolumns[j];
              let currGreyNess = (oneIncurrRow + oneIncurrColumn) - (Oinrows[i] + Oincolumns[j]);
              maxGreyNess = Math.max(currGreyNess,maxGreyNess);
        }
    }

    return maxGreyNess;
    
}

pixels = ["101","001","110"];

console.log(maxGreyNess(pixels));