var containsDuplicate = function(nums) {
    const ht={};
    for (let i of nums){
        ht[i]=ht[i]+1 ||1;
    }
    for (let key of nums){
      
        if (ht[key]>1) return true;
        //console.log(ht[key])
    }
    return false;
};
const nums = [1,2,3];
console.log(containsDuplicate(nums));