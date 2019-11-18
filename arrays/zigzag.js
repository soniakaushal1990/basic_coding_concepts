
//TIme O(n) and space complexity O(1) where n is total no of elements in 2d array;
function zigzagTraverse(array) {
    let row=0;
    let col=0;
    let heigth=array.length-1;
    let width=array[0].length-1;
    let goingDown=true;
    let resultArray=[];
    while(!OutofBounds(row,col,height,width)){
        resultArray.push(array[row][col]);
        if(goingDown){
            if(col==0 || row == height){
                goingDown=false;
                if(row == height){
                    col++;
                }
                else{
                    row++;
                }

            }
            else{
                row--;
                col++;
            }

        }
        else{
            if(row==0 || col == width){
                goingDown=true;
                if(col=== width){
                    row++
                }
                else{
                    col++;

                }
            }
            else{
                col--;
                row++;

            }

        }
        
    }

}


function OutofBounds(row,col,height,width) {
   return row <0 || row > height|| col<0 || col > width;
}
let array=[
    [1,3,4,10],
    [2,5,9,11],
    [6,8,12,15],
    [7,13,14,16]
]
console.log(zigzagTraverse(array));
module.exports = zigzagTraverse;