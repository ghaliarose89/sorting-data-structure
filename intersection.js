function intersection(arr1, arr2){
    const res= new Set ();
    const set1 = new Set (arr1);
    const set2 = new Set (arr2);
    for (let ele of set1){
      if (set2.has(ele)){
        res.add (ele);
      }
      XMLHttpRequestc
    }return res;
  };
 
  const array1 =[1, 2, 3, 4];
  const array2 = [3, 4, 5, 6];
  console.log(intersection(array1,array2))