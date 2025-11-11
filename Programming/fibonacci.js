
function fibonacci(n) {
    if (n == 0) {return 0;}
    else if (n == 1) {return 1;}
    else {return fibonacci(n-1)+fibonacci(n-2)}
}

function fibonacci(n) {
    return fibIter(1,0,n);
}

function fibIter(a,b,count) {
    return count === 0 ? b : fibIter((a+b),a,(count-1));
}

console.log(fibonacci(4));