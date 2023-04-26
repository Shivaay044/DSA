// Nth node from the end

function nth_node(head,n){
    let p = head
    let q = head
    for(let i=1;i<n;i++){
        q = q.next
    }
    
    while(q.next){
        p = p.next
        q = q.next
    }
    return p.data
}