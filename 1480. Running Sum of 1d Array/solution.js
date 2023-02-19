var runningSum = function(nums) {
    let solArr = [];
    let count = 0;
    for (i = 0; i < nums.length; i++) {
        count += nums[i];    
        solArr.push(count);
    }
    return solArr;
};

let test1 = [1,2,3,4]
let test2 = [1,1,1,1,1]
let test3 = [3,1,2,10,1]

console.log(runningSum(test1));
console.log(runningSum(test2));
console.log(runningSum(test3));

