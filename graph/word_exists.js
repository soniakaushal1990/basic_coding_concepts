// This problem was asked by Coursera.

// Given a 2D board of characters and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

// For example, given the following board:

// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]
// exists(board, "ABCCED") returns true, exists(board, "SEE") returns true, exists(board, "ABCB") returns false.

let board = [
      ['A','B','C','E'],
      ['S','F','C','S'],
      ['A','D','E','E']
    ];




function word_exists_in_board(board,word){
    let rows = board.length;
    let cols = board[0].length;
    let result = false;
        for(let i= 0; i< rows; i++){
            for(let j = 0; j< cols; j++){
                if(dfs(board,word,i,j,0)){
                    result = true;
                }
            }
        }  
        return result;  
}

function dfs(board,word,i,j,k) {
    let m = board.length;
    let n = board[0].length;
    if(i<0 || j<0 || i>=m || j>=n){
        return false;
    }
    if(board[i][j] == word.charAt(k)){
        let temp = board[i][j];
        board[i][j]='#';
        if(k==word.length-1){
            return true;
        }else if(dfs(board, word, i-1, j, k+1)
        ||dfs(board, word, i+1, j, k+1)
        ||dfs(board, word, i, j-1, k+1)
        ||dfs(board, word, i, j+1, k+1)){
            return true;
        }
        board[i][j]=temp;
    }
    console.log(board);
    return false;
}
  
 

console.log(word_exists_in_board(board,"ABCCED"));