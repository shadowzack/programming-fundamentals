/* 169. Majority Element
Easy
Topics
Companies
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time and in O(1) space? */


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
 
    var dict = {};
    for(let i =0; i<nums.length;i++)
    {
        if(i===0){
            dict[nums[i]]=1
        }
        else{
          if(dict[nums[i]] !== undefined)
          {
             
              dict[nums[i]]=dict[nums[i]]+1;
          }
          else
          {
              dict[nums[i]]=1;
          }
        }

    }
    let max = 0;
    let maxkey =0;
    for(const [key, value] of Object.entries(dict)){
        console.log(key,value)

        if(value>max){
            max = value;
            maxkey=key;
        }
    }

    if(max>nums.length/2){
        return maxkey;
    }

};