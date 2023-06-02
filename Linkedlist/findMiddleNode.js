const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var middleNode = function(head) {
  
  let s = head
  let f = head
  
  while(f&&f.next){
      s = s.next
      f = f.next.next
  }
  
  return s.data
  
   
};
