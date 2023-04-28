var evenOddMix = function (head) {
    let curr = head
    let len = 1
    while(curr!==null){
        if(curr.data%2===1&&len%2===0){
            curr = curr.next
        }
        else if(curr.data%2===0&&len%2==1){
            curr = curr.next
        }
        else return false
        len++
    }

   return true
};
