/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    let hashMap = new Map()
    for(let i = 0; i< nums.length; i++){
        if(!hashMap.has(nums[i])){
            hashMap.set(nums[i],1)
        }else{
            hashMap.set(nums[i],(hashMap.get(nums[i]))+1)
        }
    }
    const sorted = new Map([...hashMap.entries()].sort((a, b) => b[1] - a[1]));

    const topK = [...sorted.keys()].slice(0, k).map(Number);
    
    return topK
    
};

//can run in with node or wrap in an html wrapper