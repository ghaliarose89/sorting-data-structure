function buble(arr){
    let temp;
    for (i=0; i<arr.length; i++){
        for (j=1; j<arr.length; j++){
            if (arr[j]> arr[j-1  ])
            {
                temp = arr[j];
                arr[j]=arr[j-1];
               arr[j-1] = temp;

               }
        }
    return arr;  
       
    }
};
const arr= [8,2,4,1,3];
console.log(buble(arr));