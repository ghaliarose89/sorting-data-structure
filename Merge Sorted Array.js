function mergeSortedArray(num1,n,num2,m){
if (n===0)
return num2
if (m===0) return num1;

let last = num1.length-1;
while (m > 0 && n > 0){
if (num1[n-1]>num2[m-1]){ 
    num1[last] = num1[n-1]
    m=m-1
}
else
 {num1[last] = num2[m-1];
    n= n-1;
}
last = last-1;
}

while (m>0){
    num1[last] = num2[n-1];
    last = last-1;
    m = m-1;

}

}