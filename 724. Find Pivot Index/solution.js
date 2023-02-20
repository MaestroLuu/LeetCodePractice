var pivotIndex = function(nums) {
    let sum1 = 0;
    let sum2 = nums.reduce((cV, pV) => cV + pV, 0);
    
    for (i = 0; i < nums.length; i++){
        if (sum1 === (sum2 - sum1 - nums[i])) return i;
    sum1 += nums[i];
    }
    return -1;
};

let test1 = [1,7,3,6,5,6]
let test2 = [1,2,3]
let test3 = [2,1,-1]

console.log(pivotIndex(test1));
console.log(pivotIndex(test2));
console.log(pivotIndex(test3));