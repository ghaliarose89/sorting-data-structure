function selection(arr){
    for (let i =0; i<arr.length-1; i++){
        let minIndex = i;
        for (let j=i+1; j<arr.length; j++){
            
            if (arr[j]<arr[minIndex]){
                minIndex = j;
             
            }
        
        };
        let temp = arr[i];
        arr[i]=arr[minIndex];
        arr[minIndex]= temp;
        

    }
    return arr;
}
const arr= [8,2,4,1,3];
console.log(selection(arr));