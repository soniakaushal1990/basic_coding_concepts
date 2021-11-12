

//Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.

/**
 * 
 * Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
   Output: [[1,0,1],[0,0,0],[1,0,1]]
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    let R=matrix.length;
    let C = matrix[0].length;
    let rows = {};
    let cols={};
    
    for(let i=0;i<R;i++){
        for(let j=0;j<C;j++){
            if(matrix[i][j] == 0){
                rows[i]=true;
                cols[j]=true;
            }
            
        }
    }

    for(let i=0;i<R;i++){
        for(let j=0;j<C;j++){
            if(i in rows || j in cols){
               matrix[i][j]=0;
            }
            
        }
    }
    
    
    
};