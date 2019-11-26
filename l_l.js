function ListNode(val) {
     this.val = val;
     this.next = null;
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

     let l1_flipped_string =""

     for(let i = l1_hashmap.size-1 ; i >= 0; i--){
     
