class Linked_List {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(element){
        if(this.head==null){
            this.head = new ListNode(element)
            console.log(this.head, this.size)
            this.size ++
        }
        else{
            let Ptr = this.head
            while (Ptr.next) { 
                Ptr = Ptr.next; 
            } 
            console.log(Ptr, this.size)                        
            Ptr.next = new ListNode(element) 
            console.log(Ptr, this.size)            
            this.size ++
        }
    }
}
    
