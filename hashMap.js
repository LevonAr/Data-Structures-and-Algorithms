var twoSum = function(nums, target) {
    let x = new Map 
    let i
    for(i=0; i<nums.length; i++){
        x.set(nums[i],i)
    }
