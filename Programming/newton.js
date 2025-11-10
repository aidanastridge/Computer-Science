function square(x) {
    return x*x;
};

function abs(x) {
    return x < 0 ? -x:x;
}

function average(x,y){
    return (x+y)/2;
}

function sqrt(x) {
    
    function goodEnough(guess,x) {
        return abs(square(guess)-x) < 0.001;
    }

    function improve(guess, x) {
        return average(guess,(x/guess));
    }

    function sqrtIter(guess, x) {
        return goodEnough(guess,x) ? guess : sqrtIter(improve(guess,x),x);
    }
    
    return sqrtIter(1.0,x);   
}

console.log(sqrt(9));