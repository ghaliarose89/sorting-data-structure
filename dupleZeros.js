var duplicateZeros = function (arr) {
    //let temp = 0;

    for (let i = 0; i < arr.length; i++) {
        
            arr.splice(i, 0, 0);
        

    }
    return arr;
};

const arr = [1, 0, 2, 3, 0, 4, 5, 0];
//console.log(duplicateZeros(arr));
// arr.splice(1,0,0);
// console.log(arr);