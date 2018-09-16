// var arr = [
//     {
//         "_id": "5b4332a72cffa602ed85a975",
//         "item_id": "1531130535653",
//         "item_parent": "1531127882526",
//         "name": "child",
//         "cost_code": "00 00 00",
//         "is_leaf": true,
//         "is_cc_locked": false,
//         "contract_amount": 0
//     },
//     {
//         "_id": "5b4327c32cffa602ed85a8c0",
//         "item_id": "15311242851791",
//         "item_parent": "0",
//         "name": "General Conditions",
//         "cost_code": "00 00 00",
//         "is_leaf": false,
//         "is_cc_locked": false,
//         "contract_amount": 100
//     },
//     {
//         "_id": "5b4327c32cffa602ed85a8c1",
//         "item_id": "15311242851802",
//         "item_parent": "15311242851791",
//         "name": "Non-Reimbursable",
//         "cost_code": "00 00 01",
//         "is_leaf": false,
//         "is_cc_locked": false,
//         "contract_amount": 100
//     },
//     {
//         "_id": "5b4327c32cffa602ed85a8c2",
//         "item_id": "1531127443452",
//         "item_parent": "15311242851802",
//         "name": "kid",
//         "cost_code": "00 00 23",
//         "is_leaf": true,
//         "is_cc_locked": false,
//         "contract_amount": 100
//     },
//     {
//         "_id": "5b43284a2cffa602ed85a8cd",
//         "item_id": "1531127882526",
//         "item_parent": "15311242851791",
//         "name": "kid2",
//         "cost_code": "00 00 00",
//         "is_leaf": false,
//         "is_cc_locked": false,
//         "contract_amount": 0
//     }
//   ];

  var arr = [
    {'item_id':6 ,'item_parent' : 1},
    {'item_id':1 ,'item_parent' : 0},
    {'item_id':4 ,'item_parent' : 1}
];
  
    function unflatten(arr) {
      var tree = [],
          mappedArr = {},
          arrElem,
          mappedElem;
  
      // First map the nodes of the array to an object -> create a hash table.
      for(var i = 0, len = arr.length; i < len; i++) {
        arrElem = arr[i];
        mappedArr[arrElem.id] = arrElem;
        mappedArr[arrElem.id]['children'] = [];
      }
      console.log(mappedArr);
      for (var id in mappedArr) {
        if (mappedArr.hasOwnProperty(id)) {
          mappedElem = mappedArr[id];
          console.log(mappedElem);
          // If the element is not at the root level, add it to its parent array of children.
          if (mappedElem.item_parent == "0") {
            mappedArr[mappedElem['item_parent']]['children'].push(mappedElem);
           // console.log(mappedArr);
          }
          // If the element is at the root level, add it to first level elements array.
          else {
            tree.push(mappedElem);
          }
       }
      }
      return tree;
    }
  
  var tree = unflatten(arr);
  console.log(tree);