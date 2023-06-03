const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var removeMinimum = function (head) {
        if(head==null){
            return null ;
        }
        let max=head;
        let prev=null;
        let node =head;
        while(node.next !=null){
            if(node.next.data <=max.data){
                max=node.next;
                prev=node;
            }
            node=node.next
        }
        if(max==head){
            head=head.next
        }else{
            prev.next=max.next
        }
        return(head)
}; 
