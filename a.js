var removeElement = function (nums, val) {
  let ptr1 = 0;
  let ptr2 = 0;
  let shift = 0;
  if (nums.length === 0) return 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      if (nums[i + 1] < nums.length) {
        if(shift===1)
        shift=0;
        else 
        shift=1;
        nums[i] = nums[i + 1];
        
      }
    } else {
      if (nums[i + 1] < nums.length) {
        if (shift === 1) {
          nums[i] = nums[i + 1];
          
        }
      }
    }
  }
};

let nums = [3, 2, 2, 3];

let k = removeElement(nums, 3);

console.log(k, nums);
