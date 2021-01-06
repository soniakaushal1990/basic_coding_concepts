let screen = [[1, 1, 1, 1, 1, 1, 1, 1], 
[1, 1, 1, 1, 1, 1, 0, 0], 
[1, 0, 0, 1, 1, 0, 1, 1], 
[1, 2, 2, 2, 2, 0, 1, 0], 
[1, 1, 1, 2, 2, 0, 1, 0], 
[1, 1, 1, 2, 2, 2, 2, 0], 
[1, 1, 1, 1, 1, 2, 1, 1], 
[1, 1, 1, 1, 1, 2, 2, 1]];
let x= 4;
let y=4
let newC=3;
let M = screen.length;
let N = screen[0].length;
function floodFill(screen,x,y,newC){
    let prevC = screen[x][y];
    floodFillHelper(screen,x,y,prevC,newC);
    
}

function floodFillHelper(screen,x,y,prevC,newC){
    if(x<0 || x>=M || y<0 || y>=N || screen[x][y] != prevC || screen[x][y] === newC) return;

    screen[x][y]= newC;
    floodFillHelper(screen,x+1,y,prevC,newC);
    floodFillHelper(screen,x-1,y,prevC,newC);
    floodFillHelper(screen,x,y+1,prevC,newC);
    floodFillHelper(screen,x,y-1,prevC,newC);
}

floodFill(screen,x,y,newC);

console.log(screen);