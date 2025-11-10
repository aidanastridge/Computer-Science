
let x = 2;
let y = x**x;

function square(x) {
    return x**2;
};

square(2) + square(4);

function sumOfSquares(x,y) {
    return square(x) + square(y);
}

sumOfSquares(2,4);

function f(a) {
    return sumOfSquares(a*2,a*1);
}

sumOfSquares(6,10);

sumOfSquares(5+1,5*2);

//Absolute value function
function abs(x) {
    if (x>0) {
        return x;
    }
    else if (x==0) {
        return 0;
    }
    else {
        return -x;
    }
}

//Absolute value function
function abs(x) {
    if (x<0) {
        return -x;
    }
    else {
        return x;
    }
}

//Absolute value function
function abs(x) {
    return x < 0 ? -x:x;
}

function and(x) {
    return (x >5 && x < 10) ? 'Between 5 and 10': 'Not between 5 and 10';
}

function a(x) {
    return 3;
}

function b(a) {
    return a + 1;
};

function c(a,b) {
    return (b > a && b < (a*b)) ? b:a;
}

function d(a,b) {
    if( a == 4 ) return 6;
    else if( b == 4 ) return 6 + 7 + a;
    else return 25;
}

function e(a,b) {
    return (a > b ? b:a) + 2;
}

x = 0;
function f(a,b) {
    if(a>b) x = a;
    else if(a<b) x = b;
    else x = -1;
    return x * (a + 1);
}

function f(a,b) {
    let x;

    if(a>b) x = a;
    else if(a<b) x = b;
    else x = -1;

    return x * (a + 1);
}

(4+ 5+ (2-(3-(6+(4/5)))))/(3*(6-2)*(2-7));

function g(a, b, c) {
    if (b > a && c > a) {
        return (b**2) + (c**2);
    }
    else if (a > b && c > b) {
        return (a**2) + (c**2);
    }
    else {
        return (a**2) + (b**2);
    }
}

function g(a,b,c) {
  return (a**2) + (b**2) + (c**2) - (Math.min(a,b,c)**2);
}

function g(a,b,c) {
  return (a**2) + (b**2) + (c**2) - (Math.min(a,b,c)**2);
}

const g = (a,b,c) => {a*a + b*b + c*c - Math.min(a,b,c)**2}

function aPlusAbsB(a,b){
    const op = b > 0 ? ((x, y) => x + y) : ((x, y) => x - y);
    return op(a,b);
}

function test(x,y) {
    x == 0 ? 0:y;
}

function p(x) {
    
}

test(0,p());

function sqrt(x) {
    return x**(1/2);
}


// Newton 
function square(x) {
    return x*x;
};

function abs(x) {
    return x < 0 ? -x:x;
}

function sqrt(x){
    return sqrtIter(1,x);
}

function sqrtIter(guess, x) {
    return goodEnough(guess,x) ? guess : sqrtIter(improve(guess,x),x);

}

function goodEnough(guess,x) {
    return abs(square(guess)-x) < 0.001;
}

function improve(guess,x) {
    return average(guess,(x/guess));
}

function average(x,y){
    return (x+y)/2;
}

//
function newIf(predicate, then_clause, else_clause) {
    return predicate ? then_clause: else_clause;

}

newIf((2==3),0,5);
newIf((3==3),0,5);

function sqrtIter(guess,x) {
    return newIf(goodEnough(guess,x),guess,sqrtIter(improve(guess,x),x)); 
}

function square(x) {
    return x*x;
}

function inc(a) {
    return a + 1;
}

function dec(a) {
    return a - 1;
}

function plus(a,b) {
    return a = 0 ? b : inc(dec(a)+ b);
}

function plus(a,b) {
    return a = 0 ? b : (inc(b)+dec(a));
}

console.log(plus(2,3));