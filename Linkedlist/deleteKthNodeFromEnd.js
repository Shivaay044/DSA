//Delete Kth node from end

//1st Approach using Length

function deleteKthNodeFromEnd(head,k){
    let curr = head
    let len = 0
    while(curr!==null){
        curr = curr.next
        len++
    }
  len = len - k + 1
  curr = head
  let prev=null
  let i = 1
 for(let i=1;i<len;i++){
      prev = curr
      curr = curr.next
  }
  if(prev === null){
     head = head.next
     return head
 }else {
        prev.next = prev.next.next;
        return head;
    }
}


// 2nd Approach without using length (Navie Approach)

function deleteKthNodeFromEnd(head,k){
    let curr = head
    let len = 0
    
      let p = head
      let q = head
      for(let i=1;i<k;i++){
          q=q.next
      }
      let prev = null
    while(q.next!==null){
        prev = p
        p = p.next
        q = q.next
    }
  if(prev===null){
      head = head.next
      return head
  }else{
      prev.next = prev.next.next
      return head
  }
}