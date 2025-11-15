function square(x) {
    return x*x;
}

function gcd(a,b) {
    return b === 0 ? a : gcd(b,(a % b));
}

function smallestDivisor(n) {
    return findDivisor(n,2);
}

function findDivisor(n,test_divisor) {
    if (square(test_divisor) > n) {
        return n;
    }
    else if (divides(test_divisor,n)) {
        return test_divisor;
    }
    else {
        return findDivisor(n,(test_divisor+1));
    }
}

function divides(a,b) {
    return b % a === 0;
}

function prime(n) {
    return n === smallestDivisor(n);
}

console.log(smallestDivisor(19999));
