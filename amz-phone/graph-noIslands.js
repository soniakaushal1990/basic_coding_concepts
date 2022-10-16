var numIslands = function(grid){
    
    const nr = grid.length;
    const nc = grid[0].length;
    let countIslands = 0;
    
    var dfs = function(grid,r,c){
        if(r < 0 || c < 0 || r >= nr || c >= nc || grid[r][c] == '0') return;
        
        grid[r][c]= '0';
        dfs(grid,r,c-1);
        dfs(grid,r,c+1);
        dfs(grid,r+1,c);
        dfs(grid,r,c+1);
        
    }
      
    for(let i = 0 ; i < nr ; i++){
        for(let j = 0; j < nc ; j++){
            
            if(grid[i][j] == '1')
            countIslands++;
            dfs(grid,i,j);
        }
    }
    
    return countIslands;
    
    
}