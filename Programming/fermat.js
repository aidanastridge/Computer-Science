function square(x) {
    return x*x;
}

function even(n) {
    return n % 2 === 0;
}

function expmod(base,exp,m) {
    if (exp === 0) {return 1;}
    else if (even(exp)) {
        return square(expmod(base,(exp/2),m)) % m;
    }
    else {
        return (base * expmod(base,(exp-1),m)) % m;
    }
} 

function fermatTest(n) {
    function tryIt(a) {
        return expmod( a, n, n) === a;
        }
        return tryIt(Math.floor(Math.random() * (n - 1)) + 1);
}

function fastPrime(n, times) {
    if (times === 0) {
        return true;
    }
    else if (fermatTest(n)) {
        return fastPrime(n,(times - 1));
    }
    else {
        return false;
    }

}

