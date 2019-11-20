var twoSum = function(nums, target) {
    let x = new Map 
    let i
    for(i=0; i<nums.length; i++){
        x.set(nums[i],i)
    }
    for(i=0; i<nums.length; i++){
        let compliment = target-nums[i]
        if(x.has(compliment)&&x.get(compliment)!=i){
            let y = x.get(compliment)
