
var arr = [
  {
      "_id": "5b4332a72cffa602ed85a975",
      "item_id": "1531130535653",
      "item_parent": "1531127882526",
      "name": "child",
      "cost_code": "00 00 00",
      "is_leaf": true,
      "is_cc_locked": false,
      "contract_amount": 0
  },
  {
      "_id": "5b4327c32cffa602ed85a8c0",
      "item_id": "15311242851791",
      "item_parent": "0",
      "name": "General Conditions",
      "cost_code": "00 00 00",
      "is_leaf": false,
      "is_cc_locked": false,
      "contract_amount": 100
  },
  {
      "_id": "5b4327c32cffa602ed85a8c1",
      "item_id": "15311242851802",
      "item_parent": "15311242851791",
      "name": "Non-Reimbursable",
      "cost_code": "00 00 01",
      "is_leaf": false,
      "is_cc_locked": false,
      "contract_amount": 100
  },
  {
      "_id": "5b4327c32cffa602ed85a8c2",
      "item_id": "1531127443452",
      "item_parent": "15311242851802",
      "name": "kid",
      "cost_code": "00 00 23",
      "is_leaf": true,
      "is_cc_locked": false,
      "contract_amount": 100
  },
  {
      "_id": "5b43284a2cffa602ed85a8cd",
      "item_id": "1531127882526",
      "item_parent": "15311242851791",
      "name": "kid2",
      "cost_code": "00 00 00",
      "is_leaf": false,
      "is_cc_locked": false,
      "contract_amount": 0
  }
];

  function get_subcon_sov_tree(arr) {
    var tree = [],
        mappedArr = {},
        arrElem,
        mappedElem;

  //map all lineitems with children empty array
    for(var i = 0, len = arr.length; i < len; i++) {
      arrElem = arr[i];
      mappedArr[arrElem.item_id] = arrElem;
      mappedArr[arrElem.item_id]['children'] = [];
    }
  
    //iterate the object
    for (var item_id in mappedArr) {
      if (mappedArr.hasOwnProperty(item_id)) {
        mappedElem = mappedArr[item_id];
        // If not root level
        if (mappedElem.item_parent != "0") {
          mappedArr[mappedElem['item_parent']]['children'].push(mappedElem);
        //  console.log(mappedArr);
        }
        // If root node 
        else {
          tree.push(mappedElem);
        }
      }
    }
    return tree;
  }

var treestructure = get_subcon_sov_tree(arr);
console.log(JSON.stringify(treestructure));