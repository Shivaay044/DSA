var isPalindrome = function (head) {
    
    let a = ""
    let curr = head
    while(curr){
        a+=curr.data
        curr = curr.next
    }
    
    let b = ""
    curr = head
    prev = null
    while(curr){
        let nx = curr.next
        curr.next = prev
        prev = curr
        curr = nx
    }
    
    let curr1 = prev
    while(curr1){
        b+=curr1.data
        curr1 = curr1.next
    }
    if(a==b){
        return true
    }else{
        return false
    }
};
