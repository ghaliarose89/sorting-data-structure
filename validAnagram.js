function isAnagram(s,t){
    if (s.length !== t.length) return false;
    const ht={};
    for (let i of s){
        ht[i]=ht[i]+1 ||1;
    };
    for (let key of t){
       if (ht[key]=== undefined) return false;
       if (ht[key]<1) return false;
       ht[key]--; 
    }
    return true;
}

let  s = "car"; let t = "cat";
console.log (isAnagram(s,t))