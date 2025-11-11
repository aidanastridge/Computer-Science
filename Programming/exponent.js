function square(x) {
    return x*x;
}

function expt(b,n) {
    return n === 0 ? 1 : (b * expt(n-1));
}

function expt(b, n){
    return exptIter(1, 1, n );
}

function exptIter(b, counter, product) {
    return counter === 0 ? product : exptIter(b, counter - 1, b * product);
}

function fastExpt(b,n) {
    if (n===0) {return 1;}
    else if (n % 2 === 0) {return square(fastExpt(b,n/2));}
    else {return b * fastExpt(b,(n-1));}
}

function evenCheck(n) {
    return n % 2 === 0;
}