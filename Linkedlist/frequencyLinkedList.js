const LinkedListNode = class {
    constructor(nodeData, frequency) {
        this.data = nodeData;
        this.frequency = frequency;
        this.next = null;
    }
};
// Complete the function below
function frequencyLinkedList(arr, n){
    
    let dummy = new LinkedListNode(-1) 
    let curr = dummy
    
    let obj = {}
    for(let el of arr){
        obj[el] = obj[el]+1||1
    }
    
    console.log(obj)
    
   for(let el in obj){
        curr.next = new LinkedListNode(el,obj[el])
        curr= curr.next
    }
    
 return dummy.next 
}
