var majorityElement = function(nums) {
    let hm ={};
   
    for (const num of nums)
        {hm[num] =hm[num]+1 || 1;
        };
        //console.log("for of =",hm)
         
    for (const key in hm) {
      
        if (hm[key]>Math.floor(nums.length/2))
            return key;
    }
   

};

const nums = [2,2,1,1,1,2,2];
console.log(majorityElement(nums));
// let hm={};
// itrate through hash table
//  for (const i in nums){
    
//      console.log (`${i} ${nums[i]}`)
// }

// const digits = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9,10,121,12,10000,12];
// //console.log(digits[11]);
// const ht={}
// for (const index of digits) {
    
//   console.log(digits[index]);
// }