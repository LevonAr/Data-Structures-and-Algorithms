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

var addTwoNumbers = function(l1, l2) {
     let l1_hashmap = new Map
     let l1_digit_counter = 0
     for(let ptr = l1; ptr != null; ptr = ptr.next){
        l1_hashmap.set(l1_digit_counter, ptr.val)
        l1_digit_counter ++ 
     }    

        
     let l2_hashmap = new Map
     let l2_digit_counter = 0
     for(let ptr = l2; ptr != null; ptr = ptr.next){
        l2_hashmap.set(l2_digit_counter, ptr.val)
        l2_digit_counter ++ 
     }    
