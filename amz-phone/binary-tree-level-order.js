function level_Order(root){


    if(!root) return [];
    let queue = [root];
    let result = [];
    let level = 0;

    while(queue.length){
        let queueLength = queue.length;
        result.push([]);

        for(let i=0;i < queueLength;i++){
            let node = queue.shift();
          
            result[level].push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);

          
        }

        level+=1;

        

    }

    return result;


}
