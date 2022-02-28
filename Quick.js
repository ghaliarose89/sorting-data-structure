function quick(arr){
    if (arr.length===1)
    return arr;
    let pivet = arr[arr.length -1];
    let right= [];
    let left =[];
   for (let i=0; i<arr.length-1; i++){
       if( arr[i]< pivet)
       {
           left.push(arr[i])}
       else right.push(arr[i]);

   };
   if (left.length>0 && right.length>0){
       return [...quick(left) ,pivet,...quick(right)]
   }
   else if (left.length>0)
   return [...quick(left) ,pivet]

   else  return [pivet,...quick(right)]
};
const arr= [8,2,4,1,3];
console.log(quick(arr));