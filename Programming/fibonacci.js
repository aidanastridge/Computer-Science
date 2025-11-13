
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

function multiply(a,b) {
    return b === 0 ? 0 :  multiply(a,(b-1)) + a;
}

function fib(n) {
    fibIter(1,0,0,1,n);
}

function fibIter(a,b,p,q,count) {
    if (count === 0) return 0;
    else if (count % 2 === 0) return fibIter(a,b,(p),(q),(count/2));
    else return fibIter(
        (multiply(b,q)+multiply(a,q)+multiply(a,p)),
        (multiply(b,p)+multiply(a,q)),
        p,
        q,
        (count-1)
    );
}