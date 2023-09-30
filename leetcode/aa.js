/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  console.log(nums.length);
  let ptrEnd = nums.length - k;
  let ptrStart = 0;
  let temp = nums[ptrEnd];
  for (let i = 0; i < k; i++) {
    temp = nums[ptrEnd];
    nums[ptrEnd] = nums[ptrStart];
    nums[ptrStart] = temp;
    ptrStart++;
    ptrEnd++;
  }

  console.log(nums[ptrStart], nums[ptrEnd - 1]);
  let k2 = nums.length - 2 * k;
  /* if (nums.length % 2 === 0) ptrEnd = ptrEnd - k - 1;
  else */ ptrEnd = ptrEnd - k;

  console.log(k2, ptrEnd);
  for (let index = 0; index < k; index++) {
    temp = nums[ptrEnd];
    nums[ptrEnd] = nums[ptrStart];
    nums[ptrStart] = temp;
    ptrStart++;
    ptrEnd++;
  }
};

let nums = [1, 2, 3, 4, 5, 6, 7];
let nums2 = [1, 2, 3, 4, 5, 6, 7, 8,9,10,11];
rotate(nums, 3);
rotate(nums2, 3);
console.log(nums, nums2);
