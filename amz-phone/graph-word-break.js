/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    
    let word_set = new Set(wordDict);
    let q = [];
    let visited = new Set();
    q.push(0);
    while(q.length){
        let start =q.shift();
        if(start in visited) continue;
         for (let end = start + 1; end <= s.length; end++) {
                if (word_set.has(s.substring(start, end))) {
                    q.push(end);
                    if (end == s.length) {
                        return true;
                    }
                }
            }
            visited[start] = true;
    }
    return false;
    
};