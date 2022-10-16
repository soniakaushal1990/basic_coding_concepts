function floodFill(image,x,y,newC){
    let prevC = image[x][y];
    floodFillHelper(image,x,y,prevC,newC);
    return image;
}

function floodFillHelper(screen,x,y,prevC,newC){
    if(x<0 || x>=screen.length || y<0 || y>=screen[0].length || screen[x][y] != prevC || screen[x][y] === newC) return;

    screen[x][y]= newC;
    floodFillHelper(screen,x+1,y,prevC,newC);
    floodFillHelper(screen,x-1,y,prevC,newC);
    floodFillHelper(screen,x,y+1,prevC,newC);
    floodFillHelper(screen,x,y-1,prevC,newC);
}