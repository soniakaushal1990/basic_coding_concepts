

function getShortestUniqueSubstring(arr, str) {

    var map = {};
    var sLen = str.length;
    var tLen = arr.length;
    var count = tLen;
    var min = Number.MAX_SAFE_INTEGER;
    var head = 0;
    var left = 0;
    var right = 0;
  
    if (!sLen || !tLen) return '';
  
    for (var i = 0; i < tLen; i++) {
        
      if (map[arr[i]] === undefined) {
        map[arr[i]] = 1
      } else {
        map[arr[i]]++;
      }
    }

    console.log(map);
      
  
    
     while (right < sLen) {
        
        // Expand the window
        
      if (map[str[right]] !== undefined) {
        if (map[str[right]] > 0) count--;
        map[str[right]]--;
      }
  
      right++;
        
        
        // Contract the window
  
      while (count === 0) {
        if (right - left < min) {
          min = right - left;
          head = left;
        }
  
        if (map[str[left]] !== undefined) {
          if (map[str[left]] === 0) count++;
          map[str[left]]++;
        }
  
        left++;
      }
    }

    return min === Number.MAX_SAFE_INTEGER ? '' : str.substr(head, min);
    
  }
  
  console.log(getShortestUniqueSubstring(arr = ['x','y','z'], str = "xyyzyzyx"));