
// Refer to the image => src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/RGIF2.gif"

function reverse(head) {
    let prev = null
     let curr = head
     while(curr){
         let nx = curr.next
         curr.next = prev
         prev = curr
         curr = nx
     }
     
     return prev   
  }