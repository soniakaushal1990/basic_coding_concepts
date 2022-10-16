function zigZag (root){
    if(!root) return [];
    let results = [];
    let queue = [root,null];
    let isOrderLeft = true;

    let currLevel = [];

    while(queue.length){

        let curr = queue.shift();

        if(curr){

            if(isOrderLeft) currLevel.push(curr.val);
            else currLevel.unshift(curr.val);

            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);

        }else{


             // Finish One level

             results.push(currLevel);
             if(queue.length > 0) results.push(null);

             // prepare for next level

             currLevel = [];
             isOrderLeft = ! isOrderLeft;

        }

    }

    return results;
}