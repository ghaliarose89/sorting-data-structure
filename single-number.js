function singleNumber (arr){
    const hm={};
    for (let i of arr){
        hm[i]=hm[i]+1||1;
    
    }
    for (let key in hm){
        if (hm[key]=== 1)
     return key;
    }
}
const nums = [2,3,3,1,5,5];
console.log(singleNumber(nums));