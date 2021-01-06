/**
 * Creates a new timeMap 
 * @class
 */
let TimeMap = function() {
    this.memory = {};
    
};

/** 
 * Sets the value and time stamp of a given key  
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  if (this.memory[key]) {
    this.memory[key].push({"timestamp": timestamp, "value": value});
  } else {
    this.memory[key] = [{"timestamp": timestamp, "value": value}];
  }
};

/** 
 * Function to get the value of a key at a given timestamp
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
  let values = this.memory[key];  
  console.log(values); 
  let output = "";
  if (!values) {
      return output;
  }
  
  
  if (values[values.length - 1].timestamp < timestamp) {
    output =  values[values.length - 1].value;
  } else if (timestamp >= values[0].timestamp) {
    output =  findLowerLimit(values, timestamp, 0, values.length - 1);
  }
  return output;
};



// recursive findlowerLimit
let findLowerLimit = function(values, timestamp, left, right) {
  if (right < left) {
    return values[right].value;
  }
  
  let middle = Math.floor((left + right) / 2);
  
  if (timestamp > values[middle].timestamp) {
    return findLowerLimit(values, timestamp, middle + 1, right);
  } else if (timestamp < values[middle].timestamp) {
    return findLowerLimit(values, timestamp, left, middle - 1);
  } else {
    return values[middle].value;
  }
};


// d.set(1, 1, 0) # set key 1 to value 1 at time 0
// d.set(1, 2, 2) # set key 1 to value 2 at time 2
// d.get(1, 1) # get key 1 at time 1 should be 1
// d.get(1, 3) # get key 1 at time 3 should be 2

let s = new TimeMap();
s.set(1,1,0);
s.set(1,2,0);
s.set(1,3,10);
console.log(s);
//console.log(s.get(1,0));
//console.log(s.get(1,9));




// //iterative findlowerLimit
//  let findLowerLimit = function(values, timestamp) {
//    if (values.length == 1) {
//      return values[0]["timestamp"] <= timestamp ? values[0]["value"] : ""; 
//    }
  
//    let low = 0;
//    let high = values.length - 1;
//    let middle = Math.floor((low + high) / 2);
//    while (low <= high) {
//      middle = Math.floor((low + high) / 2);
//      if (values[middle].timestamp < timestamp) {
//        low = middle + 1;
//      } else if (values[middle].timestamp > timestamp) {
//        high = middle - 1;
//      } else {
//        return values[middle].value;
//      }
//    }
//    let output = "";
//    if (values[middle].timestamp < timestamp) {
//      output =  values[middle].value;
//    } else if (middle - 1 >= 0) {
//      output =  values[middle - 1].value;
//    }
//    return output;
//  };
