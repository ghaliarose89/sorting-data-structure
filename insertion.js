function sortingArr (arr){
    let current, j;
for (let i=1; i<arr.length; i++){
    current = arr[i];
    j=i-1;
    while(j>=0 && arr[j]>current){
        arr[j+1] = arr[j];
        j--;
    };
    arr[j+1]= current;
};
return arr;
};

const arr= [8,2,4,1,3];
console.log(sortingArr(arr));