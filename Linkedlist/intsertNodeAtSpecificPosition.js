const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below
    
function insertNodeAtPosition(head, data, position) {

  let n = new LinkedListNode(data)
   if(position===0){
        n.next = head
        return n
    }
    
  let curr = head
  let c = 1
  while(curr.next){
      if(c==position){
          break;
      }
     curr = curr.next
     c++
  }
 
 temp = curr.next
 curr.next = n
 n.next = temp
 return head
}