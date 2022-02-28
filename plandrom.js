var isPalindrome = function(x) {
    if (x === 0) return true ;
    if(x <0) return false;

    let div = 1;
    let right =0;
    let left = 0;
   while (x >= div*10)
       div *= 10;
    
   while (x)
   { right = Math.floor(x % 10);
    left = Math.floor(x/div);
    if (right != left) return false;
    x = Math.floor((x % div)/10);
    div = div/100;
    return true;}
};

let y = 1000021;
 
console.log(isPalindrome(y));