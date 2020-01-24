function merge_sort(array){
    if( array.length<2){
        return array
    }
    
    const middle = Math.floor(array.length/2)

    const left = array.slice(0,middle)

    const right = array.slice(middle)

    return merge( merge_sort(left) , merge_sort(right))
}    

function merge(left, right){
    let sorted_array =[]

    let left_index = 0
    
    let right_index = 0

    while((left_index<left.length) && (right_index<right.length)){
        if(left[left_index]<right[right_index]){
            sorted_array.push(left[left_index])
            left_index++
        }
        else{
            sorted_array.push(right[right_index])
