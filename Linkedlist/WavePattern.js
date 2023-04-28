var checkWavePattern = function (head) {
    let curr = head 
    let type
    if(curr.data<curr.next.data){
        type = 1
    }else{
        type = 2
    }
    
    while(curr.next){
        if(type===1&&curr.data<curr.next.data){
            curr = curr.next
            type = 2
        }
        else if(type===2&&curr.data>curr.next.data){
            curr = curr.next
            type = 1
        }
        else return false
    }
    return true
 };