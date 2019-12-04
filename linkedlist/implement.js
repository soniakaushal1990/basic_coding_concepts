const LinkedList = require('./index').LinkedList;
//const midpoint =  require('../linkedlist/index').midpoint;


 //const node = new Node(18);
 const list = new LinkedList();
 //list.head = node;
 list.insertFirst(16,list.head);
 list.insertFirst(15,list.head);
// list.insertFirst(18,list.head);
//console.log(list);
//console.log(list.size());
//list.getFirst();
//console.log(list.getLast());
//list.clear();
//list.removeFirst();
//console.log(list.removeLast());
//const nodelast = 30;
//list.inserLast(nodelast);
//console.log(list.getAt(1));
//list.removeAt(0);
const node2 = 17;
list.insertAt(node2,1);
//console.log(list);
list.midpoint();
