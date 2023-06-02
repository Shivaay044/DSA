const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var reversePair = function (head) {
    let dummy = new LinkedListNode(0,head)
    let prev = dummy
    let curr = head
    
    while(curr && curr.next){
        //save ptrs
        let nxtPair = curr.next.next
        let second = curr.next
        
        //reverse it
        second.next = curr
        prev.next = second
        curr.next = nxtPair
        
        //update ptrs
        prev =curr
        curr = nxtPair
    }
   return dummy.next
};
