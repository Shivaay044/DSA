var addOneToLinkedList = function(head) {
    
    
    let curr = head
    let prev = null
    while(curr){
        let nx = curr.next
        curr.next = prev
        prev = curr
        curr = nx
    }


 let temp = prev
 let carry=0
 while(temp!==null){
    carry=0
     if(temp.data==9){
         temp.data = 0
         carry = 1
     }else{
         temp.data++
         break;
     }
     temp = temp.next
 }
 
let newnode = new LinkedListNode(carry)
if(carry){
    newnode.next = head 
}


let act= prev
let bck = null
while(act!==null){
let nx = act.next
act.next = bck
bck = act
act = nx
}


return carry ? newnode : head

};
