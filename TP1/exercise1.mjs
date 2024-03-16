"use strict";

// no recursion
export function fibIt(n) {
    var i;
    let a=0,b=1;
    for (i=0; i<n;i++){
        let c=b;
        b=a+b;
        a=c;
    }
    return a
}

// recursive function
export function fibo_rec(n) {
    if(n===0 || n===1){
        return n
    }
    else{
        return fibo_rec(n-2)+fibo_rec(n-1)
    }
}

// use a loop
export function fibArr(t) {
    var i;
    for(i=0; i<t.length;i++){
        t[i]= fibo_rec(t[i])
    }
    return t
}

// no loop
export function fiboMap(t) {
    return t.map(fibo_rec)
}