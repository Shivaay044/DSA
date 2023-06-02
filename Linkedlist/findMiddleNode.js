const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function deleteNode(head, p) {
 
 if(p==0){
     head = head.next
     return head
 }
 
 let prev = null
 let c = 1
 let curr = head
 while(curr.next){
    if(c==p+1){
        prev.next =  curr.next
        break;
    }
    prev = curr
    curr = curr.next
    c++
 }
 
 return head
 
}