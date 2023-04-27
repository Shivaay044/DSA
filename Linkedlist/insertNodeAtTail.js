const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
    let n = new LinkedListNode(data) 
    if(head===null){
        return n
    }
   let curr = head
   while(curr.next!==null){
       curr=curr.next
   }
  curr.next = n
  return head
}