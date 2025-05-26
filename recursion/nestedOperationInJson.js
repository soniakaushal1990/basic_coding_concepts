let operation = {
    'operation':"ADD",
    'inputs':[
        {
            operation : "Const_value",
            value : 20,
        },
        {
            operation : "ADD",
            inputs: [
                {
                    operation : "Const_value",
                    value : 20,
                },
                {
                    operation : "Const_value",
                    value : 10,
                }
            ]
        }
    ]
}



function evaluateOperation(opNode){
    switch (opNode.operation.toUpperCase()) {
        case 'CONST_VALUE':
            return opNode.value;

        case 'ADD':
            return evaluateOperation(opNode.inputs[0]) + evaluateOperation(opNode.inputs[1]);

        case 'SUBTRACT':
            return evaluateOperation(opNode.inputs[0]) - evaluateOperation(opNode.inputs[1]);

        // You can add more operations like MULTIPLY, DIVIDE here.
        default:
            throw new Error(`Unsupported operation: ${opNode.operation}`);
    }

}

console.log(evaluateOperation(operation));